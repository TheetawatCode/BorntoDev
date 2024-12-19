import React from "react";
import HeroSection from "../components/sections/HeroSection";
// import FeaturesSection from "../components/sections/FeaturesSection";
// import PortfolioSection from "../components/sections/PortfolioSection";
// import TestimonialsSection from "../components/sections/TestimonialsSection";
// import FAQSection from "../components/sections/FAQSection";
// import CustomersLogoSection from "../components/sections/CustomersLogoSection";
// import TeamSection from "../components/sections/TeamSection";
// import PricingSection from "../components/sections/PricingSection";
// import GallerySection from "../components/sections/GallerySection";
// import ContentSection from "../components/sections/ContentSection";
// import ProductSection from "../components/sections/ProductSection";

const HomePage: React.FC = () => {
  return (
    <div>
      {/* <h1 className="text-3xl text-blue-500 font-bold underline text-center">
        Home Page
      </h1> */}

      <HeroSection />

      {/* <ProductSection /> */}

      {/* <FeaturesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <FAQSection />
      <CustomersLogoSection />
      <TeamSection />
      <PricingSection />
      <GallerySection />
      <ContentSection /> */}

    </div>

    
  );
};

export default HomePage;