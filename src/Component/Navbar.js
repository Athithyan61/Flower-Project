import React, { useState } from "react";
import styles from "../Styles/Navbar.module.css";
import logo from "../Images/logo.png";
import { useCart } from "./CartContext"; // <-- import cart context

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { cart } = useCart(); // get cart items from context

  const handleClick = () => {
    setOpen(!open); // toggle dropdown
  };

  // calculate total price
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <div className={styles.navbar1}>
        <header className={styles.navbar}>
          <div className={styles.logoSection}>
            <img src={logo} alt="Kembang Logo" className={styles.logoIcon} />

            <nav className={styles.navLinks}>
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/products">Products</a>

              {/* CLICK dropdown */}
              <div className={styles.dropdown}>
                <span className={styles.dropBtn} onClick={handleClick}>
                  Pages ▾
                </span>

                {open && (
                  <div className={styles.dropdownMenu}>
                    <a href="/blog">Blog</a>
                    <a href="/faq">Faq</a>
                  </div>
                )}
              </div>

              <a href="/contact">Contact</a>
            </nav>
          </div>

          <div className={styles.cartSection}>
            <span className={styles.price}>${totalPrice.toFixed(2)}</span>
            <div className={styles.cartIcon}>
              <span role="img" aria-label="cart">
                🛒
              </span>
              <span className={styles.cartCount}>({totalItems})</span>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}
