import React, { useEffect, useRef, useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";
import { toast } from "react-toastify";

import styles from "../Styles/ProductDetails.module.css";

import f1 from "../Images/f1.png";
import f2 from "../Images/f2.png";
import f3 from "../Images/f3.png";

import flower from "../Images/flr1.jpg";
import flower1 from "../Images/flr2.jpg";
import flower2 from "../Images/flr3.jpg";

import p1 from "../Images/p1.png";
import p2 from "../Images/p2.png";
import p3 from "../Images/p3.png";
import p4 from "../Images/p4.png";

import Footer from "./Footer";

const productList = [
  { name: "Rose Red", oldPrice: 200, newPrice: 150, image: f1 },
  { name: "Flowers Gerbera", oldPrice: 250, newPrice: 200, image: f2 },
  { name: "Olive Branches", oldPrice: 150, newPrice: 100, image: f3 },
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
  const [qty, setQty] = useState(1);
  const [offsetY, setOffsetY] = useState(0);

  const imageRef = useRef(null);
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const { state: product } = useLocation();
  const { name } = useParams();

  const currentProduct = product || productList.find((p) => p.name === name);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!currentProduct) return <h2>Product Not Found</h2>;

  const handleAddMainProduct = () => {
    addToCart({
      ...currentProduct,
      price: Number(currentProduct.newPrice),
      quantity: Number(qty),
    });

    toast.success("Your product is added to the basket!", {
      position: "top-center",
      autoClose: 2000, 
    });

    setTimeout(() => {
      navigate("/cart");
    }, 2500);
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

  const handleAddRelated = (item) => {
    setButtonState((prev) => ({ ...prev, [item.id]: "loading" }));

    setTimeout(() => {
      addToCart({
        id: item.id,
        name: item.name,
        price: Number(item.price.replace("$", "")),
        quantity: 1,
        image: item.img,
      });

      setButtonState((prev) => ({ ...prev, [item.id]: "added" }));

      toast.success(`${item.name} added to basket!`, {
        position: "top-center",
        autoClose: 1200,
      });
    }, 800);
  };

  return (
    <>
      <div className={styles.main}>
        <div className={styles.main1}>
          <h1>Product Details</h1>
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
              transform: `translate(-50%, -50%) translateY(${
                offsetY * 0.35
              }px)`,
              position: "absolute",
              top: "50%",
              left: "50%",
              zIndex: 1,
            }}
          />

          <img
            src={flower2}
            alt=""
            className={styles.pImage}
            style={{ transform: `translateY(${offsetY * -0.2}px)` }}
          />
        </div>
      </div>

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
            <span className={styles.oldPrice}>
              ${Number(currentProduct.oldPrice).toFixed(2)}
            </span>
            <span className={styles.newPrice}>
              ${Number(currentProduct.newPrice).toFixed(2)}
            </span>
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
            <button className={styles.addBtn} onClick={handleAddMainProduct}>
              Add to cart
            </button>
          </div>

          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </div>

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
                className={
                  index <= (hover || rating) ? styles.starActive : styles.star
                }
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
                  className={`${styles.cartBtn} ${
                    buttonState[item.id] === "added" ? styles.success : ""
                  }`}
                  onClick={() => handleAddRelated(item)}
                  disabled={buttonState[item.id] === "loading"}
                >
                  {!buttonState[item.id] && "Add to cart"}
                  {buttonState[item.id] === "loading" && (
                    <>
                      Adding... <span className={styles.spinner}></span>
                    </>
                  )}
                  {buttonState[item.id] === "added" && "Added ✓"}
                </button>

                {buttonState[item.id] === "added" && (
                  <p
                    className={styles.viewCart}
                    onClick={() => {
                      addToCart({
                        id: item.id,
                        name: item.name,
                        price: Number(item.price.replace("$", "")),
                        quantity: 1,
                        image: item.img,
                      });

                      toast.success("Redirecting to cart...", {
                        position: "top-center",
                        autoClose: 1500,
                      });

                      setTimeout(() => {
                        navigate("/cart");
                      }, 2500);
                    }}
                  >
                    View cart
                  </p>
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
