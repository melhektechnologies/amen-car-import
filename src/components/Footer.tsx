import Link from "next/link";

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-surface">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row justify-between gap-12">
        {/* Brand column */}
        <div className="max-w-xs">
          <p className="font-display font-bold text-xl mb-4 text-foreground tracking-tighter">
            AMEN <span className="text-accent">CAR IMPORT</span>
          </p>
          <p className="text-sm text-muted leading-relaxed">
            Your trusted bridge for quality car imports. Direct from Dubai to Addis Ababa with total transparency.
          </p>
          {/* FIX: tap-to-call link so mobile users can dial directly */}
          <a
            href="tel:+251932159546"
            className="inline-block mt-6 text-sm text-accent hover:text-accent-hover transition-colors font-semibold tracking-wide"
          >
            +251 93 215 9546
          </a>
          <br />
          <a
            href="tel:+251937355081"
            className="inline-block mt-2 text-sm text-accent hover:text-accent-hover transition-colors font-semibold tracking-wide"
          >
            +251 93 735 5081
          </a>
        </div>

        {/* Navigation columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-white mb-1 uppercase tracking-widest text-xs">Vehicles</h3>
            <Link href="/collection" className="text-muted hover:text-foreground transition-colors">All Inventory</Link>
            <Link href="/collection?fuel=Electric" className="text-muted hover:text-foreground transition-colors">Electric Vehicles</Link>
            <Link href="/services" className="text-muted hover:text-foreground transition-colors">Import Process</Link>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-white mb-1 uppercase tracking-widest text-[10px]">Company</h3>
            <Link href="/about" className="text-muted hover:text-white transition-colors">Heritage</Link>
            <Link href="/services" className="text-muted hover:text-white transition-colors">Services</Link>
            <Link href="/careers" className="text-muted hover:text-white transition-colors">Careers</Link>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-white mb-1 uppercase tracking-widest text-[10px]">Contact</h3>
            <Link href="/contact" className="text-muted hover:text-foreground transition-colors">Contact Sales</Link>
            <a href="mailto:info@amencarimport.com" className="text-muted hover:text-foreground transition-colors">
              Email Us
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-white mb-1 uppercase tracking-widest text-[10px]">Socials</h3>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground transition-colors">
              Facebook
            </a>
            <a href="https://t.me/amencarimport" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground transition-colors">
              Telegram
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground transition-colors">
              TikTok
            </a>
            <a href="https://wa.me/251932159546" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground transition-colors">
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 px-6 py-6 pb-safe flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted">
        <p className="font-mono text-[10px] uppercase tracking-widest">&copy; {currentYear} Amen Car Import. All rights reserved.</p>
        <div className="flex gap-6 font-mono text-[10px] uppercase tracking-widest">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms Conditions</Link>
        </div>
      </div>
    </footer>
  );
}
