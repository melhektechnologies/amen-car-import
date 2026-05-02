import type { Metadata } from "next";
import { Inter, Syne, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { SITE_CONFIG } from "@/lib/config";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Amen Car Import | Premium Automotive Imports Addis Ababa",
    template: "%s | Amen Car Import"
  },
  description:
    "Direct premium automotive imports from Dubai to Addis Ababa. Experience the most transparent and professional vehicle sourcing service in Ethiopia. Duty-paid, factory-new, and inspected excellence.",
  keywords: ["Car Import Ethiopia", "Dubai Cars Addis Ababa", "Premium Vehicle Sourcing", "Amen Car Import", "EV Imports Ethiopia", "Luxury Cars Addis"],
  authors: [{ name: "Amen Car Import" }],
  creator: "Amen Car Import",
  publisher: "Amen Car Import",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://amencarimport.com",
    siteName: "Amen Car Import",
    title: "Amen Car Import | Direct Dubai to Addis Premium Imports",
    description: "The most trusted automotive import pipeline in Ethiopia. Hand-picked excellence from Dubai showroom to your door.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Amen Car Import Premium Showroom",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amen Car Import | Premium Automotive Imports",
    description: "Direct premium automotive imports from Dubai to Addis Ababa. Transparency, quality, and excellence.",
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${syne.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        {/* Global WhatsApp concierge */}
        <WhatsAppWidget
          phoneNumber={SITE_CONFIG.contact.whatsapp}
          message={SITE_CONFIG.defaults.whatsappMessage}
        />
      </body>
    </html>
  );
}
