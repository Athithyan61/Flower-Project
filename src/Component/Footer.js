import React, { useEffect, useRef } from "react";
import styles from "../Styles/Footer.module.css";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import logo from "../Images/logo.png";

const Footer = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.show);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (contentRef.current) observer.observe(contentRef.current);

    return () => {
      if (contentRef.current) observer.unobserve(contentRef.current);
    };
  }, []);

  return (
    <footer className={styles.footer}>
      {/* Animation only this div */}
      <div ref={contentRef} className={styles.fadeUp}>
        <div className={styles.topGrid}>
          <div>
            <h3 className={styles.heading1}>Quick Menu</h3>
            <ul className={styles.menuList}>
              <li>Wishlist</li>
              <li>Voucher</li>
              <li>Payment</li>
              <li>Guarantee</li>
              <li>Free Shipping</li>
            </ul>
          </div>

          <div className={styles.centerBox}>
            <h2 className={styles.subscribeTitle}>
              Subscribe and Grab <span>70% Off</span>
            </h2>
            <p className={styles.subText}>
              I am text block. Click edit button to change this text. Lorem
              ipsum dolor sit amet.
            </p>
            <div className={styles.inputRow}>
              <input
                className={styles.input}
                type="text"
                placeholder="Enter your email here"
              />
            </div>
            <button className={styles.emailBtn}>Send Email</button>
          </div>

          <div>
            <h3 className={styles.heading}>Contact Us</h3>
            <div className={styles.contactInfo}>
              <p className={styles.label}>Call Us</p>
              <p>+1 234 567 89</p>
              <p className={styles.label}>Email</p>
              <p>example@domain.com</p>
              <p className={styles.label}>Address</p>
              <p>633, Northwest, Apartment 11, USA</p>
            </div>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.middleRow}>
          <ul className={styles.bottomMenu}>
            <li>Home</li>
            <li>About Us</li>
            <li>Blog</li>
          </ul>
          <div className={styles.logo}>
            <img src={logo} alt="Kembang Logo" />
          </div>
          <div className={styles.social}>
            <span>Follow Us</span>
            <RxCross2 />
            <FaFacebookF />
            <FaInstagram />
            <FaTiktok />
          </div>
        </div>

        <div className={styles.divider}></div>

        <p className={styles.copy}>Copyright © All Right Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
