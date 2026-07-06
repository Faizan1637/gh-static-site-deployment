# Modern Portfolio with GitHub Actions Deployment

A beautiful, animated portfolio website built with Next.js, React, and Framer Motion. Configured for static export and ready to deploy via custom GitHub Actions.

## Features

✨ **Modern Design**
- Dark theme with golden accents
- Smooth animations and transitions using Framer Motion
- Fully responsive layout
- Semantic HTML and accessibility best practices

🚀 **Performance**
- Static site generation (no runtime server needed)
- Optimized images with Next.js
- Fast page load times
- SEO optimized

🔧 **GitHub Actions Integration**
- Automated build and deployment workflows
- Custom JavaScript actions for advanced workflows
- GitHub Pages deployment
- PR build artifacts
- Deployment notifications

## Project Structure

```
.
├── app/
│   ├── layout.tsx          # Root layout with dark theme
│   ├── globals.css         # Theme tokens and Tailwind config
│   └── page.tsx            # Home page
├── components/
│   ├── hero.tsx            # Hero section with animated background
│   ├── projects.tsx        # Featured projects showcase
│   ├── skills.tsx          # Skills and expertise
│   ├── contact.tsx         # Contact form and info
│   └── footer.tsx          # Footer
├── .github/
│   ├── workflows/
│   │   ├── deploy.yml      # Basic deployment workflow
│   │   └── advanced-deploy.yml  # Advanced multi-job workflow
│   └── actions/
│       ├── deploy-static/  # Custom composite action
│       └── notify-deploy/  # Custom JavaScript action
└── next.config.mjs         # Next.js config with static export
```

## Quick Start

### Local Development

1. **Clone and install:**
   ```bash
   git clone <repository-url>
   cd portfolio
   pnpm install
   ```

2. **Run development server:**
   ```bash
   pnpm dev
   ```
   Visit `http://localhost:3000`

3. **Build for production:**
   ```bash
   pnpm build
   ```
   Static files are generated in the `out/` directory

### GitHub Actions Deployment

#### Option 1: Basic Deployment (Simple)

The `.github/workflows/deploy.yml` workflow provides:
- Automated build on push to main branch
- Automatic GitHub Pages deployment
- Build artifact storage for 30 days
- PR build status comments

**Setup:**
1. Push your changes to the main branch
2. GitHub Actions automatically builds and deploys
3. Your portfolio is live on GitHub Pages

#### Option 2: Advanced Deployment (Recommended)

The `.github/workflows/advanced-deploy.yml` workflow includes:
- Code validation and linting
- Custom deployment actions
- Build caching for faster deployments
- Comprehensive deployment notifications
- GitHub Pages with proper permissions

**Setup:**
1. Ensure GitHub Pages is enabled in repository settings
2. Set Pages source to "GitHub Actions"
3. Push to main branch - workflow runs automatically

## Custom GitHub Actions

### 1. Deploy Static Action

**Location:** `.github/actions/deploy-static/`

A composite action that handles the complete build process.

**Inputs:**
- `node-version`: Node.js version (default: 20.x)
- `build-command`: Build command (default: pnpm run build)
- `output-directory`: Output directory (default: out)

**Usage in workflow:**
```yaml
- uses: ./.github/actions/deploy-static
  with:
    node-version: '20.x'
    build-command: 'pnpm run build'
    output-directory: 'out'
```

### 2. Notify Deploy Action

**Location:** `.github/actions/notify-deploy/`

A custom JavaScript action for deployment notifications.

**Inputs:**
- `status`: Deployment status (success/failure)
- `deployment-url`: Portfolio URL

**What it does:**
- Creates deployment summary in job output
- Logs deployment information
- Generates GitHub Step Summary

**Usage in workflow:**
```yaml
- uses: ./.github/actions/notify-deploy
  with:
    status: 'success'
    deployment-url: 'https://example.com'
```

## Customization

### Update Portfolio Content

Edit component files to customize:

**Hero Section** (`components/hero.tsx`):
- Main heading and description
- Social media links
- Call-to-action buttons

**Projects** (`components/projects.tsx`):
- Replace project data with your own
- Update project images, descriptions, and links
- Modify tech stack tags

**Skills** (`components/skills.tsx`):
- Add/remove skill categories
- Update skills list
- Customize section styling

**Contact** (`components/contact.tsx`):
- Update email and phone
- Modify contact form fields
- Add social links

### Theme Customization

Edit `app/globals.css` to customize colors:

```css
:root {
  --background: #0a0a0a;    /* Dark background */
  --foreground: #fafafa;    /* Light text */
  --primary: #fbbf24;       /* Golden accent */
  --card: #151515;          /* Card background */
  --muted-foreground: #9ca3af; /* Muted text */
  /* ... more tokens ... */
}
```

### Update GitHub Actions

**Basic Workflow (`deploy.yml`):**
- Change branch triggers in `on.push.branches`
- Update GitHub Pages domain in `cname` field
- Modify retention days for artifacts

**Advanced Workflow (`advanced-deploy.yml`):**
- Add more validation steps
- Customize notifications
- Add deployment environments
- Configure secrets and permissions

## Deployment Checklist

- [ ] Update portfolio content in components
- [ ] Customize colors and theme in globals.css
- [ ] Update social media links
- [ ] Add real project images
- [ ] Configure custom domain (optional)
- [ ] Test locally: `pnpm dev`
- [ ] Build locally: `pnpm build`
- [ ] Push to GitHub main branch
- [ ] Monitor GitHub Actions workflow
- [ ] Visit deployed portfolio

## Environment Variables

Currently, the portfolio doesn't require environment variables. If you add features requiring secrets (analytics, contact form backend), add them to:

**Repository Secrets:**
1. Go to Settings → Secrets and variables → Actions
2. Click "New repository secret"
3. Add your secrets
4. Reference in workflows: `${{ secrets.SECRET_NAME }}`

## Monitoring Deployments

### GitHub Actions UI
- Visit **Actions** tab in your repository
- View workflow runs and logs
- Check job summaries and outputs

### GitHub Pages Status
- Visit **Settings** → **Pages**
- View deployment history
- Check live site status

### Step Summaries
- Workflows automatically create step summaries
- Check the workflow run detail page
- Contains deployment information and links

## Performance Tips

1. **Optimize Images**: Use smaller dimensions and modern formats
2. **Lazy Load**: Add `loading="lazy"` to images
3. **Code Splitting**: Components automatically code-split
4. **Caching**: Browser caching is configured for static assets

## Learning Resources

**GitHub Actions:**
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Creating custom actions](https://docs.github.com/en/actions/creating-actions)
- [Workflow syntax reference](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions)

**Next.js Static Export:**
- [Next.js Static Export Docs](https://nextjs.org/docs/pages/building-your-application/deploying/static-exports)
- [Deploying Static Sites](https://nextjs.org/docs/app/building-your-application/deploying)

**Framer Motion:**
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Animation Examples](https://www.framer.com/motion/animation/)

## Troubleshooting

### Build Fails
- Check Node.js version compatibility
- Verify all dependencies are installed: `pnpm install`
- Check for TypeScript errors: `pnpm tsc`

### GitHub Pages Not Updating
- Verify GitHub Pages is enabled in Settings
- Check workflow logs in Actions tab
- Ensure main branch has latest code

### Custom Actions Not Found
- Verify action paths in workflow: `./.github/actions/action-name`
- Check action.yml or action.js exists
- Review action directory structure

## Support & Contributing

For issues or improvements:
1. Check GitHub Actions logs
2. Review workflow output and summaries
3. Verify file structure matches expected layout
4. Check documentation and error messages

## License

Feel free to use this portfolio template for your own projects!

---

**Built with:** Next.js 16, React 19, TypeScript, Tailwind CSS, Framer Motion
**Deployed via:** GitHub Actions + GitHub Pages
