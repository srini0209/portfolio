// src/components/sections/Experience.tsx
'use client'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/Card'
import { Calendar, MapPin, ArrowRight } from 'lucide-react'
import { Playfair_Display } from 'next/font/google'
import Link from 'next/link'
const PlayfairDisplay = Playfair_Display({
    variable: "--font-playfair-display",
    subsets: ["latin"],
    weight: "400",
});

const EXPERIENCES = [
    {
        title: "Senior Full Stack Developer",
        company: "TechCorp Solutions",
        location: "San Francisco, CA",
        period: "Jan 2023 - Present",
        type: "Full-time",
        description: [
            "Led development of 5+ React/Next.js applications serving 10k+ daily users",
            "Architected scalable Node.js APIs with MongoDB, reducing response times by 40%",
            "Mentored 3 junior developers and established code review processes",
            "Implemented CI/CD pipelines using GitHub Actions, improving deployment efficiency by 60%"
        ],
        technologies: ["React", "Next.js", "Node.js", "MongoDB", "TypeScript", "AWS"]
    },]

export function Experience() {
    return (
        <section id="experience" className="py-20 floating-diamond">

            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">Work Experience</h2>
                    <p className={`text-muted-foreground max-w-2xl mx-auto !${PlayfairDisplay.variable}`} style={{fontFamily:'playfair Display, sans-serif'}}>
                        A journey through my professional development, building scalable applications and growing technical expertise
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {EXPERIENCES.map((experience, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="relative mb-8"
                        >
                            {/* Timeline line */}
                            {index !== EXPERIENCES.length - 1 && (
                                <div className="absolute left-6 top-16 w-0.5 h-full bg-primary/20 -z-10" />
                            )}

                            <Card className="relative backdrop-blur-md bg-white/5 border border-white/10 hover:shadow-lg transition-shadow">
                                <CardContent className="p-8">
                                    {/* Timeline dot */}
                                    <div className="absolute -left-2 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg" />

                                    <div className="grid md:grid-cols-3 gap-6">
                                        <div className="md:col-span-2">
                                            <div className="mb-4">
                                                <h3 className="text-xl font-semibold text-foreground mb-1">
                                                    {experience.title}
                                                </h3>
                                                <div className="flex items-center gap-2 text-primary font-medium mb-2">
                                                    <span>{experience.company}</span>
                                                    <ArrowRight size={16} />
                                                    <span className="text-muted-foreground">{experience.type}</span>
                                                </div>
                                                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                                                    <div className="flex items-center gap-1">
                                                        <Calendar size={14} />
                                                        <span>{experience.period}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <MapPin size={14} />
                                                        <span>{experience.location}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <ul className="space-y-2 mb-4">
                                                {experience.description.map((item, itemIndex) => (
                                                    <li key={itemIndex} className="text-muted-foreground flex items-start gap-2">
                                                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="space-y-4">
                                            <div>
                                                <h4 className="text-sm font-semibold text-foreground mb-2">Technologies</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {experience.technologies.map((tech) => (
                                                        <span
                                                            key={tech}
                                                            className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Call to action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center mt-12"
                >
                    <Card className="max-w-2xl mx-auto bg-primary/5 border-primary/20">
                        <CardContent className="p-8">
                            <h3 className="text-xl font-semibold mb-2">Ready to Work Together?</h3>
                            <p className="text-muted-foreground mb-4">
                                I'm always interested in discussing new opportunities and exciting projects.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                <Link
                                    href="#contact"
                                    className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-6 py-2 text-sm font-medium hover:bg-primary/90 transition-colors"
                                >
                                    Get In Touch
                                </Link>
                                <Link
                                    href="/Seenivasan-Resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                                >
                                    Download Resume
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    )
}