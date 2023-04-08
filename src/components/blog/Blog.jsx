import React from 'react'
import './Blog.css'
import guy1 from "../../assets/photo1.svg"
import guy2 from "../../assets/photo2.svg"
import guy3 from "../../assets/photo3.svg"

function Blog() {
  return (
    <section id="blog">
        <div className="container blog__container">
          <h2>Don't know how to Recite? <br /> Learn from our blogs </h2>

          <div className="blogs">
            <div className="showcase">
              <img src={guy1} alt="" />
              <h3>Blog Title</h3>
              <h5>Our website is dedicated to promoting  yfyfyffufufufa better understanding of the Holy Quran. </h5>
            </div>
            <div className="showcase">
              <img src={guy2} alt="" />
              <h3>Blog Title</h3>
              <h5>Our website is dedicated to promoting  yfyfyffufufufa better understanding of the Holy Quran. </h5>
            </div>
            <div className="showcase">
              <img src={guy3} alt="" />
              <h3>Blog Title</h3>
              <h5>Our website is dedicated to promoting  yfyfyffufufufa better understanding of the Holy Quran. </h5>
            </div>
          </div>

          <a className="btn">Read All Blogs</a>
        </div>
    </section>
  )
}

export default Blog