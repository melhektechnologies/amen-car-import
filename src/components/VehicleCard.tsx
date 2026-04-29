import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Gauge, GitMerge } from "lucide-react";

interface VehicleCardProps {
  name: string;
  image: string;
  brand: string;
  rentPrice: number;
  salePrice: number;
  year: number;
  transmission: "Automatic" | "Manual";
  mileage: number;
  fuelType: "Petrol" | "Hybrid" | "Electric";
  status: "Available" | "Reserved" | "New Arrival";
  slug: string;
}



export function VehicleCard({
  name, image, brand, salePrice,
  year, transmission, mileage, status, slug,
}: VehicleCardProps) {
  // Construct WhatsApp inquiry URLs per vehicle so CTAs always work.
  const waBase = "https://wa.me/251932159546?text=";
  const rentMsg = encodeURIComponent(`Hello, I would like to inquire about the ${brand} ${name}. Please advise on availability.`);
  const buyMsg  = encodeURIComponent(`Hello, I am interested in purchasing the ${brand} ${name}. Please share details.`);

  const formatPrice = (price: number) => {
    return `${(price / 1000000).toFixed(1)}M ETB`;
  };

  return (
    <div className="group relative w-full h-full min-h-[480px] rounded-[2rem] overflow-hidden bg-[#111111] border border-white/5 hover:border-accent/40 transition-all duration-500 flex flex-col shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:-translate-y-2">

      {/* ── IMAGE ─────────────────────────────────────── */}
      <div className="relative h-64 w-full overflow-hidden bg-black shrink-0">
        <span className={`absolute top-5 left-5 z-20 text-[9px] font-bold px-3 py-1.5 uppercase tracking-[0.15em] rounded-full backdrop-blur-md border border-white/10 ${status === 'Available' ? 'bg-accent text-white shadow-[var(--glow-accent)]' : 'bg-white/10 text-white'}`}>
          {status}
        </span>
        <Image
          src={image}
          alt={`${brand} ${name}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-110 transition-transform duration-1000 contrast-[1.1] saturate-[1.1] brightness-[0.9] group-hover:brightness-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent pointer-events-none" />
      </div>

      {/* ── BODY ─────────────────────────────────────── */}
      <div className="p-8 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-2">
          <span className="text-[10px] font-mono tracking-[0.2em] text-accent uppercase font-bold">{brand}</span>
          <span className="text-[10px] font-mono tracking-[0.1em] text-white/40 uppercase">{year} MODEL</span>
        </div>
        <h3 className="font-display font-bold text-3xl text-white mb-6 group-hover:text-accent transition-colors leading-tight">
          {name}
        </h3>

        {/* ── SPECS GRID ─────────────────────────────────────── */}
        <div className="grid grid-cols-2 gap-4 mb-8 pb-6 border-b border-white/5 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
              <GitMerge className="w-4 h-4 text-accent" />
            </div>
            <span className="text-xs text-white/60 font-medium uppercase tracking-wider">{transmission}</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
              <Gauge className="w-4 h-4 text-accent" />
            </div>
            <span className="text-xs text-white/60 font-medium uppercase tracking-wider">
              {mileage === 0 ? "Brand New" : `${mileage.toLocaleString()} KM`}
            </span>
          </div>
        </div>

        {/* ── PRICING ─────────────────────────────────────── */}
        <div className="flex justify-between items-center mb-8 shrink-0 mt-auto">
          <div>
            <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] mb-1 font-bold">Import Price</p>
            <p className="font-mono text-3xl text-white font-bold tracking-tighter">
              {formatPrice(salePrice)}
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-center backdrop-blur-sm">
             <p className="text-[9px] text-accent uppercase tracking-widest font-bold">Duty Paid</p>
             <p className="text-[10px] text-white/80 font-bold">READY</p>
          </div>
        </div>

        {/* ── CTAs ─────────────────────────────────────── */}
        <div className="shrink-0 flex flex-col gap-4">
          <div className="flex gap-3">
            <a
              href={`${waBase}${buyMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center bg-accent hover:bg-accent-hover text-white py-4 rounded-2xl font-bold text-xs uppercase tracking-widest transition-all shadow-[var(--glow-accent)] hover:shadow-[var(--glow-accent-strong)] hover:-translate-y-1"
            >
              Get Offer
            </a>
            <a
              href={`${waBase}${rentMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-14 flex items-center justify-center rounded-2xl bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] hover:bg-[#25D366]/20 transition-all animate-pulse shadow-[0_0_15px_rgba(37,211,102,0.1)] hover:shadow-[0_0_20px_rgba(37,211,102,0.2)]"
            >
              <Image src="https://cdn-icons-png.flaticon.com/512/124/124034.png" alt="WA" width={22} height={22} className="brightness-125 contrast-125" />
            </a>
          </div>
          
          <Link
            href={`/collection/${slug}`}
            className="group/btn flex items-center justify-center gap-3 text-[10px] text-white/30 hover:text-white uppercase tracking-[0.3em] transition-all py-2 font-bold border-t border-white/5 mt-2"
          >
            Explore Car Specs
            <ArrowRight className="w-3 h-3 transition-transform group-hover/btn:translate-x-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
