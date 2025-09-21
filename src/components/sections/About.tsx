// src/components/sections/About.tsx
'use client'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/Card'
export function About() {
    return (
        // <section id="about" className="py-20 bg-secondary/30">
        <section id="about" className="py-20 relative floating-shapes ">

            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4 text-primary">
                        About Me
                    </h2>


                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Passionate full-stack developer with 4+ years of experience building scalable web applications
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* <Card> */}
                        <Card className="glass-effect hover:shadow-xl hover:shadow-primary/20 transition-all duration-300">

                            <CardContent className="p-8">
                                <h3 className="text-2xl font-semibold mb-4">My Story</h3>
                                <p className="text-muted-foreground mb-4">
                                    I started my journey in web development with a passion for creating digital solutions
                                    that make a difference. Over the years, I've worked with various technologies and
                                    frameworks, always staying curious and eager to learn.
                                </p>
                                <p className="text-muted-foreground">
                                    When I'm not coding, you'll find me exploring new technologies, contributing to
                                    open-source projects, or mentoring aspiring developers.
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                                4+
                            </div>
                           

                            <div>
                                <h4 className="font-semibold">Years Experience</h4>
                                <p className="text-muted-foreground">Professional Development</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                                50+
                            </div>
                            <div>
                                <h4 className="font-semibold">Projects Completed</h4>
                                <p className="text-muted-foreground">Web Applications & Websites</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                                15+
                            </div>
                            <div>
                                <h4 className="font-semibold">Technologies</h4>
                                <p className="text-muted-foreground">Frontend & Backend</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}