import React from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/OrderSucces.module.css";
import Footer from "./Footer";

export default function OrderSuccess() {
  return (
    <>
    <div className={styles.successPage}>
      <div className={styles.card}>
        <h1>🎉 Order Successful!</h1>
        <p>Your order has been placed successfully.</p>

        <img
          src="https://cdn.dribbble.com/userupload/22860211/file/original-f81a064afd746f2910762383d32b4f15.gif"
          alt="Order Success"
          className={styles.successImg}
        />

        <div className={styles.buttons}>
          <Link to="/" className={styles.homeBtn}>
            Go to Home
          </Link>

          <Link to="/cart" className={styles.orderBtn}>
            View Cart
          </Link>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}
