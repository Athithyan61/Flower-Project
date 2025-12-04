import React from "react";
import styles from "../Styles/Home.module.css";

import img1 from "../Images/dimg5.png";
import img2 from "../Images/dimg1.png";
import img3 from "../Images/dimg3.png";
import img4 from "../Images/dimg4.png";
import img5 from "../Images/dimg2.png";
import Category from "../Component/Category";
import FlashSale from "../Component/FlashSale";
import New from "./New";
import ProductsPage from "./ProductSection";
import CustomersExperiences from "./Customer";
import FAQSection from "./Faq";
import Footer from "./Footer";

export default function Hero() {
  return (
    <>
    <section className={styles.hero}>
      {/* LEFT IMAGE GRID */}
      <div className={styles.heroLeft}>
        <div className={styles.heroGrid}>
          <img src={img1} alt="" className={`${styles.circle} ${styles.i1}`} />
          <img src={img2} alt="" className={`${styles.oval} ${styles.i2}`} />
          <img src={img3} alt="" className={`${styles.circle} ${styles.i3}`} />
          <img src={img4} alt="" className={`${styles.circle} ${styles.i4}`} />
          <img src={img5} alt="" className={`${styles.circle} ${styles.i5}`} />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className={styles.heroRight}>
        <h1>
          Best Place to Shop for <br /> Flowers Online
        </h1>

        <p>
          I am text block. Click edit button to change this text. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus
          nec ullamcorper mattis, pulvinar dapibus leo.
        </p>

        <button className={styles.shopBtn}>Shop Now</button>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <h2>5K</h2>
            <span>Active Users</span>
          </div>
          <div className={styles.stat}>
            <h2>4.5K</h2>
            <span>Client Satisfaction</span>
          </div>
          <div className={styles.stat}>
            <h2>1.2K</h2>
            <span>Partners Join Us</span>
          </div>
        </div>
      </div>
    </section>
    <Category/>
    <FlashSale/>
    <New/>
    <ProductsPage/>
    <CustomersExperiences/>
    <FAQSection/>
    <Footer/>
    </>
  );
}
