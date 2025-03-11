import Image from "next/image";

import { HeroSection } from "./components/sections/HeroSection";
import { ServicesSection } from "./components/sections/ServicesSection";
import { AboutSection } from "./components/sections/AboutSection";
// import { PortfolioSection } from "./components/sections/PortfolioSection";
// import { PricingSection } from "./components/sections/PricingSection";
import { ContactSection } from "./components/sections/ContactSection";
import { BlogSection } from "./components/sections/BlogSection";
import { TestimonialsSection }from "./components/sections/TestimonialsSection";
import { GallerySection } from "./components/sections/GallerySection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      {/* <PortfolioSection /> */}
      {/* <PricingSection /> */}
      {/* <TestimonialsSection /> */}
      <ContactSection />
      <GallerySection />
      {/* <BlogSection /> */}
    </div>
  );
}
