import React, { useState } from "react";
import styles from "../Styles/Navbar.module.css";
import { useCart } from "./CartContext";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const { cart } = useCart();

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <div className={styles.navbar1}>
        <header className={styles.navbar}>
          <div className={styles.logoSection}>
            <h1 className={styles.logoIcon}>Dazzling Sky</h1>

            <nav className={styles.navLinks}>
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/products">Products</a>

              <div className={styles.dropdown}>
                <span
                  className={styles.dropBtn}
                  onClick={() => setOpenDropdown(!openDropdown)}
                >
                  Pages ▾
                </span>

                {openDropdown && (
                  <div className={styles.dropdownMenu}>
                    <a href="/blog">Blog</a>
                    <a href="/faq">FAQ</a>
                  </div>
                )}
              </div>

              <a href="/contact">Contact</a>
            </nav>
          </div>

          <div className={styles.cartSection} onClick={() => setOpenCart(true)}>
            <span className={styles.price}>${totalPrice.toFixed(2)}</span>

            <div className={styles.cartIcon}>
              🛒
              <span className={styles.cartCount}>{totalItems}</span>
            </div>
          </div>
        </header>
      </div>

      {/* ---------- CART DRAWER ---------- */}
      <div className={`${styles.offCanvas} ${openCart ? styles.showCart : ""}`}>
        
        <div className={styles.cartHeader}>
          <h3>Your Cart</h3>
          <button onClick={() => setOpenCart(false)}>✕</button>
        </div>

        <div className={styles.cartItems}>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cart.map((item) => (
              <div className={styles.cartItem} key={item.id}>
                <img src={item.image} alt={item.name} className={styles.cartItemImage} />
                <div className={styles.cartItemInfo}>
                  <p className={styles.itemName}>{item.name}</p>
                  <p className={styles.itemPrice}>${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))
          )}
        </div>

        {/* ------ VIEW CART BUTTON ------ */}
        <button className={styles.viewCartBtn}>View Cart</button>
      </div>

      {/* Overlay */}
      {openCart && <div className={styles.cartOverlay} onClick={() => setOpenCart(false)}></div>}
    </>
  );
}
