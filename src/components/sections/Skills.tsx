// src/components/sections/Skills.tsx
'use client'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/Card'

const SKILLS = {
  frontend: {
    title: "Frontend Development",
    icon: "🎨",
    skills: ["React", "Next.js", "TypeScript", "TailwindCSS", "Redux", "Framer Motion"],
    color: "primary"
  },
  backend: {
    title: "Backend Development", 
    icon: "⚡",
    skills: ["Node.js", "MongoDB", "Express.js", "REST APIs", "GraphQL", "PostgreSQL"],
    color: "accent"
  },
  tools: {
    title: "Tools & Technologies",
    icon: "🛠️", 
    skills: ["Git", "Docker", "AWS", "Vercel", "Figma", "VS Code"],
    color: "secondary"
  }
}

export function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(SKILLS).map(([key, category], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="h-full card-gradient border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className={`text-xl font-semibold mb-6 text-${category.color}`}>
                    {category.title}
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: (index * 0.2) + (skillIndex * 0.1) }}
                        whileHover={{ scale: 1.05 }}
                        className="skill-badge px-3 py-2 rounded-lg text-sm font-medium cursor-pointer"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}