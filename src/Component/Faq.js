
import React, { useState } from "react";
import styles from "../Styles/Faq.module.css";

const faqs = [
  { question: "Nulla sagittis condimentum ligula?", answer: "This is an example answer. Lorem ipsum dolor sit amet consectetur adipiscing elit." },
  { question: "Suspendisse fermentum. Morbi a mauris?", answer: "This is an example answer. Lorem ipsum dolor sit amet consectetur adipiscing elit." },
  { question: "Nulla sagittis condimentum ligula?", answer: "This is an example answer. Lorem ipsum dolor sit amet consectetur adipiscing elit." },
  { question: "Curabitur tellus purus, porta sit amet?", answer: "This is an example answer. Lorem ipsum dolor sit amet consectetur adipiscing elit." },
  { question: "Ipsum sit amet consectetur adipiscing?", answer: "This is an example answer. Lorem ipsum dolor sit amet consectetur adipiscing elit." },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Frequently Aked Question</h2>

      <div className={styles.container}>
        
        {/* LEFT FAQ */}
        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <button
                onClick={() => toggleFAQ(index)}
                className={styles.faqQuestion}
              >
                <span>{faq.question}</span>
                <span className={styles.icon}>
                  {activeIndex === index ? "▲" : "▼"}
                </span>
              </button>

              {activeIndex === index && (
                <p className={styles.faqAnswer}>{faq.answer}</p>
              )}

              <div className={styles.line}></div>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE BOX */}
        <div className={styles.rightBox}>
          <h3>Still Have Other Questions?</h3>
          <p>
            I am text block. Click edit button to change this text. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </p>

          <button className={styles.contactBtn}>Contact Us</button>
        </div>
      </div>
    </section>
  );
}
