'use client'

import { motion } from 'framer-motion'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground mb-4">
            Built with React, Next.js, and Framer Motion
          </p>
          <p className="text-sm text-muted-foreground">
            © {currentYear} Your Name. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
