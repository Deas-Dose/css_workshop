import React from 'react'
import './Header.css'
import quran from "../../assets/quran.svg"
import bg from "../../assets/bg.png"

function Header() {
  return (
    <>
    <section id="header">
      {/* <div id="bgimage" className='header'><img src={bg} /></div> */}
        <div className="container header__container">
          
          <div className="text">
            <h2>Read Quran Everyday.<br/>
            Add On Your Daily Routine</h2>
            <div className="text_small">
              <h5>the quran is the central relegious text of islam.Muslims believe the quran is the book of divine guidnace and direction for mankind</h5>
            </div>
            <div className="buttons">
            <a href="" className="btn">Read Quran</a>
            <a href="" className="btn btn-primary">Quran Audio</a>
          </div>
          </div>
          
          <div className="image">
            <img src={quran} />
          </div>

          
        </div>
    </section>
    </>
  )
}

export default Header