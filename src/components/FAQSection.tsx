"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: "How long does the import process take?",
    a: "Typically, it takes 3-6 weeks from Dubai to Addis Ababa, depending on shipping schedules and customs clearance.",
  },
  {
    q: "Are the vehicles inspected before shipping?",
    a: "Yes, every vehicle undergoes a comprehensive 150-point inspection in Dubai before we initiate the shipping process.",
  },
  {
    q: "Do you handle the customs and duty?",
    a: "Yes, Amen Car Import provides full 'door-to-door' service, including handling all customs documentation and duty payments.",
  },
  {
    q: "Can I order a specific car model not in stock?",
    a: "Absolutely. We can source any specific model from our extensive network in Dubai and import it specifically for you.",
  },
  {
    q: "Is there a warranty on electric vehicles?",
    a: "Most of our EVs (BYD, VW ID series) come with manufacturer-backed global warranties or our own limited service guarantee.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-[#050505] border-t border-white/5">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-foreground mb-12 text-center">
          Common Inquiries
        </h2>
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`border rounded-2xl bg-[#0a0a0a] overflow-hidden transition-all duration-300 ${isOpen ? "border-accent/40 shadow-[var(--glow-accent)]" : "border-white/10 hover:border-white/20"}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-6 text-left gap-4"
                >
                  <span className="font-bold text-white text-sm md:text-base">{faq.q}</span>
                  <span className="shrink-0 text-accent">
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-muted leading-relaxed text-sm">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
