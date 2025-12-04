import React from 'react'
import styles from '../Styles/Blog.module.css';
import img1 from '../j-images/flr1';
import img2 from '../j-images/flr2';
import img3 from '../j-images/flr3';
import imgg1 from '../j-images/cont1';
import imgg2 from '../j-images/cont2';
import imgg3 from '../j-images/cont3';
import imgg4 from '../j-images/cont4';
import imgg5 from '../j-images/cont5';
import imgg6 from '../j-images/cont6';
import { BsClock } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { useNavigate } from 'react-router-dom';

function Blog() {

  const navigate = useNavigate();

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
      title: "A Vase of Dry Grass Showcases Natural Texture Against",
      img: imgg4,
      date: "November 23, 2024",
      time: "12:07 am",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis"
    },
    {
      title: "A Vibrant Bouquet of White and Pink Carnations",
      img: imgg5,
      date: "November 22, 2024",
      time: "10:42 pm",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis"
    },
    {
      title: "A Rustic Vase Filled With Dried Flowers and Grass",
      img: imgg6,
      date: "November 22, 2024",
      time: "10:33 pm",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis"
    }
  ];
  return (
    <>
      <div className={styles.mainblog}>
        <div className={styles.blogs}>
          <h1> Our Blog</h1>
        </div>
        <div className={styles.images3}>
          <img src={img1} alt='' className={styles.bottom} />
          <img src={img2} alt='' className={styles.imgi} />
          <img src={img3} alt='' className={styles.bottom} />
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
    </>
  )
}
export default Blog;
