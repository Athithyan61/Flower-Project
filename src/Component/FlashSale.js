import React, { useEffect, useRef, useState } from "react";
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

  // Timer State
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 23,
    minutes: 58,
    seconds: 33,
  });

  // Animation trigger every second
  const [animateTimer, setAnimateTimer] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      // Trigger animation
      setAnimateTimer(true);

      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) seconds--;
        else {
          seconds = 59;
          if (minutes > 0) minutes--;
          else {
            minutes = 59;
            if (hours > 0) hours--;
            else {
              hours = 23;
              if (days > 0) days--;
            }
          }
        }

        return { days, hours, minutes, seconds };
      });

      // Remove animation class after 400ms so it can re-trigger next second
      const animationTimeout = setTimeout(() => setAnimateTimer(false), 400);

      // Cleanup timeout on unmount or before next tick
      return () => clearTimeout(animationTimeout);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Scroll reveal animation
  const [visibleIndexes, setVisibleIndexes] = useState([]);
  const cardsRef = useRef([]);
  const imgRef = useRef(null);
  const [imgVisible, setImgVisible] = useState(false);

  useEffect(() => {
    const cardsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = Number(entry.target.getAttribute("data-index"));
        if (entry.isIntersecting) {
          setVisibleIndexes((prev) =>
            prev.includes(index) ? prev : [...prev, index]
          );
        }
      });
    });

    const imgObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setImgVisible(true);
        imgObserver.unobserve(entry.target);
      }
    });

    // Capture snapshot of cardsRef.current for cleanup safety
    const currentCards = cardsRef.current.slice();
    currentCards.forEach((card) => card && cardsObserver.observe(card));

    const currentImg = imgRef.current;
    if (currentImg) imgObserver.observe(currentImg);

    return () => {
      currentCards.forEach((card) => card && cardsObserver.unobserve(card));
      if (currentImg) imgObserver.unobserve(currentImg);
    };
  }, []);

  return (
    <div className={styles.flashContainer}>
      {/* LEFT IMAGE */}
      <div
        className={`${styles.flashLeft} ${imgVisible ? styles.animateImage : ""}`}
        ref={imgRef}
      >
        <img src={flow1} alt="flower" className={styles.flashBigImg} />

        <button
          className={`${styles.viewBtn} ${animateTimer ? styles.slideBtn : ""}`}
        >
          View All Offers
        </button>
      </div>

      {/* RIGHT */}
      <div className={styles.flashRight}>
        <div className={styles.flashHeader}>
          <h1 className={styles.title}>Flash Sale</h1>

          {/* TIMER */}
          <div
            className={styles.timerWrapper}
            onMouseEnter={() => setAnimateTimer(true)}
            onAnimationEnd={() => setAnimateTimer(false)}
          >
            {["days", "hours", "minutes", "seconds"].map((unit, i) => (
              <div
                key={i}
                className={`${styles.timerBox} ${
                  animateTimer ? styles.timerAnimate : ""
                }`}
              >
                <h3>{timeLeft[unit]}</h3>
                <p>{unit.charAt(0).toUpperCase() + unit.slice(1)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* PRODUCTS */}
        <div className={styles.flashProducts}>
          {products.map((item, index) => (
            <div
              key={index}
              data-index={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`${styles.cardBox} ${
                visibleIndexes.includes(index) ? styles.animate : ""
              }`}
              onClick={() => navigate(`/product/${item.name}`, { state: item })}
            >
              <h3>{item.name}</h3>
              <p className={styles.price}>
                <del>${item.oldPrice}</del> <span>${item.newPrice}</span>
              </p>
              <img src={item.image} alt={item.name} className={styles.productImg} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
