import React, { useState } from 'react'
import './Nav.css'
import icon from "../../assets/main_icon_sized.png"

function Nav() {
  const [activeNav, setActive] = useState("#");

  return (
    <nav>
      {/* Logo or icon */}
      <a href='#header'>
        <img src={icon} alt="Logo" />
      </a>
      <div id='links'>
        <a href="#" onClick={() => {setActive('#header')}} className={activeNav === '#header' ? 'active' : ''}>HOME</a>
        <a href="#" onClick={() => {setActive('#about')}} className={activeNav === '#about' ? 'active' : ''}>QURAN</a>
        <a href="#" onClick={() => {setActive('#listing')}} className={activeNav === '#listing' ? 'active' : ''}>QURAN AUDIO</a>
        <a href="#" onClick={() => {setActive('#blog')}} className={activeNav === '#blog' ? 'active' : ''}>BLOGS</a>
        <a href="#" onClick={() => {setActive('#footer')}} className={activeNav === '#footer' ? 'active' : ''}>ABOUT US</a>
      </div>

      <div id="sign__in">
        <a href="#" className='sign'>Sign in</a>
      </div>
    </nav>
  )
}

export default Nav