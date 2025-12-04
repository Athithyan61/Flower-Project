import React from "react";
import styles from "../Styles/FlashSale.module.css";
import flow1 from "../Images/d7.png";
import f1 from "../Images/f1.png";
import f2 from "../Images/f2.png";
import f3 from "../Images/f3.png";

const FlashSale = () => {
  return (
    <div className={styles.flashContainer}>

      {/* LEFT BIG IMAGE */}
      <div className={styles.flashLeft}>
        <img
          src={flow1}
          alt="flower"
          className={styles.flashBigImg}
        />
        <button className={styles.viewBtn}>View All Offers</button>
      </div>

      {/* RIGHT CONTENT */}
      <div className={styles.flashRight}>
        
        {/* TITLE + COUNTDOWN */}
        <div className={styles.flashHeader}>
          <h1 className={styles.title}>Flash Sale</h1>

          <div className={styles.timer}>
            <div className={styles.timeBox}>
              <span>30</span>
              <p>Days</p>
            </div>
            <div className={styles.timeBox}>
              <span>12</span>
              <p>Hours</p>
            </div>
            <div className={styles.timeBox}>
              <span>38</span>
              <p>Minutes</p>
            </div>
            <div className={styles.timeBox}>
              <span>42</span>
              <p>Seconds</p>
            </div>
          </div>
        </div>

        {/* PRODUCT CARDS */}
        <div className={styles.flashProducts}>

          <div className={styles.cardBox}>
            <h3>Rose Red</h3>
            <p className={styles.price}>
              <del>$35.00</del> <span>$25.00</span>
            </p>
            <img src={f1} alt="" className={styles.productImg} />
          </div>

          <div className={styles.cardBox}>
            <h3>Flowers Gerbera</h3>
            <p className={styles.price}>
              <del>$19.00</del> <span>$18.00</span>
            </p>
            <img src={f2} alt="" className={styles.productImg} />
          </div>

          <div className={styles.cardBox}>
            <h3>Olive Branches</h3>
            <p className={styles.price}>
              <del>$28.00</del> <span>$25.00</span>
            </p>
            <img src={f3} alt="" className={styles.productImg} />
          </div>

        </div>
      </div>
    </div>
  );
};

export default FlashSale;
