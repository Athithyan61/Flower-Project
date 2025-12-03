import React from 'react'
import styles from "../Styles/Contact.module.css";
import flower from "../S-images/flr1.jpg";
import flower1 from "../S-images/flr2.jpg";
import flower2 from "../S-images/flr3.jpg";

export default function Contact() {
    return (
        <>
            <div className={styles.main}>
                
                <div className={styles.main1}>
                    <h1>Contact Us</h1>
                </div>

                <div className={styles.main2}>
                    <img src={flower} alt="" className={styles.imgStyle} />
                    <img src={flower1} alt="" className={`${styles.imgStyle} ${styles.middleImg}`} />
                    <img src={flower2} alt="" className={styles.imgStyle} />
                </div>

            </div>
        </>
    )
}
