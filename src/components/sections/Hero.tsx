// src/components/sections/Hero.tsx
"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  Code,
  Zap,
  Palette,
} from "lucide-react";
// import Image from 'next/image'
import Link from "next/link";
import { Header } from "../layout/Header";

export function Hero() {
  return (
    <section
      id="hero"
      className=" w-full
      relative py-24 md:py-32 
      bg-gradient-to-br       
      from-[#0c4a6e] via-[#1e293b] to-[#0f172a]
      text-foreground
    "
    >
      <div className="container mx-auto px-4 flex flex-col items-center text-center gap-8">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Hello, I'm <span className="text-primary">Seenivasan</span>
        </h1>
        {/* <h2 className="text-xl md:text-2xl text-muted">
          Full-Stack Developer based in Chennai, India
        </h2> */}
        <TypingRole />
        <p className="text-muted max-w-2xl">
          I build scalable and elegant web applications using modern
          technologies like React, Next.js, and TailwindCSS.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="#experience">
            <Button size="lg" className="cursor-pointer">
              View My Work
            </Button>
          </Link>
          <Link href="/Seenivasan-Resume.pdf" target="_blank">
            <Button variant="outline" size="lg" className="cursor-pointer">
              Download Resume
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex gap-5 justify-center items-center mt-8">
        <Link
          href="https://linkedin/in/seenivasan-thiruppathi"
          target="_blank"
          title="LinkedIn"
          className="cursor-pointer"
        >
          <Linkedin />
        </Link>
        <Link
          href="https://github.com/"
          target="_blank"
          title="Github"
          className="cursor-pointer"
        >
          <Github />
        </Link>
        <Link
          href={"mailto:Seenivasanthiruppathi@outlook.com"}
          className="text-foreground cursor-pointer"
          title="Email"
        >
          <Mail className="cursor-pointer" />
        </Link>
      </div>
    </section>
  );
}

function TypingRole() {
  const roles = useMemo(
    () => ["Frontend Developer", "Full‑Stack Developer"],
    []
  );
  const [index, setIndex] = useState(0); // which role
  const [subIndex, setSubIndex] = useState(0); // how many chars shown
  const [deleting, setDeleting] = useState(false); // are we deleting?
  const [blink, setBlink] = useState(true); // cursor blink
  const [typingSpeed, setTypingSpeed] = useState(90);
  const mounted = useRef(true);

  // Typing/deleting effect
  useEffect(() => {
    if (!mounted.current) return;
    const current = roles[index];
    const atWordEnd = subIndex === current.length;
    const atWordStart = subIndex === 0;

    // When finished typing, pause before deleting
    if (!deleting && atWordEnd) {
      const pause = setTimeout(() => {
        setDeleting(true);
        setTypingSpeed(40);
      }, 900);
      return () => clearTimeout(pause);
    }

    // When finished deleting, move to next word
    if (deleting && atWordStart) {
      const next = setTimeout(() => {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
        setTypingSpeed(90);
      }, 400);
      return () => clearTimeout(next);
    }

    const step = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(step);
  }, [subIndex, deleting, index, roles, typingSpeed]);

  // Cursor blink
  useEffect(() => {
    const timer = setInterval(() => setBlink((v) => !v), 500);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    return () => {
      mounted.current = false;
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="inline-flex items-center h-10 justify-center"
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
          ${blink ? "opacity-100" : "opacity-0"}
        `}
        aria-hidden="true"
      />
    </motion.div>
  );
}
