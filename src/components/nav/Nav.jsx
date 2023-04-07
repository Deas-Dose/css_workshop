import React, { useState } from 'react'
import './Nav.css'
import icon from "../../assets/main_icon.svg"

function Nav() {
  const [activeNav, setActive] = useState("#");

  return (
    <nav>
      {/* Logo or icon */}
      <a href='#header' onClick={() => {setActive('#')}} className={activeNav === '#' ? 'active' : ''}>
        <img src={icon} alt="Logo" />
      </a>

      <a href="#header" className={activeNav === '#header' ? 'active' : ''}>HOME</a>
      <a href="#about">QURAN</a>
      <a href="#listing">QURAN AUDIO</a>
      <a href="#blog">BLOGS</a>
      <a href="#footer">ABOUT US</a>


      <a href="">Sign in</a>
    </nav>
  )
}

export default Nav