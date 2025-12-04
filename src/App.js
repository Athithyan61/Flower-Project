import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Component/Navbar";
import About from "./Component/About";
import Blog from "./Component/Blog";
import Faq from "./Component/Faq";
import Contact from "./Component/Contact";
import Product from "./Component/Product";
import Hero from "./Component/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Product />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
