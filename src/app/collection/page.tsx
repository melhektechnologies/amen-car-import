"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SlidersHorizontal, X } from "lucide-react";
import { vehicles } from "@/lib/vehicles";
import { VehicleCard } from "@/components/VehicleCard";

type FilterCategory = "all" | "rental" | "sales";
type FilterStatus = "all" | "Available" | "New Arrival" | "Reserved";

export default function CollectionPage() {
  const [category, setCategory] = useState<FilterCategory>("all");
  const [status, setStatus] = useState<FilterStatus>("all");
  const [maxPrice, setMaxPrice] = useState<number>(10000000);
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    return vehicles.filter((v) => {
      const matchesCategory =
        category === "all" ||
        v.category === category ||
        v.category === "both";
      const matchesStatus = status === "all" || v.status === status;
      const matchesPrice =
        category === "sales"
          ? v.salePrice <= maxPrice
          : v.rentPrice <= maxPrice;
      return matchesCategory && matchesStatus && matchesPrice;
    });
  }, [category, status, maxPrice]);

  const categoryBtns: { label: string; value: FilterCategory }[] = [
    { label: "All Series", value: "all" },
    { label: "Rental Fleet", value: "rental" },
    { label: "Purchase", value: "sales" },
  ];

  const statusBtns: { label: string; value: FilterStatus }[] = [
    { label: "All", value: "all" },
    { label: "Available", value: "Available" },
    { label: "New Arrival", value: "New Arrival" },
    { label: "Reserved", value: "Reserved" },
  ];

  return (
    <div className="bg-background min-h-screen text-foreground pt-20 relative overflow-hidden">
      {/* Decorative Glows */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-accent/5 blur-[120px] pointer-events-none rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] pointer-events-none rounded-full translate-x-1/2" />

      {/* Page Header */}
      <section className="py-24 max-w-7xl mx-auto px-6 relative z-10">
        <span className="text-[10px] font-mono tracking-[0.6em] text-accent uppercase font-bold mb-6 block">
          Curated Series
        </span>
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-bold text-6xl md:text-8xl uppercase tracking-tighter text-white leading-[0.9]"
        >
          The <br />
          <span className="text-accent italic">Collection</span>
        </motion.h1>
        <p className="text-white/40 mt-8 text-sm md:text-base max-w-xl font-medium tracking-widest uppercase">
          Automotive superiority, hand-picked for the uncompromising professional.
        </p>
      </section>

      {/* Filter Bar - Obsidian Glass */}
      <section className="sticky top-20 z-30 glass border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-wrap gap-6 items-center justify-between">
          {/* Category tabs */}
          <div className="flex gap-4">
            {categoryBtns.map((btn) => (
              <button
                key={btn.value}
                onClick={() => setCategory(btn.value)}
                className={`text-[9px] font-black uppercase tracking-[0.3em] transition-all relative pb-2 ${
                  category === btn.value
                    ? "text-accent"
                    : "text-white/40 hover:text-white"
                }`}
              >
                {btn.label}
                {category === btn.value && (
                  <motion.span layoutId="collection-cat" className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />
                )}
              </button>
            ))}
          </div>

          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-3 text-white/40 hover:text-accent text-[9px] font-black uppercase tracking-[0.3em] transition-all"
          >
            {showFilters ? <X className="w-4 h-4" /> : <SlidersHorizontal className="w-4 h-4" />}
            {showFilters ? "Close Engine" : "Tuning Filters"}
          </button>
        </div>

        {/* Expanded Filter Panel */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              key="filter-panel"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="border-t border-white/5 overflow-hidden bg-black/40"
            >
              <div className="max-w-7xl mx-auto px-6 py-10 flex flex-wrap gap-12 items-end">
                {/* Status filter */}
                <div className="space-y-4">
                  <p className="text-[9px] text-white/30 uppercase tracking-[0.3em] font-black">
                    Stock Status
                  </p>
                  <div className="flex gap-3 flex-wrap">
                    {statusBtns.map((btn) => (
                      <button
                        key={btn.value}
                        onClick={() => setStatus(btn.value)}
                        className={`px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-[0.2em] transition-all border ${
                          status === btn.value
                            ? "border-accent text-accent bg-accent/5 shadow-[var(--glow-accent)]"
                            : "border-white/5 text-white/30 hover:border-white/20 hover:text-white"
                        }`}
                      >
                        {btn.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Max price slider */}
                <div className="flex-1 min-w-[300px] space-y-4">
                  <div className="flex justify-between items-center">
                    <p className="text-[9px] text-white/30 uppercase tracking-[0.3em] font-black">
                      Valuation Cap
                    </p>
                    <span className="text-white font-mono text-xs font-bold tracking-tighter">{(maxPrice / 1000000).toFixed(1)}M ETB</span>
                  </div>
                  <input
                    type="range"
                    min={1500000}
                    max={10000000}
                    step={500000}
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="w-full h-1 bg-white/5 rounded-lg appearance-none cursor-pointer accent-accent"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Results Grid */}
      <section className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        <AnimatePresence mode="popLayout">
          {filtered.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-32"
            >
              <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-8 border border-white/10">
                <X className="w-8 h-8 text-white/20" />
              </div>
              <h3 className="font-display text-2xl text-white mb-4 uppercase tracking-tighter font-bold">No Allocations Found</h3>
              <p className="text-white/30 text-xs uppercase tracking-[0.2em] font-bold">Adjust your parameters to explore the series.</p>
            </motion.div>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            >
              {filtered.map((vehicle, i) => (
                <motion.div
                  key={vehicle.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  <VehicleCard {...vehicle} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Result count */}
        <div className="mt-24 pt-8 border-t border-white/5 flex justify-between items-center text-[8px] font-mono text-white/20 uppercase tracking-[0.4em]">
          <span>Inventory Audit</span>
          <span className="text-accent font-bold">
            {filtered.length} of {vehicles.length} Units Listed
          </span>
          <span>Addis Ababa &bull; Dubai</span>
        </div>
      </section>
    </div>
  );
}
