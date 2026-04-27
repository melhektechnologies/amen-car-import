"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, GitMerge, Gauge, Droplets, Calendar, ShieldCheck } from "lucide-react";
import { vehicles } from "@/lib/vehicles";
import { notFound } from "next/navigation";

export default function VehicleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const vehicle = vehicles.find((v) => v.slug === resolvedParams.slug);

  if (!vehicle) {
    notFound();
  }

  const formatPrice = (price: number) => {
    return `${(price / 1000000).toFixed(1)}M ETB`;
  };

  const waBase = "https://wa.me/251932159546?text=";
  const buyMsg = encodeURIComponent(`Hello, I am interested in purchasing the ${vehicle.brand} ${vehicle.name}. Please share more details.`);

  return (
    <div className="pt-24 pb-24 max-w-7xl mx-auto px-6">
      <Link href="/collection" className="inline-flex items-center gap-2 text-white/50 hover:text-white uppercase tracking-widest text-xs font-bold mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to Inventory
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Gallery */}
        <div className="relative h-[400px] md:h-[600px] rounded-[2rem] bg-[#111111] border border-white/5 overflow-hidden flex items-center justify-center p-8">
          <Image
            src={vehicle.image}
            alt={`${vehicle.brand} ${vehicle.name}`}
            fill
            className="object-contain p-8 drop-shadow-2xl brightness-110"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Details */}
        <div className="flex flex-col justify-center">
          <span className="text-accent text-sm font-mono tracking-[0.2em] uppercase font-bold mb-2">{vehicle.brand}</span>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 uppercase tracking-tight">{vehicle.name}</h1>
          <p className="text-white/60 text-lg mb-8 leading-relaxed">
            {vehicle.description}
          </p>

          <div className="grid grid-cols-2 gap-6 mb-10 pb-10 border-b border-white/10">
            <div>
              <p className="text-white/40 text-xs uppercase tracking-widest font-bold mb-1">Import Price</p>
              <p className="text-4xl font-mono font-bold text-white">{formatPrice(vehicle.salePrice)}</p>
            </div>
            <div>
              <p className="text-white/40 text-xs uppercase tracking-widest font-bold mb-1">Status</p>
              <div className="inline-flex items-center gap-2 bg-accent/20 text-accent font-bold px-4 py-2 rounded-full uppercase tracking-widest text-sm">
                <ShieldCheck className="w-4 h-4" /> {vehicle.status}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
             <div className="bg-[#111111] border border-white/5 p-4 rounded-2xl text-center">
               <Calendar className="w-6 h-6 text-accent mx-auto mb-2" />
               <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Year</p>
               <p className="text-white font-bold">{vehicle.year}</p>
             </div>
             <div className="bg-[#111111] border border-white/5 p-4 rounded-2xl text-center">
               <GitMerge className="w-6 h-6 text-accent mx-auto mb-2" />
               <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Gear</p>
               <p className="text-white font-bold text-sm">{vehicle.transmission}</p>
             </div>
             <div className="bg-[#111111] border border-white/5 p-4 rounded-2xl text-center">
               <Droplets className="w-6 h-6 text-accent mx-auto mb-2" />
               <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Fuel</p>
               <p className="text-white font-bold text-sm">{vehicle.fuelType}</p>
             </div>
             <div className="bg-[#111111] border border-white/5 p-4 rounded-2xl text-center">
               <Gauge className="w-6 h-6 text-accent mx-auto mb-2" />
               <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Mileage</p>
               <p className="text-white font-bold text-sm">{vehicle.mileage === 0 ? "New" : `${vehicle.mileage}km`}</p>
             </div>
          </div>

          <h2 className="text-xl font-display font-bold text-white mb-6 uppercase tracking-wider">Performance Specs</h2>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10 mb-10">
            <div className="flex justify-between py-3 border-b border-white/5">
              <span className="text-white/60">Engine/Battery</span>
              <span className="text-white font-bold font-mono">{vehicle.specs.engine}</span>
            </div>
            <div className="flex justify-between py-3 border-b border-white/5">
              <span className="text-white/60">Horsepower</span>
              <span className="text-white font-bold font-mono">{vehicle.specs.horsepower} HP</span>
            </div>
            <div className="flex justify-between py-3 border-b border-white/5">
              <span className="text-white/60">Top Speed</span>
              <span className="text-white font-bold font-mono">{vehicle.specs.topSpeed} km/h</span>
            </div>
            <div className="flex justify-between py-3 border-b border-white/5">
              <span className="text-white/60">0-60 mph</span>
              <span className="text-white font-bold font-mono">{vehicle.specs.zeroToSixty} sec</span>
            </div>
            <div className="flex justify-between py-3">
              <span className="text-white/60">Seating</span>
              <span className="text-white font-bold font-mono">{vehicle.specs.seating} Seats</span>
            </div>
          </div>

          <a
            href={`${waBase}${buyMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center bg-accent hover:bg-accent-hover text-white py-5 rounded-full font-bold text-sm uppercase tracking-widest transition-all shadow-[var(--glow-accent)] hover:shadow-[var(--glow-accent-strong)] hover:-translate-y-1"
          >
            Request Custom Quote via WhatsApp
          </a>

        </div>
      </div>
    </div>
  );
}
