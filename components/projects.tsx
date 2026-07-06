'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Zap } from 'lucide-react'

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with real-time inventory, payment processing, and admin dashboard.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop',
    link: '#',
    github: '#',
  },
  {
    title: 'AI Content Generator',
    description: 'Intelligent content generation tool powered by advanced NLP models. Features batch processing and customization.',
    tech: ['Next.js', 'OpenAI', 'Vercel', 'TypeScript'],
    image: 'https://images.unsplash.com/photo-1677442d019cecf8d00a4f6a9a0a4a0a?w=600&h=400&fit=crop',
    link: '#',
    github: '#',
  },
  {
    title: 'Data Analytics Dashboard',
    description: 'Real-time analytics dashboard with interactive charts, custom reports, and machine learning insights.',
    tech: ['React', 'D3.js', 'Python', 'WebSocket'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    link: '#',
    github: '#',
  },
  {
    title: 'Mobile App Suite',
    description: 'Cross-platform mobile applications for fitness tracking and wellness management with cloud sync.',
    tech: ['React Native', 'Firebase', 'Redux', 'Swift'],
    image: 'https://images.unsplash.com/photo-1512941691920-25bda36dc643?w=600&h=400&fit=crop',
    link: '#',
    github: '#',
  },
]

export function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="projects" className="py-20 bg-background relative overflow-hidden">
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
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of recent work showcasing my expertise in full-stack development and modern web technologies.
          </p>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              {/* Project image */}
              <div className="relative h-64 overflow-hidden bg-muted">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>

              {/* Project content */}
              <div className="p-6 relative">
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-primary/10 border border-primary/30 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.link}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
                  >
                    View Project
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center justify-center p-2 border border-border rounded-lg hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                  >
                    <Zap className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
