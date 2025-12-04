import React from "react";
import styles from "../Styles/New.module.css";
import leftImg from "../Images/n2.png";   
import midImg from "../Images/n3.png";    
import rightImg from "../Images/n1.png"; 
export default function New() {
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.heading}>New Collection</h1>

      <div className={styles.container}>
        {/* Left Image + Stat */}
        <div className={styles.leftImageBox}>
          <img
            src={leftImg}
            alt="Rose"
            className={styles.leftImage}
          />
          <div className={styles.statBox}>
            <h2>99%</h2>
            <p>Positive feedback on<br />product quality</p>
          </div>
        </div>

        {/* Content */}
        <div className={styles.content}>
          <p className={styles.subtitle}>Seraphic Rose</p>
          <h2 className={styles.title}>
            This Name Conjures an Image of Divine Beauty<br />and Purity
          </h2>

          <p className={styles.text}>
            I am text block. Click edit button to change this text. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus
            nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          {/* Small Image + Quote */}
          <div className={styles.row}>
            <img
              src={midImg}
              alt="Flower"
              className={styles.smallImage}
            />

            <div className={styles.quoteBox}>
              <p className={styles.quote}>
                "Lorem ipsum dolor sit amet, consectetur"
              </p>
              <span className={styles.quoteAuthor}>John Doe</span>
            </div>
          </div>

          <button className={styles.button}>Explore Products</button>

          {/* Icons Section */}
          <div className={styles.features}>
            <div className={styles.featureItem}>🌿 Fast Growing</div>
            <div className={styles.featureItem}>✨ Easy Care</div>
          </div>
        </div>

        {/* Right Large Image */}
        <div className={styles.rightImageBox}>
          <img
            src={rightImg}
            alt="Flowers"
            className={styles.rightImage}
          />
        </div>
      </div>
    </section>
  );
}
