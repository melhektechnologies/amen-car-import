/**
 * Global Configuration for Amen Car Import
 * Centralizes business logic, contact info, and production settings.
 */
export const SITE_CONFIG = {
  name: "Amen Car Import",
  url: "https://amencarimport.com",
  contact: {
    phone: "+251 93 215 9546",
    whatsapp: "251932159546",
    email: "info@amencarimport.com",
    address: "Addis Ababa, Ethiopia",
  },
  social: {
    telegram: "https://t.me/amencarimport",
    instagram: "https://instagram.com/amencarimport",
    facebook: "https://facebook.com/amencarimport",
  },
  defaults: {
    whatsappMessage: "Hello Amen Car Import, I would like to inquire about importing a vehicle from Dubai.",
  },
  features: {
    enable3D: true,
    enableAnalytics: process.env.NODE_ENV === "production",
  }
};
