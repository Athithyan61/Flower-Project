
import React, { useEffect, useState } from "react";
import styles from "../Styles/Faq1.module.css";

import flower from "../S-images/flr1.jpg";
import flower1 from "../S-images/flr2.jpg";
import flower2 from "../S-images/flr3.jpg";
const faqData = [
  {
    question: "Nulla sagittis condimentum ligula?",
    answer:
      "I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    question: "Suspendisse fermentum. Morbi a mauris?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in metus vel enim rhoncus aliquet.",
  },
  {
    question: "Nulla sagittis condimentum ligula?",
    answer:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
  {
    question: "Curabitur tellus purus, porta sit amet?",
    answer:
      "Vivamus vel augue ac leo placerat maximus. Aliquam erat volutpat.",
  },
  {
    question: "Ipsum sit amet consectetur adipiscing?",
    answer:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  },
];
const Faq1 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={styles.main}>

        <div className={styles.main1}>
          <h1>Contact Us</h1>
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
              position: "absolute",    
              top: "50%",
              left: "50%",
              transform: `translate(-50%, -50%) translateY(${offsetY * 0.35}px)`,
              zIndex: 1              
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
      <div className={styles.faqWrapper}>
        <h1 className={styles.title}>Frequently Asked Question</h1>
        <div className={styles.faqBox}>
          <div className={styles.faqHeader}>
            <span className={styles.icon}>❓</span> General FAQ
          </div>
          {faqData.map((item, index) => (
            <div key={index} className={styles.faqItem}>
              <button
                className={styles.question}
                onClick={() => toggleIndex(index)}
                aria-expanded={activeIndex === index}
              >
                {item.question}
                <span className={styles.arrow}>
                  {activeIndex === index ? "▲" : "▼"}
                </span>
              </button>
              {activeIndex === index && (
                <div className={styles.answer}>{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Faq1;

