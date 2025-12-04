import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import { CartProvider } from "./Component/CartContext";

import "bootstrap/dist/css/bootstrap.min.css";
import Checkout from "./Component/Checkout";
import OrderSuccess from "./Component/OrderSucces";
import ScrollToTop from "./Component/Scrolltotop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <ScrollToTop />
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />{" "}
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Product />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogSingle />} />
          <Route path="/faq" element={<Faq1 />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:name" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-success" element={<OrderSuccess />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
