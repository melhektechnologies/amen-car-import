"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/collection", label: "Inventory" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`fixed w-full z-50 top-0 left-0 transition-all duration-500 px-6 py-4 md:px-12 ${
          scrolled ? "md:py-4" : "md:py-8"
        }`}
      >
        <div className={`max-w-7xl mx-auto h-16 px-6 rounded-full transition-all duration-500 flex items-center justify-between ${
          scrolled ? "glass shadow-2xl" : "bg-transparent border border-transparent"
        }`}>
          {/* Wordmark */}
          <Link
            href="/"
            className="font-display font-bold text-xl md:text-2xl tracking-tighter text-foreground group"
            onClick={() => setIsOpen(false)}
          >
            AMEN <span className="text-accent group-hover:text-accent-hover transition-colors">CAR IMPORT</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[0.2em] font-bold">
            {navLinks.map((link) => {
              const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-all relative py-1 ${
                    isActive ? "text-accent" : "text-muted hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span 
                      layoutId="nav-active"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-accent" 
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden md:block bg-accent hover:bg-accent-hover text-white px-6 py-2.5 rounded-full font-bold text-[10px] uppercase tracking-widest transition-all shadow-[var(--glow-accent)] hover:shadow-[var(--glow-accent-strong)] hover:-translate-y-0.5 active:translate-y-0"
            >
              Get Quote
            </Link>
            <button
              className="p-2 text-muted hover:text-white transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close navigation" : "Open navigation"}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-5 h-5 md:hidden" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed inset-0 z-30 bg-background/95 backdrop-blur-2xl flex flex-col px-8 py-12 gap-8 md:hidden overflow-y-auto pb-safe"
            style={{ paddingTop: "7rem" }} // clears nav bar comfortably
          >
            {navLinks.map((link) => {
              const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`font-display font-bold text-4xl uppercase transition-colors ${
                    isActive ? "text-accent" : "text-white hover:text-accent"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="mt-auto flex flex-col gap-4">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="bg-accent text-white py-4 rounded-full font-bold text-center text-lg"
              >
                Inquire Now
              </Link>
              {/* Tap-to-call in mobile menu */}
              <a
                href="tel:+251932159546"
                className="border border-foreground/20 text-foreground py-4 rounded-full font-semibold text-center text-base"
              >
                +251 93 215 9546
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
