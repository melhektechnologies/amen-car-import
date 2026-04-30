import Link from "next/link";
import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] pointer-events-none rounded-full translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <Link href="/" className="font-display font-bold text-2xl mb-8 block text-foreground tracking-tighter">
              AMEN <span className="text-accent italic">CAR IMPORT</span>
            </Link>
            <p className="text-muted leading-relaxed text-sm max-w-sm mb-10">
              Transforming the automotive landscape in Ethiopia by providing direct access to Dubai's premium inventory with uncompromising transparency.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Mail, href: "mailto:info@amencarimport.com" },
                { icon: MessageCircle, href: "https://wa.me/251932159546" },
                { icon: Phone, href: "tel:+251932159546" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <h3 className="text-[10px] font-bold text-white uppercase tracking-[0.3em]">The Collection</h3>
              <ul className="space-y-4 text-xs">
                <li><Link href="/collection" className="text-muted hover:text-accent transition-colors">All Inventory</Link></li>
                <li><Link href="/collection?fuel=Electric" className="text-muted hover:text-accent transition-colors">Electric Mobility</Link></li>
                <li><Link href="/collection?category=sales" className="text-muted hover:text-accent transition-colors">For Purchase</Link></li>
                <li><Link href="/collection?category=rental" className="text-muted hover:text-accent transition-colors">Rental Fleet</Link></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="text-[10px] font-bold text-white uppercase tracking-[0.3em]">Experience</h3>
              <ul className="space-y-4 text-xs">
                <li><Link href="/services" className="text-muted hover:text-accent transition-colors">Import Process</Link></li>
                <li><Link href="/about" className="text-muted hover:text-accent transition-colors">Our Heritage</Link></li>
                <li><Link href="/services" className="text-muted hover:text-accent transition-colors">Quality Control</Link></li>
                <li><Link href="/careers" className="text-muted hover:text-accent transition-colors">Careers</Link></li>
              </ul>
            </div>
            <div className="space-y-6 col-span-2 md:col-span-1">
              <h3 className="text-[10px] font-bold text-white uppercase tracking-[0.3em]">Addis Office</h3>
              <ul className="space-y-4 text-xs">
                <li className="flex items-start gap-3 text-muted">
                  <MapPin className="w-4 h-4 text-accent shrink-0" />
                  <span>Bole Road, Addis Ababa, Ethiopia</span>
                </li>
                <li className="flex items-center gap-3 text-muted">
                  <Phone className="w-4 h-4 text-accent shrink-0" />
                  <span>+251 93 215 9546</span>
                </li>
                <li className="flex items-center gap-3 text-muted">
                  <Mail className="w-4 h-4 text-accent shrink-0" />
                  <span>info@amencarimport.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[9px] font-mono text-muted uppercase tracking-[0.2em]">
            &copy; {currentYear} Amen Car Import &mdash; Engineered for Excellence.
          </p>
          <div className="flex gap-8 text-[9px] font-mono text-muted uppercase tracking-[0.2em]">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
