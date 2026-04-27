"use client";

import { MessageCircle } from "lucide-react";

interface WhatsAppWidgetProps {
  phoneNumber: string; // e.g. "15551234567" (no + or spaces)
  message?: string;
}

export function WhatsAppWidget({ phoneNumber, message = "Hello, I would like to inquire about a vehicle." }: WhatsAppWidgetProps) {
  const encodedMessage = encodeURIComponent(message);
  const href = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <div 
      className="fixed right-6 md:right-8 z-50 flex items-center justify-end group"
      style={{ bottom: "max(1.5rem, calc(env(safe-area-inset-bottom) + 1.5rem))" }}
    >
      <div className="absolute right-[4.5rem] bg-surface/95 backdrop-blur-sm border border-white/10 px-4 py-2.5 rounded-xl opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-xl hidden md:block">
        <p className="text-[11px] text-white uppercase tracking-widest font-semibold flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-[#25D366] rounded-full animate-pulse shadow-[0_0_8px_#25D366]" />
          Concierge Support
        </p>
      </div>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open WhatsApp Concierge"
        className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_40px_rgba(37,211,102,0.6)] hover:scale-105 transition-all duration-300"
      >
        <MessageCircle className="w-6 h-6 md:w-7 md:h-7 text-white fill-white" />
      </a>
    </div>
  );
}
