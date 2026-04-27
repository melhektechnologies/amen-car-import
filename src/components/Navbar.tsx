"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/collection", label: "Inventory" },
  { href: "/services", label: "Import Services" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  // FIX: track active route to provide visual feedback to user
  const pathname = usePathname();

  return (
    <>
      <nav className="fixed w-full z-40 top-0 left-0 border-b border-white/10 bg-background/85 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Wordmark */}
          <Link
            href="/"
            className="font-display font-bold text-2xl tracking-tighter text-foreground"
            onClick={() => setIsOpen(false)}
          >
            AMEN <span className="text-accent underline decoration-accent/30">CAR IMPORT</span>
          </Link>

          {/* Desktop links with active state */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors relative py-1 ${
                    isActive ? "text-white" : "text-muted hover:text-white"
                  }`}
                >
                  {link.label}
                  {/* Gold underline for active page */}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden md:block bg-accent hover:bg-accent-hover text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-all shadow-[var(--glow-accent)] hover:shadow-[var(--glow-accent-strong)]"
            >
              Get a Quote
            </Link>
            <button
              className="md:hidden p-2 text-muted hover:text-white transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close navigation" : "Open navigation"}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
