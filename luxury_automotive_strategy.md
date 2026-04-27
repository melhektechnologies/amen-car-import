# Premium Automotive Web Strategy & Architecture

## 1. Sitemap
```text
├── Home
├── Collection
│   ├── All Vehicles
│   ├── Sales (New & Certified Pre-Owned)
│   └── Rentals (Short-term & Long-term)
├── Vehicle Details (e.g., /collection/porsche-911-gt3)
│   ├── Specs & Gallery
│   └── 3D Configurator / Previewer
├── Services
│   ├── Chauffeured Experience
│   ├── Concierge & Transport
│   └── Corporate Fleets
├── Brand Heritage (About)
└── Concierge (Contact & Lead Capture)
```

## 2. Homepage Section-by-Section Layout
* **Hero Section:** Full-viewport. Cinematic, slow-pan background video of a flagship vehicle. Subtle gradient overlay for text readability. Large, elegant typography. 
  * *Primary CTA:* "Explore the Collection"
  * *Secondary CTA:* "Reserve Now"
* **The Marquee:** Seamless horizontal scroll of prestigious partner logos or trust markers (e.g., "Insured by X", "Official Partner of Y").
* **Featured Fleet (Snap-Scroll):** Horizontal scrolling gallery. Large, high-resolution cards taking up 80% of the viewport width. Hovering over a card reveals top specs (0-60mph, Top Speed, HP) and slightly scales the image.
* **3D Interactive Teaser:** A section with a sleek WebGL car model embedded. As the user scrolls down, the car slowly rotates to reveal different angles, pushing the boundaries of web interactivity.
* **Services Bento Box:** A modern asymmetric CSS Grid (Bento Box style) showcasing primary services: Sales, Rentals, Chauffeur, and Sourcing. Dark cards with subtle border gradients on hover.
* **Testimonials / Pedigree:** Minimalist, large serif typographic quotes from verified executives/celebrities. No cluttered avatars, just the text and their title.
* **Lead Capture / VIP Access:** High-contrast dark block. "Begin Your Journey." A minimalist form asking only for Name and Phone Number/Email, or a one-click WhatsApp initiation.
* **Footer:** Clean, multi-column. Social links, legal disclaimers, newsletter signup, and contact information.

## 3. Mobile-First UX Plan
* **App-like Bottom Navigation:** On mobile, implement a sticky bottom navigation bar with icons for: *Home*, *Search*, *WhatsApp*, and *Menu*.
* **Swipe & Haptics:** Ensure all car galleries utilize smooth, native-feeling horizontal swiping. (If deployed as PWA, utilize Vibration API for subtle haptics on selection).
* **Sticky CTA:** On vehicle detail pages, a "Reserve" or "Inquire" button remains pinned to the bottom of the screen at all times to maximize conversion.
* **Fluid View Transitions:** Implement the View Transitions API so navigating between the gallery and a specific car page feels like a continuous, animated flow.
* **Progressive Loading:** Use blurred image placeholders (BlurHash) and lazy-load videos to ensure instant perceived load times on mobile connections.

## 4. Premium Color Palette
A stark, high-contrast dark mode foundation that makes the vehicles pop.
* **Background (Primary):** `#0A0A0A` (Onyx Black) - Deep, pitch black UI for cinematic feel.
* **Surface (Secondary):** `#16161A` (Graphite) - For slightly elevated cards and modals.
* **Accent (Primary CTA):** `#CFA876` (Champagne Gold) - Represents luxury, wealth, and attention.
* **Accent (Hover/Interactive):** `#E3C296` (Lighter Champagne).
* **Text (Primary):** `#FAFAFA` (Pure White) - For high legibility.
* **Text (Secondary):** `#A1A1A6` (Platinum/Muted Grey) - For specs and descriptions.
* **Borders / Dividers:** `rgba(255, 255, 255, 0.08)` - Barely-there glassmorphic lines.

## 5. Typography System
Combining futuristic modernism with classic elegance.
* **Display / Headings:** `Syne` or `Clash Display`. These fonts offer a striking, slightly wide, and geometric look that feels extremely modern and cutting-edge.
* **Body / UI Elements:** `Inter` or `Manrope`. Highly legible sans-serifs that maintain clarity at small sizes.
* **Numbers / Specs:** `Space Grotesk`. Used specifically for pricing and performance metrics (e.g., *720 HP*) to give a technical, engineered feel.

## 6. CTA Strategy
* **Hierarchy:**
  * **Primary:** Solid Champagne Gold background, Black text. Used singularily per view (e.g., "Reserve Vehicle").
  * **Secondary:** Transparent background, thin Gold or White border, White text with a hover fill effect. (e.g., "View Specifications").
  * **Tertiary:** Simple text link with an animated arrow (e.g., `Discover More →`).
* **Copywriting:** Use exclusive, action-oriented language. Instead of "Submit" or "Buy", use "Secure Your Allocation", "Schedule Private Viewing", or "Request Concierge".
* **Floating WhatsApp Action:** A persistent, elegant WhatsApp bubble (often highly converted for international/high-net-worth clients preferring direct executive communication).

## 7. 3D Car Preview Concept
* **Technology Stack:** `@react-three/fiber` (R3F) and `three.js`.
* **Assets:** Draco-compressed `.glb` / `.gltf` models to keep file sizes under 5MB.
* **Environment & Lighting:** Use a high-dynamic-range (HDRI) environment map of a premium studio setup to provide hyper-realistic reflections on the car's clear-coat paint.
* **Interactivity:** 
  * OrbitControls allowing 360-degree rotation.
  * Point-and-click hotspots on the car (e.g., clicking the rim zooms in and displays wheel specs).
  * A native HTML UI overlay to toggle paint colors (updating the Three.js material color dynamically).
* **Performance:** Only mount the canvas when it enters the viewport (Intersection Observer) to save battery and memory.

## 8. Component Breakdown
Key reusable React components:
* `<HeroCinematic videoSrc="..." title="..." />`
* `<VehicleCard car={carData} variant="grid | list" />`
* `<BentoGrid items={services} />`
* `<ThreeModelViewer modelUrl="..." envMapUrl="..." />`
* `<FloatingWhatsAppWidget phoneNumber="..." message="..." />`
* `<LeadCaptureForm type="rental | sales" />`
* `<AnimatedNumber value={800} suffix=" HP" />` (For rolling numbers on scroll)

## 9. Conversion Improvements
* **Skeleton Loaders:** Prevents layout shift and keeps users engaged during the split second it takes to fetch database inventory.
* **Asymmetric Pricing Display:** Show monthly lease or daily rental numbers largely, and full cash price subtly, reducing purchase friction.
* **Sticky "Request Callback":** An exit-intent or timered pop-up offering a 1-on-1 concierge callback if they linger on a high-end vehicle.
* **Dynamic Lead Routing:** Forms that automatically push data to a CRM (like Hubspot or Salesforce) and instantly ping the sales team on Slack/WhatsApp for sub-5-minute response times.
* **Frictionless Forms:** Auto-formatting phone inputs, address autocomplete, and minimal required fields (Name + Phone).

## 10. Development Roadmap
* **Phase 1: Foundation (Weeks 1-2)**
  * Framework Setup: Next.js 14 (App Router), Tailwind CSS, Framer Motion for animations.
  * UI System: Setup colors, typography, buttons, and navigation.
  * Static Pages: Home, About, Services.
* **Phase 2: Inventory & CMS (Weeks 3-4)**
  * Headless CMS Integration (e.g., Sanity.io or Contentful) to manage vehicle listings.
  * Vehicle listing pages, filtration system, and SEO optimization.
* **Phase 3: The 3D Experience (Week 5)**
  * Model compression, Three.js integration, performance tuning.
  * Connecting UI controls to the 3D canvas.
* **Phase 4: Conversion & Launch (Week 6)**
  * Form integrations, WhatsApp API, CRM webhooks.
  * Cross-browser testing, mobile styling QA.
  * Production deployment via Vercel with edge caching.
