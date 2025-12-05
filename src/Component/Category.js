import React, { useEffect, useRef } from "react";
import styles from "../Styles/Category.module.css";
import img1 from "../Images/d1.png";
import img2 from "../Images/d2.png";
import img3 from "../Images/d3.png";
import img4 from "../Images/d4.png";
import bigImg from "../Images/d5.png";
import smallImg from "../Images/d6.png";



export default function Category() {
  const headingRef = useRef(null);
  const aboutRef = useRef(null);

  const leftRef = useRef(null);
  const smallRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.showAnim);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (leftRef.current) observer.observe(leftRef.current);
    if (smallRef.current) observer.observe(smallRef.current);
  }, []);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === headingRef.current) {
              entry.target.classList.add(styles.showOnceUp);
            }
            if (entry.target === aboutRef.current) {
              entry.target.classList.add(styles.showOnceRight);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    if (headingRef.current) observer.observe(headingRef.current);
    if (aboutRef.current) observer.observe(aboutRef.current);

  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.showAnim);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (leftRef.current) observer.observe(leftRef.current);
    if (smallRef.current) observer.observe(smallRef.current);
  }, []);

  return (
    <section className={styles.section}>
      <h2 className={`${styles.title} ${styles.slideUpOnce}`} ref={headingRef}>Browse By Category</h2>
      <div className={`${styles.categoryRow} ${styles.slideRightOnce}`} ref={aboutRef}>
        <div className={styles.categoryCard}>
          <img src={img1} className={styles.catImg} alt="" />
          <div>
            <h4>Focal Flowers</h4>
            <p>500 Item</p>
          </div>
        </div>

        <div className={styles.categoryCard}>
          <img src={img2} className={styles.catImg} alt="" />
          <div>
            <h4>Filler Flowers</h4>
            <p>500 Item</p>
          </div>
        </div>

        <div className={styles.categoryCard}>
          <img src={img3} className={styles.catImg} alt="" />
          <div>
            <h4>Line Flowers</h4>
            <p>500 Item</p>
          </div>
        </div>

        <div className={styles.categoryCard}>
          <img src={img4} className={styles.catImg} alt="" />
          <div>
            <h4>Greenery</h4>
            <p>500 Item</p>
          </div>
        </div>
      </div>
      <div className={styles.aboutSection}>
        <div className={`${styles.aboutLeft} ${styles.animLeft}`} ref={leftRef}>
          <h2 className={styles.hh2}>Make Your Home as Comfortable as Possible</h2>
          <p>
            I am text block. Click edit button to change this text. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </p>
          <button className={styles.btn}>About Us</button>
        </div>

        <div className={styles.aboutRight}>
          <div className={styles.bigRound}>
            <img src={bigImg} alt="" />
          </div>

          <div className={`${styles.smallRound} ${styles.animRight}`} ref={smallRef}>
            <img src={smallImg} alt="" />
          </div>
        </div>

      </div>

    </section>
  );
}
