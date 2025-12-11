import React, { useEffect, useState } from "react";
import styles from "../Styles/Productmain.module.css";
import flower from "../Images/flr1.jpg";
import flower1 from "../Images/flr2.jpg";
import flower2 from "../Images/flr3.jpg";
import BestSelling from "./BestSelling";
import FlashSale from "./FlashSale";
import LatestProducts from "./LatestProducts";
import Services from "./Service";
import Footer from "./Footer";

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
          <h1>Product Archive</h1>
        </div>

        <div className={styles.main2}>
          <img
            src={flower}
            alt=""
            className={styles.pImage}
            style={{ transform: `translateY(${offsetY * -0.25}px)` }}
          />

          <img
            src={flower1}
            alt=""
            className={`${styles.pImage} ${styles.centerImg}`}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: `translate(-50%, -50%) translateY(${
                offsetY * 0.35
              }px)`,
              zIndex: 1,
            }}
          />

          <img
            src={flower2}
            alt=""
            className={styles.pImage}
            style={{ transform: ` translateY(${offsetY * -0.2}px) ` }}
          />
        </div>
      </div>
      <BestSelling />
      <FlashSale />
      <LatestProducts />
      <Services />
      <Footer />
    </>
  );
}
