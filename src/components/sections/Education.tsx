// src/components/sections/Education.tsx
'use client'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/Card'
import { GraduationCap } from 'lucide-react'

const educationData = [
  {
    degree: 'Bachelor of Engineering',
    specialization: 'Computer Science and Engineering',
    institution: 'Dhanalakshmi Srinivasan Engineering College, Perambalur, TN, India',
    year: '2017-2021',
  },
]

export function Education() {
  return (
    <section id="education" className="py-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Education</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic background.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative mb-12"
            >
              <div className="absolute  top-2 w-4 h-4 bg-primary rounded-full border-4 border-background -translate-x-1/2"></div>
              <motion.div whileHover={{ scale: 1.03 }}>
                <Card className="shadow-lg glass-effect" style={{ boxShadow: "0 4px 12px rgba(241, 245, 249, 0.1)"}}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-primary-foreground p-3 rounded-full">
                        <GraduationCap size={24} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground mb-1">{edu.year}</p>
                        <h3 className="text-xl font-semibold">{edu.degree}</h3><span className='text-[12px] text-muted-foreground'>(From Anna University, Chennai, TN, India)</span>
                        <p className="text-md font-medium text-primary">{edu.specialization}</p>
                        <p className="text-sm text-muted-foreground mt-2">{edu.institution}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
