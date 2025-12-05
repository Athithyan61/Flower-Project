import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./Component/Navbar";
import About from "./Component/About";
import Blog from "./Component/Blog";
import Contact from "./Component/Contact";
import Product from "./Component/Product";
import Hero from "./Component/Home";
import Faq1 from "./Component/Faq1";
import BlogSingle from "./Component/BlogSingle";
import ProductDetails from "./Component/ProductDetails";
import Cart from "./Component/Cart";
import Checkout from "./Component/Checkout";
import OrderSuccess from "./Component/OrderSucces";
import ScrollToTop from "./Component/Scrolltotop";
import { CartProvider } from "./Component/CartContext";

import { AnimatePresence } from "framer-motion";
import PageWrapper from "./Component/PageWrapper";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Hero /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/products" element={<PageWrapper><Product /></PageWrapper>} />
        <Route path="/blog" element={<PageWrapper><Blog /></PageWrapper>} />
        <Route path="/blog/:id" element={<PageWrapper><BlogSingle /></PageWrapper>} />
        <Route path="/faq" element={<PageWrapper><Faq1 /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        <Route path="/product/:name" element={<PageWrapper><ProductDetails /></PageWrapper>} />
        <Route path="/cart" element={<PageWrapper><Cart /></PageWrapper>} />
        <Route path="/checkout" element={<PageWrapper><Checkout /></PageWrapper>} />
        <Route path="/order-success" element={<PageWrapper><OrderSuccess /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <ScrollToTop />
        <ToastContainer position="top-center" autoClose={4000} />
        <Navbar />
        <AnimatedRoutes />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
