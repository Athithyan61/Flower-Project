import React from 'react'
import styles from '../Styles/Blog.module.css';
import img1 from '../j-images/flr1';
import img2 from '../j-images/flr2';
import img3 from '../j-images/flr3';



function Blog() {
  return (
    <>
      <div className={styles.mainblog}>
        <div className={styles.blogs}>
          <h1> Our Blog</h1>
        </div>
        <div className={styles.images3}>
          <img src={img1} alt='' />
          <img src={img2} alt='' className={styles.imgi} />
          <img src={img3} alt='' />
        </div>
      </div>

      <div className={styles.content}>
         
      </div>
    </>
  )
}
export default Blog;
