import React from "react";
import styles from "../Styles/FlashSale.module.css";
import { useNavigate } from "react-router-dom";

import flow1 from "../Images/d7.png";
import f1 from "../Images/f1.png";
import f2 from "../Images/f2.png";
import f3 from "../Images/f3.png";

const FlashSale = () => {
  const navigate = useNavigate();

  const products = [
    { name: "Rose Red", oldPrice: 35, newPrice: 25, image: f1 },
    { name: "Flowers Gerbera", oldPrice: 19, newPrice: 18, image: f2 },
    { name: "Olive Branches", oldPrice: 28, newPrice: 25, image: f3 },
  ];

  return (
    <div className={styles.flashContainer}>
      {/* LEFT BIG IMAGE */}
      <div className={styles.flashLeft}>
        <img src={flow1} alt="flower" className={styles.flashBigImg} />
        <button className={styles.viewBtn}>View All Offers</button>
      </div>

      {/* RIGHT CONTENT */}
      <div className={styles.flashRight}>
        <div className={styles.flashHeader}>
          <h1 className={styles.title}>Flash Sale</h1>
        </div>

        {/* PRODUCT CARDS */}
        <div className={styles.flashProducts}>
          {products.map((item, index) => (
            <div
              key={index}
              className={styles.cardBox}
              onClick={() =>
                navigate(`/product/${item.name}`, { state: item })
              }
            >
              <h3>{item.name}</h3>
              <p className={styles.price}>
                <del>${item.oldPrice}</del> <span>${item.newPrice}</span>
              </p>
              <img
                src={item.image}
                alt={item.name}
                className={styles.productImg}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
