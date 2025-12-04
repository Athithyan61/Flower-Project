import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import'./App.css';
=======
>>>>>>> 19fc7d0911d063c353e19797dc5456ff2e0d2628
import Navbar from "./Component/Navbar";
import About from "./Component/About";
import Blog from "./Component/Blog";
import Contact from "./Component/Contact";
import Product from "./Component/Product";
import Hero from "./Component/Home";
import Faq1 from "./Component/Faq1";
import BlogSingle from "./Component/BlogSingle";
import ProductDetails from "./Component/ProductDetails";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Product />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogSingle />} />
        <Route path="/faq" element={<Faq1 />} />
        <Route path="/Faq1" element={<Faq1 />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:name" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
