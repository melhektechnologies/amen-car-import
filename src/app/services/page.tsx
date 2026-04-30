import Link from "next/link";
import { Shield, Globe, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ServicesPage() {
  return (
    <div className="bg-background min-h-screen text-foreground pt-32 pb-24 relative overflow-hidden">
      {/* Decorative Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 blur-[120px] pointer-events-none rounded-full translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] pointer-events-none rounded-full -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-24">
          <span className="text-[10px] font-mono tracking-[0.6em] text-accent uppercase font-bold mb-6 block">
            End-to-End Solutions
          </span>
          <h1 className="font-display font-bold text-6xl md:text-8xl uppercase tracking-tighter text-white leading-[0.9]">
            Direct <br />
            <span className="text-accent italic">Operations</span>
          </h1>
          <p className="text-white/40 mt-10 text-sm md:text-base max-w-2xl font-medium tracking-widest uppercase">
            We provide a turn-key pipeline for the acquisition and delivery of automotive excellence from Dubai to Addis Ababa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24">
          <div className="obsidian-card p-12 rounded-[3rem] group">
            <div className="w-16 h-16 bg-accent/5 border border-accent/10 rounded-2xl flex items-center justify-center mb-10 text-accent group-hover:bg-accent/10 transition-colors">
              <Globe className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-display font-bold text-white mb-6 uppercase tracking-tight">Sovereign Sourcing</h2>
            <p className="text-white/40 leading-relaxed text-sm font-medium tracking-wide">
              We navigate the UAE automotive ecosystem to secure vehicles that meet your exact parameters. Every selection is accompanied by high-definition dossiers, full history reports, and real-time inspections.
            </p>
          </div>
          <div className="obsidian-card p-12 rounded-[3rem] group">
            <div className="w-16 h-16 bg-accent/5 border border-accent/10 rounded-2xl flex items-center justify-center mb-10 text-accent group-hover:bg-accent/10 transition-colors">
              <Shield className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-display font-bold text-white mb-6 uppercase tracking-tight">Logistics Command</h2>
            <p className="text-white/40 leading-relaxed text-sm font-medium tracking-wide">
              Our infrastructure handles global maritime freight to Djibouti and dedicated inland transit to Ethiopia. We manage every facet of tax clearance and documentation for a seamless handover.
            </p>
          </div>
        </div>

        <div className="glass rounded-[4rem] p-12 md:p-24 border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 blur-[120px] pointer-events-none rounded-full" />
          
          <div className="relative z-10">
            <span className="text-[10px] font-mono tracking-[0.6em] text-accent uppercase font-bold mb-10 block">The Pipeline</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-16 uppercase tracking-tighter">Operational Workflow</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <ul className="space-y-8">
                {[
                  "Consultation & Digital Sourcing",
                  "Asset Selection & Reserved Allocation",
                  "150-Point Technical Validation in Dubai",
                ].map((step, i) => (
                  <li key={i} className="flex items-center gap-6 group">
                    <span className="w-12 h-12 rounded-full border border-accent/20 bg-accent/5 flex items-center justify-center text-accent font-bold text-sm shadow-[var(--glow-accent)] shrink-0 transition-all group-hover:scale-110">
                      {i + 1}
                    </span>
                    <span className="text-white/70 font-bold uppercase tracking-[0.2em] text-xs transition-colors group-hover:text-white">{step}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-8">
                {[
                  "Global Freight & Maritime Logistics",
                  "Customs Protocol & Duty Settlement",
                  "Final Certification & Handover"
                ].map((step, i) => (
                  <li key={i} className="flex items-center gap-6 group">
                    <span className="w-12 h-12 rounded-full border border-accent/20 bg-accent/5 flex items-center justify-center text-accent font-bold text-sm shadow-[var(--glow-accent)] shrink-0 transition-all group-hover:scale-110">
                      {i + 4}
                    </span>
                    <span className="text-white/70 font-bold uppercase tracking-[0.2em] text-xs transition-colors group-hover:text-white">{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-20">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-4 bg-accent hover:bg-accent-hover text-white px-12 py-6 rounded-full font-black text-[10px] uppercase tracking-[0.3em] transition-all shadow-[var(--glow-accent)] hover:shadow-[var(--glow-accent-strong)]"
              >
                Request Consultation
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
