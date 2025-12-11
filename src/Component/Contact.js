import React, { useEffect, useState } from "react";
import styles from "../Styles/Contact.module.css";
import flower from "../Images/flr1.jpg";
import flower1 from "../Images/flr2.jpg";
import flower2 from "../Images/flr3.jpg";
import Footer from "./Footer";

export default function Contact() {
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
              transform: `translate(-50%, -50%) translateY(${
                offsetY * 0.35
              }px)`,
              zIndex: 1,
            }}
          />

          <img
            src={flower2}
            alt=""
            className={styles.pImage}
            style={{ transform: ` translateY(${offsetY * -0.2}px) ` }}
          />
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.mapCircle}>
          <iframe
            title="London Eye Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19809.28020296546!2d-0.127758!3d51.503324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900b9847d%3A0xceb545d49c3e39fb!2sLondon%20Eye!5e0!3m2!1sen!2suk!4v123456789"
            width="100%"
            height="100%"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <div className={styles.rightSection}>
          <h1 className={styles.title}>
            Don't Hesitate to <br />
            Contact Us, Send <br />
            Your Message
          </h1>

          <p className={styles.text}>
            I am text block. Click edit button to change this text. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus
            nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          <div className={styles.info}>
            <p>📧 ex@domain.com</p>
            <p>📞 (+1) 234 56 789</p>
            <p>📍 633, Northwest, Apartment 11, Ecuador</p>
          </div>

          <form className={styles.form}>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message" rows="4"></textarea>
            <button className={styles.btn}>Send</button>
          </form>
        </div>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.box}>
          <h1>View Frequently Asked Questions</h1>

          <p>
            I am text block. Click edit button to change this text. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Ut <br></br>elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          <a href="/Faq1">
            <button className={styles.btnn}>View FAQ</button>
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}
