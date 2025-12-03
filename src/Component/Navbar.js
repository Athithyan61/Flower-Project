import React, { useState } from "react";
import styles from "../Styles/Navbar.module.css";
import logo from "../Images/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open); // toggle dropdown
  };

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
            <span className={styles.price}>$0.00</span>
            <div className={styles.cartIcon}>🛒</div>
          </div>
        </header>
      </div>
    </>
  );
}
