import React from "react";
import HeroSection from "../components/sections/HeroSection";
import ProductsSection from "../components/sections/ProductsSection";

const ProductsPage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <ProductsSection />
    </div>
  );
};

export default ProductsPage;