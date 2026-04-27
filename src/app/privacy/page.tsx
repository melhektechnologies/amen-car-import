import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-6 min-h-[80vh]">
      <h1 className="font-display text-4xl font-bold uppercase tracking-tight text-white mb-12 border-b border-white/10 pb-8">
        Privacy Policy
      </h1>
      <div className="prose prose-invert prose-p:text-white/60 prose-headings:font-display max-w-none">
        <p>Last updated: January 2024</p>
        
        <h2>1. Information We Collect</h2>
        <p>At Amen Car Import, we collect personal information you provide to us when you inquire about our services, vehicles, or contact us via our website, WhatsApp, or email. This includes your name, phone number, email address, and vehicle preferences.</p>
        
        <h2>2. How We Use Your Information</h2>
        <p>Your information is used strictly to provide you with the automotive import services you requested. We use your contact details to send quotes, update you on inventory, and communicate during the logistics process from Dubai to Addis Ababa.</p>
        
        <h2>3. Information Sharing</h2>
        <p>We do not sell or rent your personal information to third parties. Information may only be shared with trusted logistics partners and Ethiopian customs authorities strictly for the purpose of clearing and delivering your imported vehicle.</p>
        
        <h2>4. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at info@amencarimport.com</p>
      </div>
    </div>
  );
}
