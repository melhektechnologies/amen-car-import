"use client";
// Build trigger: 2026-04-27-17-25
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronRight,
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
const featuredRentals = vehicles.filter((v) => v.category !== "sales").slice(0, 4);
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
    setDates({ pickup: fmt(d1), dropoff: fmt(d2) });
  }, []);
  return (
    <div className="bg-background min-h-screen text-foreground overflow-x-hidden">

      {/* ─── 1. HERO ────────────────────────────────────────────────── */}
      <section className="relative h-screen flex flex-col justify-center overflow-hidden pt-20">
        <Hero3D />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50 z-10 pointer-events-none" />

        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 pointer-events-none">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="font-display font-bold text-6xl md:text-8xl tracking-tighter text-foreground uppercase leading-[0.9]"
            >
              Drive the <br />
              <span className="text-accent italic">Future</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="mt-6 text-lg md:text-xl text-muted font-light max-w-lg"
            >
              Direct imports from Dubai to Addis Ababa. High-quality EVs and economical cars at prices that make sense.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 pointer-events-auto"
            >
              <Link
                href="/collection"
                className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full font-bold text-sm transition-all shadow-[var(--glow-accent)] hover:shadow-[var(--glow-accent-strong)] hover:-translate-y-1 active:translate-y-0"
              >
                View Inventory
              </Link>
              <a
                href="https://wa.me/251932159546"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/20 hover:border-accent bg-white/5 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-sm transition-all flex items-center gap-2 hover:bg-white/10"
              >
                Contact Sales
              </a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="mt-12 flex flex-wrap items-center gap-4 text-[10px] sm:text-xs text-muted font-mono tracking-widest uppercase"
            >
              {["Verified Import", "Direct from Dubai", "Inspection Available"].map(
                (badge, i, arr) => (
                  <span key={badge} className="flex items-center gap-4">
                    {badge}
                    {i < arr.length - 1 && (
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    )}
                  </span>
                )
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── 2. SEARCH CONSOLE ─────────────────────────────────────────── */}
      <section className="relative z-30 -mt-24 max-w-5xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="bg-[#111111]/80 backdrop-blur-3xl border border-white/10 rounded-3xl p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        >
          <div className="flex gap-8 border-b border-white/10 pb-4 mb-6 px-2 md:px-4">
            <button 
              onClick={() => setSearchTab("rent")}
              className={`font-bold tracking-wider text-sm transition-colors pb-4 -mb-[18px] border-b-2 ${searchTab === "rent" ? "text-white border-accent" : "text-muted hover:text-white border-transparent"}`}
            >
              Rent
            </button>
            <button 
              onClick={() => setSearchTab("buy")}
              className={`font-bold tracking-wider text-sm transition-colors pb-4 -mb-[18px] border-b-2 ${searchTab === "buy" ? "text-white border-accent" : "text-muted hover:text-white border-transparent"}`}
            >
              Buy
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-2 md:px-4">
            <div>
              <label className="text-xs text-muted uppercase tracking-wider font-semibold block mb-2">
                Location
              </label>
              <div className="border border-white/10 rounded-lg p-3 bg-black/30 text-white flex items-center gap-2 text-sm">
                <Globe className="w-4 h-4 text-accent shrink-0" /> Global Delivery
              </div>
            </div>
            
            {searchTab === "rent" ? (
              <>
                <div>
                  <label className="text-xs text-muted uppercase tracking-wider font-semibold block mb-2">
                    Pick-up
                  </label>
                  <div className="border border-white/10 rounded-lg p-3 bg-black/30 text-white flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-accent shrink-0" /> {dates.pickup || "Select date"}
                  </div>
                </div>
                <div>
                  <label className="text-xs text-muted uppercase tracking-wider font-semibold block mb-2">
                    Drop-off
                  </label>
                  <div className="border border-white/10 rounded-lg p-3 bg-black/30 text-white flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-accent shrink-0" /> {dates.dropoff || "Select date"}
                  </div>
                </div>
              </>
            ) : (
              <>
                <div>
                  <label className="text-xs text-muted uppercase tracking-wider font-semibold block mb-2">
                    Condition
                  </label>
                  <div className="border border-white/10 rounded-lg p-3 bg-black/30 text-white flex items-center gap-2 text-sm">
                    <ShieldCheck className="w-4 h-4 text-accent shrink-0" /> Factory & CPO
                  </div>
                </div>
                <div>
                  <label className="text-xs text-muted uppercase tracking-wider font-semibold block mb-2">
                    Budget
                  </label>
                  <div className="border border-white/10 rounded-lg p-3 bg-black/30 text-white/50 flex items-center gap-2 text-sm">
                    Unrestricted
                  </div>
                </div>
              </>
            )}

            <div className="flex items-end mt-2 md:mt-0">
              <Link
                href={`/collection?category=${searchTab === "rent" ? "rental" : "sales"}`}
                className="bg-accent hover:bg-accent-hover text-white shadow-[var(--glow-accent)] hover:shadow-[var(--glow-accent-strong)] w-full py-3 md:py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all uppercase tracking-widest text-xs"
              >
                <Search className="w-4 h-4" /> Search Availability
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ─── 3. FEATURED INVENTORY ──────────────────────────────────────── */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight text-foreground">
            Featured Inventory
          </h2>
          <p className="text-muted mt-4 text-lg">
            High-demand models, ready for immediate delivery to Addis.
          </p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-5 gap-6 md:h-[600px]"
        >
          {/* Hero feature card */}
          <Link href={`/collection/${apexMain.slug}`} className="md:col-span-3 rounded-3xl overflow-hidden relative group border border-white/5 h-[400px] md:h-full block">
            <Image
              src={apexMain.image}
              alt={apexMain.name}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-[1.03] opacity-80 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 w-full transition-transform duration-500 group-hover:-translate-y-2">
              <span className="bg-accent text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">
                Featured Allocation
              </span>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-2">
                {apexMain.brand} {apexMain.name}
              </h3>
              <p className="text-white/70 font-mono tracking-widest text-sm flex items-center gap-3">
                {apexMain.specs.engine} <span className="w-1 h-1 bg-accent rounded-full" /> {apexMain.specs.horsepower} HP
              </p>
            </div>
          </Link>
          {/* Secondary feature cards */}
          <div className="md:col-span-2 flex flex-col gap-6">
            {apexSide.map((v) => (
              <Link
                key={v.slug}
                href={`/collection/${v.slug}`}
                className="rounded-3xl overflow-hidden relative group border border-white/5 flex-1 min-h-[220px] bg-surface block"
              >
                <Image
                  src={v.image}
                  alt={v.name}
                  fill
                  className="object-cover opacity-60 group-hover:opacity-90 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <h3 className="font-display text-2xl font-bold text-white mb-1">
                    {v.brand} {v.name}
                  </h3>
                  <p className="text-accent text-xs font-mono tracking-widest uppercase">
                    View Specifications <ArrowRight className="w-3 h-3 inline ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ─── 4. WHY CHOOSE US ───────────────────────────────────────────── */}
      <section className="py-24 bg-[#0a0a0a] border-y border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight text-foreground mb-16 text-center"
          >
            Why Choose Amen Car Import?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "Quality Assurance",
                body: "Every car is hand-picked and inspected in Dubai. We only import vehicles that meet our high standards for reliability.",
              },
              {
                icon: Car,
                title: "Direct from Dubai",
                body: "No middle-man. We buy directly from major Dubai exporters, saving you millions on your purchase.",
              },
              {
                icon: Globe,
                title: "Hassle-Free Import",
                body: "We handle shipping, customs clearance, and documentation. You just pick up the keys in Addis Ababa.",
              },
            ].map(({ icon: Icon, title, body }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.2, ease: "easeOut" }}
                className="p-10 border border-white/10 bg-[#111111] rounded-[2rem] hover:border-accent/50 transition-all duration-500 hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-8 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                  {title}
                </h3>
                <p className="text-muted leading-relaxed">{body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. SALES OFFERS ────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight text-foreground mb-4">
            Available Inventory
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Browse our current stock and upcoming arrivals. Duty-paid and ready for handover.
          </p>
          <div className="mt-4 flex items-center justify-center gap-2 text-red-600 font-bold animate-pulse text-sm">
            <span className="w-2 h-2 bg-red-600 rounded-full" /> Limited Stock Available - Prices subject to shipping costs
          </div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {featuredSales.map((v, i) => (
            <motion.div
              key={v.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: "easeOut" }}
            >
              <VehicleCard {...v} />
            </motion.div>
          ))}
        </div>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex justify-center mt-16"
        >
          <Link
            href="/collection"
            className="text-foreground font-semibold text-sm flex items-center gap-3 border-b-2 border-accent pb-2 hover:text-accent transition-all uppercase tracking-wider group"
          >
            Access Full Inventory <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>

      {/* ─── 6. TESTIMONIALS ────────────────────────────────────────────── */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="py-32 max-w-5xl mx-auto px-6 relative bg-accent/5 rounded-[3rem] my-24 border border-accent/10 shadow-[0_0_50px_rgba(37,99,235,0.05)]"
      >
        <Quote className="absolute top-10 left-10 w-24 h-24 text-accent/10 z-0 pointer-events-none" />
        <div className="relative z-10 text-center">
          <p className="text-2xl md:text-3xl font-display font-medium text-foreground leading-relaxed mb-10">
            &ldquo;Amen Car Import delivered my BYD Song Plus exactly as promised. The process was transparent, and they handled all the customs work. Best pricing in Addis!&rdquo;
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-[2px] bg-accent" />
            <div className="text-left">
              <p className="text-foreground font-bold tracking-widest uppercase text-sm">Alemayehu T.</p>
              <p className="text-accent/80 text-[10px] tracking-wider uppercase">
                Addis Ababa Customer
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ─── 8. FAQ ─────────────────────────────────────────────────────── */}
      <FAQSection />

      {/* ─── 9. FINAL CTA ───────────────────────────────────────────────── */}
      <section className="py-32 relative overflow-hidden bg-background border-t border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-accent/5 pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/10 rounded-full blur-[150px] pointer-events-none" />
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-4xl mx-auto px-6 text-center"
        >
          <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6 uppercase">
            Start Your Import
          </h2>
          <p className="text-xl text-muted font-light mb-12 max-w-2xl mx-auto">
            Ready to get your dream car? Contact us today for a quote and consultation on the best models for your budget.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              href="/collection"
              className="bg-accent hover:bg-accent-hover text-white px-10 py-5 rounded-full font-bold text-sm transition-all shadow-[var(--glow-accent)] hover:shadow-[var(--glow-accent-strong)] uppercase tracking-wider"
            >
              Browse Full Stock
            </Link>
            <a
              href="https://wa.me/251932159546?text=Hello%20Amen%20Car%20Import%2C%20I%20would%20like%20to%20inquire%20about%20importing%20a%20car."
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 hover:border-accent/50 hover:bg-white/5 text-white bg-white/5 px-10 py-5 rounded-full font-bold text-sm transition-all flex items-center justify-center gap-3 uppercase tracking-wider group"
            >
              <span className="w-2 h-2 bg-[#25D366] rounded-full animate-pulse shadow-[0_0_8px_#25D366]" />
              WhatsApp Specialist
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
// Manual Trigger
