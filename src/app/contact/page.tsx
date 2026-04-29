import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 max-w-5xl mx-auto px-6 min-h-[80vh]">
      <h1 className="font-display text-5xl font-bold uppercase tracking-tight text-white mb-6">
        Contact <span className="text-accent underline decoration-accent/30">Us</span>
      </h1>
      <p className="text-white/60 mb-12 max-w-2xl text-lg">
        Whether you want to import a specific vehicle, ask about our current inventory, or learn more about the import process to Ethiopia, our team of experts is ready to assist you.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#111111] border border-white/5 p-8 rounded-[2rem] shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
          <h2 className="text-2xl font-display font-bold text-white mb-8">Direct Communication</h2>
          
          <a href="https://wa.me/251932159546" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 mb-6 group">
            <div className="w-12 h-12 bg-[#25D366]/10 rounded-full flex items-center justify-center group-hover:bg-[#25D366]/20 transition-colors">
              <MessageCircle className="w-5 h-5 text-[#25D366]" />
            </div>
            <div>
              <p className="text-white/40 text-xs uppercase tracking-widest font-bold">WhatsApp Specialist</p>
              <p className="text-white font-mono text-lg">+251 93 215 9546</p>
            </div>
          </a>

          <a href="tel:+251932159546" className="flex items-center gap-4 mb-6 group">
            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-white/10 transition-colors">
              <Phone className="w-5 h-5 text-accent" />
            </div>
            <div>
              <p className="text-white/40 text-xs uppercase tracking-widest font-bold">Direct Call</p>
              <p className="text-white font-mono text-lg">+251 93 215 9546</p>
            </div>
          </a>

          <a href="mailto:sales@amencarimport.com" className="flex items-center gap-4 mb-6 group">
            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-white/10 transition-colors">
              <Mail className="w-5 h-5 text-accent" />
            </div>
            <div>
              <p className="text-white/40 text-xs uppercase tracking-widest font-bold">Email Us</p>
              <p className="text-white font-mono text-lg lg:text-base">sales@amencarimport.com</p>
            </div>
          </a>

          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-white/10 transition-colors">
              <MapPin className="w-5 h-5 text-accent" />
            </div>
            <div>
              <p className="text-white/40 text-xs uppercase tracking-widest font-bold">Office</p>
              <p className="text-white font-medium">Addis Ababa, Ethiopia</p>
            </div>
          </div>
        </div>

        <div className="bg-[#111111] border border-white/5 p-8 rounded-[2rem] shadow-[0_10px_30px_rgba(0,0,0,0.4)] flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-display font-bold text-white mb-4">Start Your Import</h2>
            <p className="text-white/60 mb-8">Click below to start a quick chat with our sales team and initiate your purchasing process.</p>
          </div>
          <a
            href="https://wa.me/251932159546?text=Hello%20Amen%20Car%20Import%2C%20I%20would%20like%20to%20inquire%20about%20importing%20a%20car."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center bg-accent hover:bg-accent-hover text-white py-5 rounded-full font-bold text-sm uppercase tracking-widest transition-all shadow-[var(--glow-accent)] hover:shadow-[var(--glow-accent-strong)] hover:-translate-y-1"
          >
            Chat with Sales
          </a>
        </div>
      </div>
    </div>
  );
}
