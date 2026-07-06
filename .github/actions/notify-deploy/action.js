const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
  try {
    const status = core.getInput('status');
    const deploymentUrl = core.getInput('deployment-url');
    const { payload } = github.context;

    // Log deployment information
    console.log(`🚀 Deployment Status: ${status}`);
    console.log(`📍 Portfolio URL: ${deploymentUrl}`);
    console.log(`📅 Timestamp: ${new Date().toISOString()}`);

    // Create deployment summary
    let summary = `## 🎉 Portfolio Deployment Report\n\n`;
    summary += `**Status:** ${status === 'success' ? '✅ Success' : '❌ Failed'}\n`;
    summary += `**URL:** [${deploymentUrl}](${deploymentUrl})\n`;
    summary += `**Deployed At:** ${new Date().toLocaleString()}\n`;
    
    if (payload.repository) {
      summary += `**Repository:** ${payload.repository.full_name}\n`;
    }
    
    if (payload.head_commit) {
      summary += `**Commit:** ${payload.head_commit.message}\n`;
      summary += `**Author:** ${payload.head_commit.author.name}\n`;
    }

    // Write to job summary
    core.summary.write(summary);

    // Set output
    core.setOutput('notification', `Portfolio deployed successfully at ${deploymentUrl}`);

    console.log('✅ Deployment notification created successfully');
  } catch (error) {
    core.setFailed(`Action failed with error: ${error.message}`);
  }
}

run();
