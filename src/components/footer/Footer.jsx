import React from 'react'
import './Footer.css'
import icon from "../../assets/main_icon_sized.png"
import email from "../../assets/email.svg"
import fb from "../../assets/fb.svg"
import ig from "../../assets/ig.svg"

function Footer() {
  return (
    <section id="footer">
        <div className="container footer__container">
          <div className="left-column">
            <div className="thnx">
              <h5>Thank you for visiting our website. We hope you have found the information you were looking for and that it has been helpful to you. If you have any questions or feedback, please do not hesitate to contact us. Don't forget to follow us on social media to stay up-to-date with our latest news and updates. Thank you for your support!</h5>
            </div>

            <div className="contact__info">
              <h3>Contact Info:</h3>

              <img src={icon} className='icon' alt="" />
              <img src={email} className='email' alt="" />
              <img src={fb} className='fb' alt="" />
              <img src={ig} className='ig' alt="" />
            </div>
          </div>

          <div className="contact__form right-column">
            <input type="text" name='name' placeholder='Your Full Name' required/>
            <input type="email" name='email' placeholder='Your Email' required/>
            <textarea name="message" rows="7" placeholder='Anything to add' required></textarea>
            <button type='submit' className='btn'>Send Message</button>
          </div>
        </div>
    </section>
  )
}

export default Footer