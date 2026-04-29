import { History, Award, Users, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen text-foreground pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Intro */}
        <section className="mb-32">
          <header className="mb-16 text-center">
            <span className="text-accent text-[10px] tracking-[0.4em] uppercase font-bold mb-4 block">The Amen Legacy</span>
            <h1 className="font-display text-5xl md:text-8xl font-bold uppercase tracking-tighter leading-tight">
              Dubai Heritage. <br/>
              <span className="text-white/40">Addis Delivery.</span>
            </h1>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10">
               <div className="absolute inset-0 bg-accent/10 z-10" />
               <Image 
                 src="/images/hero_car_cinematic_1776255790678.png" 
                 alt="Luxury Showroom" 
                 fill 
                 className="object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-1000"
               />
            </div>
            <div className="space-y-8">
              <h2 className="font-display text-4xl font-bold uppercase">Our Mission</h2>
              <p className="text-xl text-muted font-light leading-relaxed">
                Amen Car Import was founded with a singular vision: to bridge the gap between global automotive markets and the Ethiopian driver. 
              </p>
              <p className="text-muted leading-relaxed">
                By maintaining a direct presence in Dubai&apos;s Al Aweer market, we bypass middlemen and high markups, delivering vehicles that are inspected to international standards. Whether it&apos;s the latest electric innovation from BYD or a reliable family SUV from Volkswagen, we ensure transparency in every transaction.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div>
                   <p className="text-4xl font-bold text-accent mb-2">500+</p>
                   <p className="text-xs text-white/40 uppercase tracking-widest font-bold">Vehicles Imported</p>
                </div>
                <div>
                   <p className="text-4xl font-bold text-accent mb-2">10+</p>
                   <p className="text-xs text-white/40 uppercase tracking-widest font-bold">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pillars */}
        <section className="py-24 border-y border-white/5 bg-[#111111]/30">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
            {[
              { icon: ShieldCheck, title: "Transparency", body: "Full disclosure on duty, shipping, and commission." },
              { icon: Award, title: "Quality", body: "150-point inspection in Dubai before every export." },
              { icon: Users, title: "Customer First", body: "Direct support from sourcing to Addis handover." },
              { icon: History, title: "Stability", body: "A decade of expertise in the horn of Africa." },
            ].map((p, i) => (
              <div key={i} className="space-y-4">
                <div className="w-12 h-12 mx-auto rounded-xl bg-accent/10 flex items-center justify-center">
                   <p.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display font-bold text-lg uppercase">{p.title}</h3>
                <p className="text-xs text-muted leading-relaxed px-4">{p.body}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
