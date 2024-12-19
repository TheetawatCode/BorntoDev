import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
// import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

import CheckoutPage from "./pages/CheckoutPage";

import Product_01 from "./pages/Product_01";
import Product_02 from "./pages/Product_02";
import Product_03 from "./pages/Product_03";
import Product_04 from "./pages/Product_04";

import NotFoundPage from './pages/NotFoundPage';


const App: React.FC = () => {
  return (
    <Router>
      <NavBar /> {/* แสดง NavBar ทุกหน้า */}
      <div>
      <Routes>
        <Route path="/" element={<ProductPage />} /> {/* หน้าแรก */}
        <Route path="/products" element={<ProductPage />} /> {/* บริการ */}
        <Route path="/about" element={<AboutPage />} /> {/* เกี่ยวกับเรา */}

        <Route path="/contact" element={<ContactPage />} /> {/* ติดต่อเรา */}
        <Route path="/checkout" element={<CheckoutPage />} />  {/* Checkout */}

        <Route path="/product_01" element={<Product_01 />} />
        <Route path="/product_02" element={<Product_02 />} />
        <Route path="/product_03" element={<Product_03 />} />
        <Route path="/product_04" element={<Product_04 />} />

        
        <Route path="*" element={<NotFoundPage />} /> {/* 404 - Page Not Found */}
      </Routes>
      </div>
      <Footer /> {/* แสดง Footer ทุกหน้า */}
    </Router>
  );
};

export default App;