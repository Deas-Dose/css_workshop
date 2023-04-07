import React from 'react'
import './About.css'
import ellipse from "../../assets/ellipse.svg"
import cressent from "../../assets/cressent.svg"

function About() {
  return (
    <section id="about">
        <div className="container about__container">
          <div className="about__quran">
            <img src={ellipse} alt="green bulb" className='ellipse' />
            <img src={cressent} alt="cressent" className='cressent' />
          </div>


          <div className="about__content">
            <h2>About The Quran</h2>
            <div className="text_small">
              <h5>Our website is dedicated to promoting a better understanding of the Holy Quran. We offer translations, commentary, and educational resources to help people of all backgrounds connect with this sacred text. Our goal is to create a welcoming and inclusive environment where everyone can feel supported in their learning journey.</h5>
            </div>
            <a href="" className="btn btn-primary bttn">Read Our Story</a>
          </div>


          
        </div>
    </section>
  )
}

export default About