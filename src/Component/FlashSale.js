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

  const itemRefs = React.useRef([]);
  const [visibleItems, setVisibleItems] = React.useState([]);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setVisibleItems((prev) => ({
              ...prev,
              [index]: true,
            }));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    itemRefs.current.forEach((item, i) => {
      if (item) {
        item.dataset.index = i;
        observer.observe(item);
      }
    });
  }, []);

  return (
    <div className={styles.container}>   {/* ⭐ ADDED CONTAINER */}
      <div className={styles.flashContainer}>
        <div className={styles.flashLeft}>
          <img src={flow1} alt="flower" className={styles.flashBigImg} />
          <button className={styles.viewBtn}>View All Offers</button>
        </div>

        <div className={styles.flashRight}>
          <div className={styles.flashHeader}>
            <h1 className={styles.title}>Flash Sale</h1>
          </div>

          <div className={styles.flashProducts}>
            {products.map((item, index) => (
              <div
                key={index}
                className={`${styles.cardBox} ${
                  visibleItems[index] ? styles.show : ""
                }`}
                ref={(el) => (itemRefs.current[index] = el)}
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
    </div>
  );
};

export default FlashSale;
