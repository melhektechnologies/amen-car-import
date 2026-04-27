import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CareersPage() {
  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-6 min-h-[80vh]">
      <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white uppercase tracking-widest text-xs font-bold mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </Link>
      <h1 className="font-display text-5xl font-bold uppercase tracking-tight text-white mb-6">
        Careers at <span className="text-accent underline decoration-accent/30">Amen</span>
      </h1>
      <p className="text-white/60 mb-12 text-lg">
        Join the team that is redefining automotive importation and sales in Addis Ababa.
      </p>
      <div className="bg-[#111111] border border-white/5 p-12 rounded-[2rem] text-center shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
        <h2 className="text-2xl font-display font-bold text-white mb-4">No Open Positions</h2>
        <p className="text-white/60 mb-8 max-w-lg mx-auto">
          We are currently fully staffed and not accepting applications at this time. Please check back later or follow our social media for future opportunities.
        </p>
        <a href="mailto:careers@amencarimport.com" className="text-accent hover:text-white transition-colors underline font-bold uppercase tracking-widest text-xs">
          Submit General Resume
        </a>
      </div>
    </div>
  );
}
