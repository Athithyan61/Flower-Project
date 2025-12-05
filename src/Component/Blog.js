import React, { useEffect, useState } from 'react'
import styles from '../Styles/Blog.module.css';
import img1 from '../j-images/flr1.png';
import img2 from '../j-images/flr2.png';
import img3 from '../j-images/flr3.png';
import imgg1 from '../j-images/cont1.png';
import imgg2 from '../j-images/cont2.png';
import imgg3 from '../j-images/cont3.png';
import imgg4 from '../j-images/cont4.png';
import imgg5 from '../j-images/cont5.png';
import imgg6 from '../j-images/cont6.png';
import { BsClock } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from './Footer';

function Blog() {

  const navigate = useNavigate();
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname]);

  const blogData = [
    {
      title: "A Vase of Dry Grass Showcases Natural Texture Against",
      img: imgg1,
      date: "November 23, 2024",
      time: "12:07 am",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis"
    },
    {
      title: "A Vibrant Bouquet of White and Pink Carnations",
      img: imgg2,
      date: "November 22, 2024",
      time: "10:42 pm",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis"
    },
    {
      title: "A Rustic Vase Filled With Dried Flowers and Grass",
      img: imgg3,
      date: "November 22, 2024",
      time: "10:33 pm",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis"
    },
    {
      title: "A Table Showcases a Vibrant Vase of Flowers",
      img: imgg4,
      date: "November 21, 2024",
      time: "12:07 am",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis"
    },
    {
      title: "A Vase of Pink Roses Glistening With Water Droplets",
      img: imgg5,
      date: "November 20, 2024",
      time: "10:42 pm",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis"
    },
    {
      title: "A Delightful Mix of White and Pink Carnations",
      img: imgg6,
      date: "November 24, 2024",
      time: "10:33 pm",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis"
    }
  ];
  return (
    <>
      <div className={styles.main}>
        <div className={styles.main1}>
          <h1>Our Blog</h1>
        </div>

        <div className={styles.main2}>
          <img
            src={img1}
            alt=""
            className={styles.pImage}
            style={{ transform: `translateY(${offsetY * -0.25}px)` }}
          />

          <img
            src={img2}
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
            src={img3}
            alt=""
            className={styles.pImage}
            style={{ transform: `translateY(${offsetY * -0.2}px)` }}
          />
        </div>
      </div>

      <div className={styles.blogwrapper}>
        <div className={styles.blogcontainer}>
          {blogData.map((item, index) => (
            <div
              className={styles.blogcard}
              key={index}
              onClick={() => navigate(`/blog/${index}`)}
            >
              <h2 className={styles.blogtitle}>{item.title}</h2>

              <img src={item.img} alt="" className={styles.blogimg} />

              <div className={styles.blogmeta}>
                <span><SlCalender /> {item.date}</span>
                <span><BsClock /> {item.time}</span>
              </div>

              <p className={styles.blogdesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  )
}
export default Blog;
