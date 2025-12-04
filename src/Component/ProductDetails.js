import React, { useRef, useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";

import styles from "../Styles/ProductDetails.module.css";

// Fallback products
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
  const navigate = useNavigate();
  const imageRef = useRef(null);
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);

  const currentProduct = product || productList.find((p) => p.name === name);
  if (!currentProduct) return <h2>Product Not Found</h2>;

  const handleAddToCart = () => {
    const productToAdd = {
      ...currentProduct,
      price: Number(currentProduct.newPrice), // numeric price
      quantity: Number(qty), // numeric quantity
    };
    addToCart(productToAdd);
    navigate("/cart");
  };

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

      <div className={styles.rightBox}>
        <p className={styles.breadcrumb}>
          Home / Category / <span>{currentProduct.name}</span>
        </p>

        <h1 className={styles.title}>{currentProduct.name}</h1>

        <p className={styles.price}>
          <p className={styles.price}>
            <span className={styles.oldPrice}>
              ${Number(currentProduct.oldPrice).toFixed(2)}
            </span>
            <span className={styles.newPrice}>
              ${Number(currentProduct.newPrice).toFixed(2)}
            </span>
          </p>
        </p>
        <div className={styles.line}></div>
        <div className={styles.actionRow}>
          <input
            className={styles.act}
            type="number"
            min="1"
            value={qty}
            onChange={(e) => setQty(Math.max(1, Number(e.target.value)))}
          />
          <button className={styles.addBtn} onClick={handleAddToCart}>
            Add to cart
          </button>
        </div>

        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus
          nec ullamcorper mattis, pulvinar dapibus leo. Dolor sit amet,
          consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
          mattis, pulvinar dapibus leo.
        </p>
      </div>
    </div>
  );
}
