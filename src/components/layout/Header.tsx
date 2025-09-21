// src/components/layout/Header.tsx
'use client'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/Button'
import { Menu, X } from 'lucide-react'

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        { href: '#about', label: 'About' },
        { href: '#skills', label: 'Skills' },
        { href: '#experience', label: 'Experience' },
        { href: '#contact', label: 'Contact' },
    ]

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
            }`}>
            <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
                <a href="#" className="text-2xl font-bold text-primary">
                    John Doe
                </a>

                <div className="hidden md:flex space-x-8">
                    {navItems.map(item => (
                        <a key={item.href} href={item.href}
                            className="text-foreground hover:text-primary transition-colors">
                            {item.label}
                        </a>
                    ))}
                </div>

                <Button variant="outline" size="sm" className="md:hidden"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </Button>
            </nav>

            {isMobileMenuOpen && (
                <div className="md:hidden bg-background border-t">
                    <div className="container mx-auto px-4 py-4 space-y-4">
                        {navItems.map(item => (
                            <a key={item.href} href={item.href}
                                className="block text-foreground hover:text-primary"
                                onClick={() => setIsMobileMenuOpen(false)}>
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    )
}