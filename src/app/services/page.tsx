import Link from "next/link";
import { Check, Shield, Globe, CarFront } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24 max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <h1 className="font-display text-5xl font-bold uppercase tracking-tight text-white mb-6">
          Import <span className="text-accent underline decoration-accent/30">Services</span>
        </h1>
        <p className="text-white/60 max-w-2xl mx-auto text-lg">
          We provide an end-to-end turn-key solution for importing premium, EV, and economical cars from Dubai to Addis Ababa.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-[#111111] p-10 rounded-[2rem] border border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
          <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 text-accent">
            <Globe className="w-7 h-7" />
          </div>
          <h2 className="text-2xl font-display font-bold text-white mb-4">A to Z Custom Sourcing</h2>
          <p className="text-white/60 leading-relaxed">
            Looking for a specific model? We scan the Dubai automotive market to hand-pick the best options available based on your budget, model preference, and specifications. We send you detailed photos, inspection reports, and videos before purchase.
          </p>
        </div>
        <div className="bg-[#111111] p-10 rounded-[2rem] border border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
          <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 text-accent">
            <Shield className="w-7 h-7" />
          </div>
          <h2 className="text-2xl font-display font-bold text-white mb-4">Logistics & Customs Duty Handling</h2>
          <p className="text-white/60 leading-relaxed">
            We handle everything from shipping via cargo to Djbouti, and arranging secure transport to Addis Ababa. Our team handles the entirety of customs clearance and duty payments so your vehicle arrives fully compliant and ready to drive.
          </p>
        </div>
      </div>

      <div className="bg-[#0a0a0a] rounded-[2rem] p-8 md:p-16 border border-accent/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 blur-[120px] pointer-events-none rounded-full" />
        <h2 className="text-3xl font-display font-bold text-white mb-8 relative z-10">The Amen Process</h2>
        <ul className="space-y-6 relative z-10">
          {[
            "Consultation & Vehicle Selection",
            "Payment Initial Deposit & Sourcing",
            "Comprehensive 150-Point Inspection in Dubai",
            "Purchase & Logistics to Djibouti",
            "Customs Processing & Tax Clearance",
            "Final Delivery and Handover in Addis Ababa"
          ].map((step, i) => (
            <li key={i} className="flex items-center gap-4 text-lg text-white/80">
              <span className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold shadow-[var(--glow-accent)] shrink-0">
                {i + 1}
              </span>
              {step}
            </li>
          ))}
        </ul>

        <div className="mt-12 relative z-10">
          <Link
            href="/contact"
            className="inline-block bg-accent hover:bg-accent-hover text-white px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest transition-all shadow-[var(--glow-accent)] hover:shadow-[var(--glow-accent-strong)] hover:-translate-y-1"
          >
            Inquire About Our Services
          </Link>
        </div>
      </div>
    </div>
  );
}
