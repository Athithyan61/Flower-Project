import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/Bestselling.module.css";
import p5 from "../Images/p5.png";
import p6 from "../Images/p6.png";
import p7 from "../Images/p7.png";
import p8 from "../Images/p8.png";

export default function BestSelling() {

  const contentRef = useRef(null);

  const products = [
    { name: "Blossom Noir", newPrice: "31.00", image: p5 },
    { name: "Orchid Flower", oldPrice: "22.00", newPrice: "18.00", image: p6 },
    { name: "Pampas Grass", newPrice: "33.00", image: p7 },
    { name: "Camellia Pink", newPrice: "25.00", image: p8 },
  ];

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
    <section className={styles.section}>
      
      {/* only this fades, background won't move */}
      <div ref={contentRef} className={styles.fadeUp}>
        <h2 className={styles.heading}>Best Selling Products</h2>

        <div className={styles.grid}>
          {products.map((item, index) => (
            <Link
              to={`/product/${item.name.replace(/\s+/g, "-").toLowerCase()}`}
              state={item}
              key={index}
            >
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.productName}>{item.name}</h3>

                  <p className={styles.prices}>
                    {item.oldPrice && (
                      <span className={styles.oldPrice}>${item.oldPrice}</span>
                    )}
                    <span className={styles.newPrice}>${item.newPrice}</span>
                  </p>
                </div>

                <div className={styles.imageWrapper}>
                  <img src={item.image} alt={item.name} className={styles.image} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
