'use client'

import { motion } from 'framer-motion'

const skillCategories = [
  {
    category: 'Frontend',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'GraphQL'],
  },
  {
    category: 'Tools & DevOps',
    skills: ['Git', 'Docker', 'AWS', 'Vercel', 'CI/CD'],
  },
  {
    category: 'Design',
    skills: ['Figma', 'UI/UX', 'Responsive Design', 'Animations', 'Accessibility'],
  },
]

export function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  }

  return (
    <section className="py-20 bg-gradient-to-b from-background to-card/30">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground">
            Technologies and tools I&apos;m proficient with
          </p>
        </motion.div>

        {/* Skills grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((cat, catIndex) => (
            <motion.div
              key={catIndex}
              variants={itemVariants}
              className="p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-lg font-bold mb-4 text-primary">
                {cat.category}
              </h3>
              <div className="space-y-3">
                {cat.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="flex items-center gap-2"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-muted-foreground">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
