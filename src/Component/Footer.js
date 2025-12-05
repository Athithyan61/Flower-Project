import React from "react";
import styles from "../Styles/Footer.module.css";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const Footer = () => {

  const navigate = useNavigate();
  
  return (
    <footer className={styles.footer}>

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
            I am text block. Click edit button to change this text. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
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
            <p>Singapore</p>
          </div>
        </div>
      </div>

      <div className={styles.divider}></div>


      <div className={styles.middleRow}>

        <ul className={styles.bottomMenu}>
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/about")}>About Us</li>
          <li onClick={() => navigate("/blog")}>Blog</li>
        </ul>

        <div className={styles.logo}>
          <h1 className={styles.logoIcon }>Dazzling Sky</h1>
        </div>

        <div className={styles.social}>
          <span>Follow Us</span>
          <RxCross2 className={styles.book} />
          <FaFacebookF className={styles.book} />
          <FaInstagram className={styles.book} />
          <FaTiktok className={styles.book} />
        </div>
      </div>
      <div className={styles.divider}></div>

      <p className={styles.copy}>Softnova Technology</p>
    </footer>
  );
};

export default Footer;
