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
    { label: "All Vehicles", value: "all" },
    { label: "Rentals", value: "rental" },
    { label: "For Sale", value: "sales" },
  ];

  const statusBtns: { label: string; value: FilterStatus }[] = [
    { label: "All", value: "all" },
    { label: "Available", value: "Available" },
    { label: "New Arrival", value: "New Arrival" },
    { label: "Reserved", value: "Reserved" },
  ];

  return (
    <div className="bg-background min-h-screen text-foreground pt-20">
      {/* Page Header */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display font-bold text-5xl md:text-6xl uppercase tracking-tight text-white"
        >
          The Collection
        </motion.h1>
        <p className="text-muted mt-4 text-lg max-w-xl">
          Automotive superiority, hand-picked for the uncompromising.
        </p>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-20 z-20 bg-background/90 backdrop-blur-md border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap gap-4 items-center justify-between">
          {/* Category tabs */}
          <div className="flex gap-2">
            {categoryBtns.map((btn) => (
              <button
                key={btn.value}
                onClick={() => setCategory(btn.value)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  category === btn.value
                    ? "bg-accent text-background"
                    : "bg-white/5 text-muted hover:text-white hover:bg-white/10"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-muted hover:text-white text-sm font-semibold transition-colors ml-auto"
          >
            {showFilters ? <X className="w-4 h-4" /> : <SlidersHorizontal className="w-4 h-4" />}
            {showFilters ? "Close" : "Filters"}
          </button>
        </div>

        {/* Expanded Filter Panel — wrapped in AnimatePresence so exit animation fires */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              key="filter-panel"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="border-t border-white/5 overflow-hidden"
            >
              <div className="max-w-7xl mx-auto px-6 py-6 flex flex-wrap gap-8 items-end">
                {/* Status filter */}
                <div>
                  <p className="text-xs text-muted uppercase tracking-widest mb-3 font-semibold">
                    Status
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {statusBtns.map((btn) => (
                      <button
                        key={btn.value}
                        onClick={() => setStatus(btn.value)}
                        className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all border ${
                          status === btn.value
                            ? "border-accent text-accent bg-accent/10"
                            : "border-white/10 text-muted hover:border-white/30 hover:text-white"
                        }`}
                      >
                        {btn.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Max price slider */}
                <div className="flex-1 min-w-[200px]">
                  <p className="text-xs text-muted uppercase tracking-widest mb-3 font-semibold">
                    Max Price — <span className="text-white font-mono">{(maxPrice / 1000000).toFixed(1)}M ETB</span>
                  </p>
                  <input
                    type="range"
                    min={1500000}
                    max={10000000}
                    step={500000}
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="w-full accent-accent cursor-pointer"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Results Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-4xl mb-4">🔍</p>
            <h3 className="font-display text-2xl text-white mb-3">No Vehicles Found</h3>
            <p className="text-muted">Adjust your filters to explore more of the collection.</p>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filtered.map((vehicle, i) => (
              <motion.div
                key={vehicle.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <VehicleCard {...vehicle} />
              </motion.div>
            ))}
          </motion.div>
        )}
        {/* Result count */}
        <p className="text-center text-xs text-muted uppercase tracking-widest mt-16 font-mono">
          {filtered.length} of {vehicles.length} vehicles shown
        </p>
      </section>
    </div>
  );
}
