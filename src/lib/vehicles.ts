// Central vehicle inventory data layer.
// Swap this for an API call or CMS integration (Sanity, Contentful) in production.

export type Vehicle = {
  slug: string;
  brand: string;
  name: string;
  image: string;
  year: number;
  transmission: "Automatic" | "Manual";
  mileage: number;
  fuelType: "Petrol" | "Hybrid" | "Electric";
  rentPrice: number;   // USD per day
  salePrice: number;   // USD
  status: "Available" | "Reserved" | "New Arrival";
  category: "sales" | "rental" | "both";
  specs: {
    engine: string;
    horsepower: number;
    topSpeed: number;    // mph
    zeroToSixty: number; // seconds
    seating: number;
  };
  description: string;
};

// Cache buster for image updates. Increment this when you replace images in public/images/
const v = "?v=2";

const IMAGE_VERSION = "4";

export const vehicles: Vehicle[] = [
  {
    slug: "byd-seagull",
    brand: "BYD",
    name: "Seagull",
    image: "/images/byd-seagull.png",
    year: 2024,
    transmission: "Automatic",
    mileage: 0,
    fuelType: "Electric",
    rentPrice: 0, 
    salePrice: 3500000,
    status: "New Arrival",
    category: "sales",
    specs: {
      engine: "30.08 kWh Battery",
      horsepower: 74,
      topSpeed: 81,
      zeroToSixty: 13.0,
      seating: 4,
    },
    description: "The perfect urban electric vehicle. Compact, efficient, and packed with modern technology for the daily commute.",
  },
  {
    slug: "byd-song-plus-ev",
    brand: "BYD",
    name: "Song Plus EV",
    image: "/images/byd-song-plus-ev.png",
    year: 2024,
    transmission: "Automatic",
    mileage: 0,
    fuelType: "Electric",
    rentPrice: 0,
    salePrice: 8300000,
    status: "Available",
    category: "sales",
    specs: {
      engine: "71.7 kWh Battery",
      horsepower: 184,
      topSpeed: 100,
      zeroToSixty: 7.8,
      seating: 5,
    },
    description: "Premium comfort meets electric efficiency. The Song Plus EV is Ethiopia's favorite luxury electric SUV.",
  },
  {
    slug: "volkswagen-id6",
    brand: "Volkswagen",
    name: "ID.6 Crozz",
    image: "/images/volkswagen-id6.png",
    year: 2024,
    transmission: "Automatic",
    mileage: 0,
    fuelType: "Electric",
    rentPrice: 0,
    salePrice: 7200000,
    status: "Available",
    category: "sales",
    specs: {
      engine: "84.8 kWh Battery",
      horsepower: 204,
      topSpeed: 99,
      zeroToSixty: 9.1,
      seating: 7,
    },
    description: "The ultimate family electric SUV. Spacious 7-seater with long-range capabilities and German engineering.",
  },
  {
    slug: "suzuki-dezire",
    brand: "Suzuki",
    name: "Dezire",
    image: "/images/suzuki-dezire.png",
    year: 2024,
    transmission: "Automatic",
    mileage: 0,
    fuelType: "Petrol",
    rentPrice: 0,
    salePrice: 4000000,
    status: "Available",
    category: "sales",
    specs: {
      engine: "1.2L DualJet",
      horsepower: 89,
      topSpeed: 105,
      zeroToSixty: 11.5,
      seating: 5,
    },
    description: "The most reliable and economical sedan for Addis roads. Fuel efficiency and comfort in one package.",
  },
  {
    slug: "byd-e2",
    brand: "BYD",
    name: "E2",
    image: "/images/byd-e2.png",
    year: 2024,
    transmission: "Automatic",
    mileage: 0,
    fuelType: "Electric",
    rentPrice: 0,
    salePrice: 4500000,
    status: "Available",
    category: "sales",
    specs: {
      engine: "43.2 kWh Battery",
      horsepower: 94,
      topSpeed: 81,
      zeroToSixty: 10.5,
      seating: 5,
    },
    description: "Dynamic electric hatchback. Great range and modern interior for the value-conscious buyer.",
  },
  {
    slug: "linxys-g230",
    brand: "Linxys",
    name: "g230",
    image: "/images/linxys-g230.png",
    year: 2024,
    transmission: "Manual",
    mileage: 0,
    fuelType: "Petrol",
    rentPrice: 0,
    salePrice: 2000000,
    status: "Available",
    category: "sales",
    specs: {
      engine: "1.5L Inline-4",
      horsepower: 102,
      topSpeed: 85,
      zeroToSixty: 15.0,
      seating: 2,
    },
    description: "The workhorse you need. Reliable mini-truck for business and logistics.",
  },
  {
    slug: "volkswagen-id4",
    brand: "Volkswagen",
    name: "ID.4",
    image: "/images/volkswagen-id4.png",
    year: 2024,
    transmission: "Automatic",
    mileage: 0,
    fuelType: "Electric",
    rentPrice: 0,
    salePrice: 7000000,
    status: "Reserved",
    category: "sales",
    specs: {
      engine: "82 kWh Battery",
      horsepower: 201,
      topSpeed: 99,
      zeroToSixty: 8.5,
      seating: 5,
    },
    description: "Versatile electric SUV. The ID.4 combines German build quality with an impressive electric range.",
  },
  {
    slug: "byd-yuan-up",
    brand: "BYD",
    name: "Yuan Up",
    image: "/images/byd-yuan-up.png",
    year: 2024,
    transmission: "Automatic",
    mileage: 0,
    fuelType: "Electric",
    rentPrice: 0,
    salePrice: 6000000,
    status: "New Arrival",
    category: "sales",
    specs: {
      engine: "45.12 kWh Battery",
      horsepower: 174,
      topSpeed: 99,
      zeroToSixty: 7.9,
      seating: 5,
    },
    description: "The newest member of the BYD family. Modern, stylish, and perfect for the tech-savvy driver.",
  },
  {
    slug: "toyota-bz4x",
    brand: "Toyota",
    name: "bZ4X",
    image: "/images/toyota-bz4x.png",
    year: 2024,
    transmission: "Automatic",
    mileage: 0,
    fuelType: "Electric",
    rentPrice: 0,
    salePrice: 7000000,
    status: "Available",
    category: "sales",
    specs: {
      engine: "71.4 kWh Battery",
      horsepower: 201,
      topSpeed: 100,
      zeroToSixty: 7.5,
      seating: 5,
    },
    description: "Toyota's first all-electric SUV. Reliable, spacious, and built with the quality you expect from Toyota.",
  },
  {
    slug: "dayun-compact",
    brand: "Dayun",
    name: "ES3",
    image: "/images/dayun-compact.png",
    year: 2024,
    transmission: "Automatic",
    mileage: 0,
    fuelType: "Electric",
    rentPrice: 0,
    salePrice: 2000000,
    status: "Available",
    category: "sales",
    specs: {
      engine: "31.7 kWh Battery",
      horsepower: 48,
      topSpeed: 62,
      zeroToSixty: 18.0,
      seating: 4,
    },
    description: "The most affordable electric city car. Compact size makes it perfect for navigating busy Addis streets.",
  },
  {
    slug: "honda-ens1",
    brand: "Honda",
    name: "e:NS1",
    image: "/images/honda-ens1.png",
    year: 2024,
    transmission: "Automatic",
    mileage: 0,
    fuelType: "Electric",
    rentPrice: 0,
    salePrice: 5300000,
    status: "Available",
    category: "sales",
    specs: {
      engine: "68.8 kWh Battery",
      horsepower: 201,
      topSpeed: 93,
      zeroToSixty: 7.4,
      seating: 5,
    },
    description: "Honda efficiency in an electric SUV package. Smooth handling and a premium interior.",
  },
].map(v => ({ ...v, image: `${v.image}?v=${IMAGE_VERSION}` }));

