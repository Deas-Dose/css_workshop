import React from 'react'
import {FiSearch} from "react-icons/fi"
import './Listing.css'

function Listing() {
  return (
    <section id="listing">
        <div className="container listing__container">
          <h2 style={{textAlign: 'center'}}>Ready Holy Quran With Translation And Tafsir Of Every Ayat</h2>
          

          <div className="search__box">
            <input type={Text} placeholder='search "al-fatihah"'/>
            <FiSearch />
          </div>

        </div>
    </section>
  )
}

export default Listing