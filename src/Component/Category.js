import React from "react";
import styles from "../Styles/Category.module.css";

import img1 from "../Images/d1.png";
import img2 from "../Images/d2.png";
import img3 from "../Images/d3.png";
import img4 from "../Images/d4.png";
import bigImg from "../Images/d5.png";
import smallImg from "../Images/d6.png";

export default function Category() {
  return (
    <section className={styles.section}>

      {/* CATEGORY TITLE */}
      <h2 className={styles.title}>Browse By Category</h2>

      {/* CATEGORY LIST */}
      <div className={styles.categoryRow}>
        <div className={styles.categoryCard}>
          <img src={img1} className={styles.catImg} alt="" />
          <div>
            <h4>Focal Flowers</h4>
            <p>500 Item</p>
          </div>
        </div>

        <div className={styles.categoryCard}>
          <img src={img2} className={styles.catImg} alt="" />
          <div>
            <h4>Filler Flowers</h4>
            <p>500 Item</p>
          </div>
        </div>

        <div className={styles.categoryCard}>
          <img src={img3} className={styles.catImg} alt="" />
          <div>
            <h4>Line Flowers</h4>
            <p>500 Item</p>
          </div>
        </div>

        <div className={styles.categoryCard}>
          <img src={img4} className={styles.catImg} alt="" />
          <div>
            <h4>Greenery</h4>
            <p>500 Item</p>
          </div>
        </div>
      </div>

      {/* ABOUT SECTION */}
      <div className={styles.aboutSection}>
        <div className={styles.aboutLeft}>
          <h2>Make Your Home as Comfortable as Possible</h2>
          <p>
            I am text block. Click edit button to change this text. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus
            nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          <button className={styles.btn}>About Us</button>
        </div>

        <div className={styles.aboutRight}>
          <div className={styles.bigRound}>
            <img src={bigImg} alt="" />
          </div>
          <div className={styles.smallRound}>
            <img src={smallImg} alt="" />
          </div>
        </div>
      </div>

    </section>
  );
}
