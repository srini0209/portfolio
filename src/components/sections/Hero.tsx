// src/components/sections/Hero.tsx
'use client'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Github, Linkedin, Mail, ChevronDown, Code, Zap, Palette } from 'lucide-react'

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden floating-shapes">
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Animated Icons */}
          <div className="flex justify-center space-x-8 mb-8">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="p-3 rounded-full bg-primary/20 backdrop-blur-sm"
            >
              <Code className="text-primary" size={24} />
            </motion.div>
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="p-3 rounded-full bg-accent/20 backdrop-blur-sm"
            >
              <Zap className="text-accent" size={24} />
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="p-3 rounded-full bg-secondary/20 backdrop-blur-sm"
            >
              <Palette className="text-secondary" size={24} />
            </motion.div>
          </div>

          {/* Name and animated role (cycling) */}
          <h1 className="text-7xl md:text-9xl font-extrabold leading-tight mb-3">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-white">
              John Doe
            </span>
          </h1>

          <div className="mb-8 flex items-center justify-center">
            <TypingRole />
          </div>


          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-muted-foreground">
            Crafting <span className="text-accent font-semibold">modern web experiences</span> with
            <span className="text-primary font-semibold"> React</span>,
            <span className="text-secondary font-semibold"> Next.js</span>, and
            <span className="text-success font-semibold"> cutting-edge technologies</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="neon-glow bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary transition-all duration-300">
              View My Work
            </Button>
            <Button variant="outline" size="lg" className="glass-effect border-primary/50 hover:bg-primary/10 transition-all duration-300">
              Download Resume
            </Button>
          </div>

          {/* Animated Social Links */}
          <div className="flex justify-center space-x-6">
            {[
              { icon: Github, href: "#", color: "primary" },
              { icon: Linkedin, href: "#", color: "accent" },
              { icon: Mail, href: "#contact", color: "secondary" }
            ].map(({ icon: Icon, href, color }, index) => (
              <motion.a
                key={index}
                href={href}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`p-3 rounded-full glass-effect text-${color} hover:text-${color} transition-all duration-300 hover:shadow-lg`}
              >
                <Icon size={28} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Animated scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="p-2 rounded-full glass-effect">
          <ChevronDown size={32} className="text-accent" />
        </div>
      </motion.div>
    </section>
  )
}






function TypingRole() {
  const roles = useMemo(() => ['Frontend Developer', 'Full‑Stack Developer'], [])
  const [index, setIndex] = useState(0)           // which role
  const [subIndex, setSubIndex] = useState(0)     // how many chars shown
  const [deleting, setDeleting] = useState(false) // are we deleting?
  const [blink, setBlink] = useState(true)        // cursor blink
  const [typingSpeed, setTypingSpeed] = useState(90)
  const mounted = useRef(true)

  // Typing/deleting effect
  useEffect(() => {
    if (!mounted.current) return
    const current = roles[index]
    const atWordEnd = subIndex === current.length
    const atWordStart = subIndex === 0

    // When finished typing, pause before deleting
    if (!deleting && atWordEnd) {
      const pause = setTimeout(() => {
        setDeleting(true)
        setTypingSpeed(40)
      }, 900)
      return () => clearTimeout(pause)
    }

    // When finished deleting, move to next word
    if (deleting && atWordStart) {
      const next = setTimeout(() => {
        setDeleting(false)
        setIndex((prev) => (prev + 1) % roles.length)
        setTypingSpeed(90)
      }, 400)
      return () => clearTimeout(next)
    }

    const step = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1))
    }, typingSpeed)

    return () => clearTimeout(step)
  }, [subIndex, deleting, index, roles, typingSpeed])

  // Cursor blink
  useEffect(() => {
    const timer = setInterval(() => setBlink((v) => !v), 500)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    return () => {
      mounted.current = false
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="inline-flex items-center justify-center"
      aria-live="polite"
    >
      <span className="text-xl md:text-2xl font-semibold text-muted-foreground">
        <span
          className="
            bg-clip-text text-foreground 
            bg-gradient-to-r from-accent via-secondary to-primary
          "
        >
          {roles[index].substring(0, subIndex)}
        </span>
      </span>
      <span
        className={`
          ml-1 inline-block w-[2px] h-[1.2em] 
          align-[-0.2em] bg-foreground
          ${blink ? 'opacity-100' : 'opacity-0'}
        `}
        aria-hidden="true"
      />
    </motion.div>
  )
}