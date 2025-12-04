import React, { useEffect, useState } from "react";
import styles from "../Styles/Productmain.module.css";
import flower from "../S-images/flr1.jpg";
import flower1 from "../S-images/flr2.jpg";
import flower2 from "../S-images/flr3.jpg";

export default function Product() {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={styles.main}>
        <div className={styles.main1}>
          <h1>Contact Us</h1>
        </div>

        <div className={styles.main2}>
          {/* Left image */}
          <img
            src={flower}
            alt=""
            className={styles.pImage}
            style={{ transform: `translateY(${offsetY * -0.25}px)` }}
          />

          {/* Center image (lower + parallax) */}
          <img
            src={flower1}
            alt=""
            className={`${styles.pImage} ${styles.centerImg}`}
            style={{
              transform: `translateY(${offsetY * 0.2}px)`, // center moves down
            }}
          />

          {/* Right image */}
          <img
            src={flower2}
            alt=""
            className={styles.pImage}
            style={{ transform: `translateY(${offsetY * -0.2}px)` }}
          />
        </div>
      </div>
    </>
  );
}
