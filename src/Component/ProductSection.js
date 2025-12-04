import React from "react";
import styles from "../Styles/ProductSection.module.css"; // same css module
import p1 from "../Images/p1.png";
import p2 from "../Images/p2.png";
import p3 from "../Images/p3.png";
import p4 from "../Images/p4.png";
import p5 from "../Images/p5.png";
import p6 from "../Images/p6.png";
import p7 from "../Images/p7.png";
import p8 from "../Images/p8.png";

export default function ProductsPage() {
  const latestProducts = [
    {
      name: "Areca Palm",
      newPrice: "33.00",
      image: p1,
    },
    {
      name: "Sunflowers",
      newPrice: "33.00",
      image: p2,
    },
    {
      name: "White Camellia",
      newPrice: "33.00",
      image: p3,
    },
    {
      name: "Rose Red",
      oldPrice: "35.00",
      newPrice: "25.00",
      image: p4,
    }
  ];

  const bestSellingProducts = [
    {
      name: "Blossom Noir",
      newPrice: "31.00",
      image: p5,
    },
    {
      name: "Orchid Flower",
      oldPrice: "22.00",
      newPrice: "18.00",
      image: p6,
    },
    {
      name: "Pampas Grass",
      newPrice: "33.00",
      image: p7,
    },
    {
      name: "Camellia Pink",
      newPrice: "25.00",
      image: p8,
    }
  ];

  const renderSection = (title, products) => (
    <section className={styles.section}>
      <h2 className={styles.heading}>{title}</h2>

      <div className={styles.grid}>
        {products.map((item, index) => (
          <div key={index} className={styles.card}>
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
              <img
                src={item.image}
                alt={item.name}
                className={styles.image}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <>
      {renderSection("Latest Products", latestProducts)}
      {renderSection("Best Selling Products", bestSellingProducts)}
    </>
  );
}
