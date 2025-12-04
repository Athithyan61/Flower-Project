import React, { useRef } from "react";
import { useLocation, useParams } from "react-router-dom";
import styles from "../Styles/ProductDetails.module.css";

// Example fallback list (for refresh)
import f1 from "../Images/f1.png";
import f2 from "../Images/f2.png";
import f3 from "../Images/f3.png";

const productList = [
  { name: "Rose Red", oldPrice: 35, newPrice: 25, image: f1 },
  { name: "Flowers Gerbera", oldPrice: 19, newPrice: 18, image: f2 },
  { name: "Olive Branches", oldPrice: 28, newPrice: 25, image: f3 },
];

export default function ProductDetails() {
  const { state: product } = useLocation();
  const { name } = useParams();
  const imageRef = useRef(null);

  // fallback if user refreshes page
  const currentProduct = product || productList.find((p) => p.name === name);

  if (!currentProduct) return <h2>Product Not Found</h2>;

  const handleMove = (e) => {
    const img = imageRef.current;
    const rect = img.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.03;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.03;
    img.style.transform = `translate(${x}px, ${y}px) scale(1.1)`;
  };

  const handleLeave = () => {
    imageRef.current.style.transform = "translate(0,0) scale(1)";
  };

  return (
    <div className={styles.page}>
      {/* LEFT IMAGE */}
      <div
        className={styles.leftBox}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
      >
        <img
          ref={imageRef}
          src={currentProduct.image}
          alt={currentProduct.name}
          className={styles.mainImage}
        />
      </div>

      {/* RIGHT SIDE */}
      <div className={styles.rightBox}>
        <p className={styles.breadcrumb}>
          Home / Category / <span>{currentProduct.name}</span>
        </p>

        <h1 className={styles.title}>{currentProduct.name}</h1>

        <p className={styles.price}>
          {/* <span className={styles.oldPrice}>${currentProduct.oldPrice}</span> */}
          <span className={styles.salePrice}>${currentProduct.newPrice}</span>
        </p>

        <div className={styles.actionRow}>
          <button className={styles.qtyBtn}>1</button>
          <button className={styles.addBtn}>Add to cart</button>
        </div>

        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>
    </div>
  );
}
