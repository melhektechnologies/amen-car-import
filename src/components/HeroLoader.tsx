"use client";

import { motion } from "framer-motion";

export function HeroLoader() {
  return (
    <div className="absolute inset-0 z-0 bg-[#030303] flex items-center justify-center overflow-hidden">
      {/* Dynamic scan line effect */}
      <motion.div
        animate={{
          y: ["-100%", "100%"],
          opacity: [0, 0.5, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute inset-x-0 h-px bg-accent/30 z-10"
      />
      
      {/* Pulse glow in the center */}
      <motion.div 
        animate={{
          scale: [0.9, 1.1, 0.9],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="w-96 h-96 bg-accent/20 blur-[100px] rounded-full"
      />

      <div className="relative z-10 flex flex-col items-center gap-6">
        <div className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                height: [4, 16, 4],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.15,
                ease: "easeInOut"
              }}
              className="w-1 bg-accent rounded-full"
            />
          ))}
        </div>
        <span className="text-[9px] font-mono uppercase tracking-[0.5em] text-accent/60 animate-pulse">
          Initializing Showroom
        </span>
      </div>
    </div>
  );
}
