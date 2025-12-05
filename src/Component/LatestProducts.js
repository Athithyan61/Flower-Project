import React, { useEffect, useRef, useState } from "react";
import styles from "../Styles/LatestProducts.module.css";
import { useNavigate } from "react-router-dom";

import lp1 from "../Images/lp1.png";
import lp2 from "../Images/lp2.png";
import lp3 from "../Images/lp3.png";
import lp4 from "../Images/lp4.png";
import lp5 from "../Images/lp5.png";
import lp6 from "../Images/lp6.png";
import lp7 from "../Images/lp7.png";
import lp8 from "../Images/lp8.png";

const products = [
  { name: "Areca Palm", oldPrice: 33, newPrice: 33, image: lp1 },
  { name: "Sunflowers", oldPrice: 33, newPrice: 33, image: lp2 },
  { name: "White Camellia", oldPrice: 33, newPrice: 33, image: lp3 },
  { name: "Rose Red", oldPrice: 35, newPrice: 25, image: lp4 },
  { name: "Blossom Noir", oldPrice: 31, newPrice: 31, image: lp5 },
  { name: "Staghorn Fern", oldPrice: 27, newPrice: 27, image: lp6 },
  { name: "Flowers Gerbera", oldPrice: 19, newPrice: 18, image: lp7 },
  { name: "Olive Branches", oldPrice: 28, newPrice: 25, image: lp8 },
];

export default function LatestProducts() {
  const navigate = useNavigate();
  const itemsRef = useRef([]);
  const [visible, setVisible] = useState({});

  const openDetails = (item) => {
    navigate(`/product/${item.name}`, { state: item });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.dataset.index;
            setVisible((prev) => ({ ...prev, [index]: true }));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    itemsRef.current.forEach((el) => el && observer.observe(el));
  }, []);

  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Latest Products</h2>

      <div className={styles.grid}>
        {products.map((item, index) => (
          <div
            key={index}
            data-index={index}
            ref={(el) => (itemsRef.current[index] = el)}
            className={`${styles.card} ${visible[index] ? styles.show : ""}`}
            onClick={() => openDetails(item)}
          >
            <div className={styles.textBox}>
              <p className={styles.name}>{item.name}</p>

              <p className={styles.price}>
                {item.oldPrice !== item.newPrice ? (
                  <>
                    <span className={styles.oldPrice}>${item.oldPrice}</span>
                    <span className={styles.salePrice}>${item.newPrice}</span>
                  </>
                ) : (
                  <span>${item.oldPrice}</span>
                )}
              </p>
            </div>

            <img className={styles.image} src={item.image} alt={item.name} />
          </div>
        ))}
      </div>
    </section>
  );
}
