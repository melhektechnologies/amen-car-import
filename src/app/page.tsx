"use client";
// Build trigger: 2026-04-27-17-25
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Car,
  Globe,
  Calendar,
  Search,
  Quote,
} from "lucide-react";
import Image from "next/image";
import { Hero3D } from "@/components/Hero3D";
import { VehicleCard } from "@/components/VehicleCard";
import { FAQSection } from "@/components/FAQSection";
import { vehicles } from "@/lib/vehicles";

// Pre-select featured vehicles for the homepage
const featuredSales = vehicles.filter((v) => v.category !== "rental").slice(0, 3);
const apexMain = vehicles[0];
const apexSide = vehicles.slice(1, 3);

export default function Home() {
  const [searchTab, setSearchTab] = useState<"rent" | "buy">("rent");
  const [dates, setDates] = useState({ pickup: "", dropoff: "" });

  useEffect(() => {
    const d1 = new Date(); d1.setDate(d1.getDate() + 2);
    const d2 = new Date(); d2.setDate(d2.getDate() + 4);
    const fmt = (d: Date) => d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    
    // Using queueMicrotask to avoid synchronous setState in effect warning
    queueMicrotask(() => {
      setDates({ pickup: fmt(d1), dropoff: fmt(d2) });
    });
  }, []);
  return (
    <div className="bg-background min-h-screen text-foreground overflow-x-hidden">

      {/* ─── 1. HERO ────────────────────────────────────────────────── */}
      <section className="relative h-screen flex flex-col justify-center overflow-hidden">
        <Hero3D />
        
        {/* Cinematic Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030303]/40 via-transparent to-[#030303] z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(3,3,3,0.4)_100%)] z-10 pointer-events-none" />

        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 pointer-events-none text-left">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[10px] font-mono tracking-[0.6em] text-accent uppercase font-bold mb-6 block text-left">
              Precision Engineering &bull; Global Logistics
            </span>
            <h1 className="font-display font-bold text-6xl md:text-[10rem] tracking-tighter text-white uppercase leading-[0.8] mb-8">
              Drive <br />
              <span className="text-accent italic">Elite</span>
            </h1>

            <p className="mt-8 text-sm md:text-base text-white/50 font-medium max-w-lg tracking-widest uppercase">
              Curated imports from Dubai to Addis Ababa. <br />
              Uncompromising quality, total transparency.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              className="mt-12 flex flex-col sm:flex-row items-start gap-6 pointer-events-auto"
            >
              <Link
                href="/collection"
                className="group relative bg-accent hover:bg-accent-hover text-white px-10 py-5 rounded-full font-bold text-[10px] uppercase tracking-[0.2em] transition-all shadow-[var(--glow-accent)] hover:shadow-[var(--glow-accent-strong)]"
              >
                Explore Fleet
              </Link>
              <a
                href="https://wa.me/251932159546"
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-white/10 hover:border-white/30 glass text-white px-10 py-5 rounded-full font-bold text-[10px] uppercase tracking-[0.2em] transition-all flex items-center gap-3"
              >
                Direct Inquiry
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
        >
          <div className="w-px h-16 bg-gradient-to-b from-accent to-transparent animate-bounce" />
        </motion.div>
      </section>

      {/* ─── 2. SEARCH CONSOLE ─────────────────────────────────────────── */}
      <section className="relative z-30 -mt-24 max-w-5xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="glass rounded-[2.5rem] p-6 md:p-10 shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
        >
          <div className="flex gap-10 border-b border-white/5 pb-6 mb-8 px-4">
            <button 
              onClick={() => setSearchTab("rent")}
              className={`font-bold tracking-[0.3em] text-[10px] uppercase transition-all relative pb-6 -mb-[26px] ${searchTab === "rent" ? "text-accent" : "text-white/40 hover:text-white"}`}
            >
              Rental Fleet
              {searchTab === "rent" && <motion.span layoutId="search-tab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />}
            </button>
            <button 
              onClick={() => setSearchTab("buy")}
              className={`font-bold tracking-[0.3em] text-[10px] uppercase transition-all relative pb-6 -mb-[26px] ${searchTab === "buy" ? "text-accent" : "text-white/40 hover:text-white"}`}
            >
              Direct Purchase
              {searchTab === "buy" && <motion.span layoutId="search-tab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />}
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
            <div className="space-y-2">
              <label className="text-[9px] text-white/30 uppercase tracking-[0.3em] font-black block">Origin</label>
              <div className="h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center px-4 gap-3 text-white text-xs font-bold">
                <Globe className="w-4 h-4 text-accent" /> Dubai, UAE
              </div>
            </div>
            
            {searchTab === "rent" ? (
              <>
                <div className="space-y-2">
                  <label className="text-[9px] text-white/30 uppercase tracking-[0.3em] font-black block">Delivery</label>
                  <div className="h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center px-4 gap-3 text-white text-xs font-bold">
                    <Calendar className="w-4 h-4 text-accent" /> {dates.pickup || "Select Date"}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] text-white/30 uppercase tracking-[0.3em] font-black block">Return</label>
                  <div className="h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center px-4 gap-3 text-white text-xs font-bold">
                    <Calendar className="w-4 h-4 text-accent" /> {dates.dropoff || "Select Date"}
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="space-y-2">
                  <label className="text-[9px] text-white/30 uppercase tracking-[0.3em] font-black block">Status</label>
                  <div className="h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center px-4 gap-3 text-white text-xs font-bold">
                    <ShieldCheck className="w-4 h-4 text-accent" /> Factory New
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] text-white/30 uppercase tracking-[0.3em] font-black block">Budget Range</label>
                  <div className="h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center px-4 gap-3 text-white/40 text-xs font-bold">
                    Unlimited
                  </div>
                </div>
              </>
            )}

            <div className="flex items-end">
              <Link
                href={`/collection?category=${searchTab === "rent" ? "rental" : "sales"}`}
                className="bg-accent hover:bg-accent-hover text-white shadow-[var(--glow-accent)] hover:shadow-[var(--glow-accent-strong)] w-full h-14 rounded-2xl font-black flex items-center justify-center gap-3 transition-all uppercase tracking-[0.2em] text-[10px]"
              >
                <Search className="w-4 h-4" /> Discover
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ─── 3. FEATURED INVENTORY ──────────────────────────────────────── */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <span className="text-[10px] font-mono tracking-[0.6em] text-accent uppercase font-bold">The Collection</span>
            <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tight text-white leading-none">
              Apex Allocation
            </h2>
          </div>
          <Link href="/collection" className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 hover:text-accent transition-colors border-b border-white/10 pb-2">
            View All Series &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:h-[650px]">
          {/* Main Hero Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3 h-full"
          >
            <Link href={`/collection/${apexMain.slug}`} className="group relative block w-full h-full rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl">
              <Image
                src={apexMain.image}
                alt={apexMain.name}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105 brightness-[0.7] group-hover:brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 p-10 w-full">
                <span className="bg-accent/10 border border-accent/20 text-accent text-[9px] font-black px-4 py-2 rounded-full uppercase tracking-widest mb-6 inline-block backdrop-blur-md">
                  Priority Arrival
                </span>
                <h3 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 leading-none">
                  {apexMain.brand} <br /> {apexMain.name}
                </h3>
                <div className="flex items-center gap-6">
                  <div className="flex flex-col">
                    <span className="text-[8px] text-white/30 uppercase tracking-[0.2em] font-bold">Engine</span>
                    <span className="text-xs text-white font-bold">{apexMain.specs.engine}</span>
                  </div>
                  <div className="w-px h-8 bg-white/10" />
                  <div className="flex flex-col">
                    <span className="text-[8px] text-white/30 uppercase tracking-[0.2em] font-bold">Power</span>
                    <span className="text-xs text-white font-bold">{apexMain.specs.horsepower} HP</span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Side Cards */}
          <div className="md:col-span-2 flex flex-col gap-8">
            {apexSide.map((v, i) => (
              <motion.div
                key={v.slug}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="flex-1"
              >
                <Link
                  href={`/collection/${v.slug}`}
                  className="group relative block w-full h-full rounded-[2.5rem] overflow-hidden border border-white/5 bg-surface"
                >
                  <Image
                    src={v.image}
                    alt={v.name}
                    fill
                    className="object-cover opacity-50 group-hover:opacity-80 transition-all duration-700 group-hover:scale-105 brightness-[0.8]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8 w-full">
                    <h3 className="font-display text-2xl font-bold text-white mb-2 leading-none">
                      {v.brand} {v.name}
                    </h3>
                    <p className="text-accent text-[9px] font-black tracking-[0.3em] uppercase flex items-center gap-2">
                      View Dossier <ArrowRight className="w-3 h-3 group-hover:translate-x-2 transition-transform" />
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. WHY CHOOSE US ───────────────────────────────────────────── */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <span className="text-[10px] font-mono tracking-[0.6em] text-accent uppercase font-bold mb-4 block">The Advantage</span>
            <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tight text-white">
              Why Amen Car Import?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "Quality Assurance",
                body: "Every vehicle undergoes a rigorous 150-point inspection in Dubai before it ever touches the boat.",
              },
              {
                icon: Car,
                title: "Direct Sourcing",
                body: "Eliminate middle-man markups. We source directly from elite UAE exporters, ensuring the best value in Addis.",
              },
              {
                icon: Globe,
                title: "Seamless Logistics",
                body: "From documentation to delivery, we manage the entire import pipeline. You simply receive the keys.",
              },
            ].map(({ icon: Icon, title, body }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="obsidian-card p-10 rounded-[2.5rem] group"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent/5 border border-accent/10 flex items-center justify-center mb-10 group-hover:bg-accent/10 transition-colors">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-4">
                  {title}
                </h3>
                <p className="text-muted leading-relaxed text-sm">{body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. SALES OFFERS ────────────────────────────────────────────── */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="space-y-4">
            <span className="text-[10px] font-mono tracking-[0.6em] text-accent uppercase font-bold">Live Inventory</span>
            <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tight text-white leading-none">
              Duty-Paid & Ready
            </h2>
          </div>
          <div className="bg-red-500/5 border border-red-500/10 rounded-2xl px-6 py-4 flex items-center gap-4 animate-pulse">
            <span className="w-2 h-2 bg-red-500 rounded-full" />
            <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest">Limited Allocation Remaining</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuredSales.map((v, i) => (
            <motion.div
              key={v.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
            >
              <VehicleCard {...v} />
            </motion.div>
          ))}
        </div>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-20"
        >
          <Link
            href="/collection"
            className="text-white/40 font-bold text-[10px] flex items-center gap-4 border-b border-white/5 pb-2 hover:text-accent hover:border-accent transition-all uppercase tracking-[0.3em] group"
          >
            Access Full Dossier <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>
      </section>

      {/* ─── 6. TESTIMONIALS ────────────────────────────────────────────── */}
      <section className="py-32 px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto glass rounded-[4rem] p-12 md:p-24 relative overflow-hidden"
        >
          <Quote className="absolute -top-10 -left-10 w-64 h-64 text-white/5 z-0" />
          <div className="relative z-10">
            <p className="text-2xl md:text-4xl font-display font-medium text-white leading-tight mb-16 italic">
              &ldquo;The transparency provided by Amen Car Import changed my perception of car buying. Seeing the Dubai documentation before the car even arrived gave me total peace of mind.&rdquo;
            </p>
            <div className="flex items-center gap-6">
              <div className="w-12 h-px bg-accent" />
              <div>
                <p className="text-white font-black tracking-[0.2em] uppercase text-[10px]">Alemayehu Tadesse</p>
                <p className="text-accent text-[9px] tracking-[0.3em] uppercase mt-1">Verified Client &bull; Addis Ababa</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <FAQSection />

      {/* ─── 9. FINAL CTA ───────────────────────────────────────────────── */}
      <section className="py-48 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-accent/10 via-transparent to-transparent opacity-50" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-5xl md:text-[8rem] font-bold tracking-tighter text-white uppercase leading-[0.8] mb-12">
              Begin Your <br />
              <span className="text-accent">Journey</span>
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6 mt-16">
              <Link
                href="/collection"
                className="bg-accent hover:bg-accent-hover text-white px-12 py-6 rounded-full font-black text-[10px] uppercase tracking-[0.3em] transition-all shadow-[var(--glow-accent)] hover:shadow-[var(--glow-accent-strong)]"
              >
                Browse Inventory
              </Link>
              <a
                href="https://wa.me/251932159546"
                target="_blank"
                rel="noopener noreferrer"
                className="glass text-white px-12 py-6 rounded-full font-black text-[10px] uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-3 hover:bg-white/10"
              >
                Consult Specialist
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
