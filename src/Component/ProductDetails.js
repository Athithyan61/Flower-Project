import React, { useEffect, useRef, useState } from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import styles from "../Styles/ProductDetails.module.css";

// Fallback product list
import f1 from "../Images/f1.png";
import f2 from "../Images/f2.png";
import f3 from "../Images/f3.png";

// Parallax images
import flower from "../S-images/flr1.jpg";
import flower1 from "../S-images/flr2.jpg";
import flower2 from "../S-images/flr3.jpg";

// Related products
import p1 from "../S-images/p1.png";
import p2 from "../S-images/p2.png";
import p3 from "../S-images/p3.png";
import p4 from "../S-images/p4.png";

import Footer from "./Footer";

const productList = [
  { name: "Rose Red", oldPrice: 35, newPrice: 25, image: f1 },
  { name: "Flowers Gerbera", oldPrice: 19, newPrice: 18, image: f2 },
  { name: "Olive Branches", oldPrice: 28, newPrice: 25, image: f3 },
];

const products = [
  { id: 1, img: p1, name: "Areca Palm", price: "$33.00" },
  { id: 2, img: p2, name: "White Camellia", price: "$33.00" },
  { id: 3, img: p3, name: "Staghorn Fern", price: "$27.00" },
  { id: 4, img: p4, name: "Blossom Noir", price: "$31.00" },
];

function ProductDetails() {
  const [buttonState, setButtonState] = useState({});
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const [offsetY, setOffsetY] = useState(0);

  const imageRef = useRef(null);
  const { state: product } = useLocation();
  const { name } = useParams();

  const currentProduct = product || productList.find((p) => p.name === name);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!currentProduct) return <h2>Product Not Found</h2>;

  // Mouse movement zoom effect
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

  // Cart button per item
  const handleAddToCart = (id) => {
    setButtonState((prev) => ({ ...prev, [id]: "loading" }));

    setTimeout(() => {
      setButtonState((prev) => ({ ...prev, [id]: "added" }));
    }, 2000);
  };

  return (
    <>
      {/* HERO SECTION */}
      <div className={styles.main}>
        <div className={styles.main1}>
          <h1>Product Details</h1>
        </div>

        <div className={styles.main2}>
          <img src={flower} alt="" className={styles.pImage}
            style={{ transform: `translateY(${offsetY * -0.25}px)` }} />

          <img
            src={flower1}
            alt=""
            className={`${styles.pImage} ${styles.centerImg}`}
            style={{
              transform: `translate(-50%, -50%) translateY(${offsetY * 0.35}px)`,
              position: "absolute",
              top: "50%",
              left: "50%",
              zIndex: 1
            }}
          />

          <img src={flower2} alt="" className={styles.pImage}
            style={{ transform: `translateY(${offsetY * -0.2}px)` }} />
        </div>
      </div>

      {/* PRODUCT SECTION */}
      <div className={styles.page}>
        <div
          className={styles.leftBox}
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
        >
          <img ref={imageRef} src={currentProduct.image} alt={currentProduct.name} className={styles.mainImage} />
        </div>

        <div className={styles.rightBox}>
          <p className={styles.breadcrumb}>
            Home / Category / <span>{currentProduct.name}</span>
          </p>

          <h1 className={styles.title}>{currentProduct.name}</h1>

          <p className={styles.price}>
            <span className={styles.salePrice}>${currentProduct.newPrice}</span>
          </p>

          <div className={styles.actionRow}>
            <button className={styles.qtyBtn}>1</button>
            <button className={styles.addBtn}>Add to cart</button>
          </div>

          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus luctus nec.
          </p>
        </div>
      </div>

      {/* REVIEW SECTION */}
      <div className={styles.reviewBox}>
        <div className={styles.reviewTabContainer}>
          <div className={styles.reviewTab}>Reviews (0)</div>
        </div>

        <h2>Reviews</h2>
        <p>There are no reviews yet.</p>

        <label className={styles.label}>Your rating *</label>
        <div className={styles.stars}>
          {[...Array(5)].map((_, i) => {
            const index = i + 1;
            return (
              <span
                key={index}
                className={index <= (hover || rating) ? styles.starActive : styles.star}
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(null)}
              >
                ★
              </span>
            );
          })}
        </div>

        <label className={styles.label}>Your review *</label>
        <textarea className={styles.textarea}></textarea>

        <label className={styles.label}>Name *</label>
        <input type="text" className={styles.input} />

        <label className={styles.label}>Email *</label>
        <input type="email" className={styles.input} />

        <button className={styles.submitBtn}>Submit</button>
      </div>

      {/* RELATED PRODUCTS */}
      <div className={styles.scontainer}>
        <h2 className={styles.stitle}>Related products</h2>

        <div className={styles.sproductGrid}>
          {products.map((item) => (
            <div className={styles.scard} key={item.id}>
              <img src={item.img} alt={item.name} className={styles.simage} />

              <h3 className={styles.sname}>{item.name}</h3>
              <p className={styles.sprice}>{item.price}</p>

              <div className={styles.btnContainer}>
                <button
                  className={`${styles.cartBtn} ${buttonState[item.id] === "added" ? styles.success : ""
                    }`}
                  onClick={() => handleAddToCart(item.id)}
                  disabled={buttonState[item.id] === "loading"}
                >
                  {(buttonState[item.id] === "idle" || !buttonState[item.id]) && "Add to cart"}

                  {buttonState[item.id] === "loading" && (
                    <>
                      Adding... <span className={styles.spinner}></span>
                    </>
                  )}

                  {buttonState[item.id] === "added" && "Added ✓"}
                </button>

                {buttonState[item.id] === "added" && (
                  <Link to="/cart" className={styles.viewCart}>View cart</Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ProductDetails;
