// src/components/sections/Experience.tsx
'use client'

import { motion } from 'framer-motion'

export function Experi() {
  const experiences = [
    {
      role: 'Frontend Developer',
      company: 'TechCorp',
      period: '2022 – Present',
      description:
        'Building responsive web applications with React, Next.js, and TailwindCSS. Collaborated with designers to deliver pixel‑perfect UI and improved performance by 30%.',
    },
    {
      role: 'Full‑Stack Developer',
      company: 'Startup Labs',
      period: '2020 – 2022',
      description:
        'Developed REST APIs with Node.js and Express, integrated MongoDB, and deployed apps on Vercel. Mentored junior developers and introduced CI/CD pipelines.',
    },
    {
      role: 'Intern',
      company: 'CodeWorks',
      period: '2019 – 2020',
      description:
        'Assisted in building internal dashboards, wrote unit tests, and gained hands‑on experience with Git workflows and Agile methodology.',
    },
  ]

  return (
    <section
      id="experience"
      className="
        relative py-24 md:py-32 text-foreground
        bg-gradient-to-br from-[#0c4a6e] via-[#1e293b] to-[#0f172a]
      "
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Experience
        </motion.h2>

        <div className="space-y-8 max-w-3xl mx-auto">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-lg bg-slate-800/50 border border-slate-700 shadow-md"
            >
              <h3 className="text-xl font-semibold text-primary">
                {exp.role} <span className="text-foreground/70">@ {exp.company}</span>
              </h3>
              <p className="text-sm text-muted mb-2">{exp.period}</p>
              <p className="text-foreground/90">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
