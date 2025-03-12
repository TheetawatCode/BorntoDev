import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Header from "./components/layout/Header";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Contact";
import Blog from "./pages/Blog";
import Contact from "./pages/BlogDetail";

const App: React.FC = () => {
  return (
    <Router>
      {/* <Header />  */}
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} /> {/* หน้าแรก */}
          <Route path="/about" element={<About />} /> 
          <Route path="/portfolio" element={<Portfolio />} /> 
          <Route path="/blog" element={<Blog />} /> 
          <Route path="/contact" element={<Contact />} /> 
          {/* <Route path="*" element={<NotFoundPage />} />  */}
        </Routes>
      </div>
      <Footer /> 
    </Router>
  );
};

export default App;
