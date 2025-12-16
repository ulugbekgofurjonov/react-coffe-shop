import React from 'react'
import './style.css'
const Header = () => {
  return (
    <div className='header'>
      <img src="./images/logo.png" alt="" />
      <ul>
        <li><a href="">Cafe Munu</a></li>
        <li><a href="">About Us</a></li>
        <li><a href="">Find Us</a></li>
        <li><a href="">Alowishus Catering</a></li>
      </ul>
      <div className="gift">
        <a className='savatlogo' href=""><img src="./images/savat.png" alt="" /></a>
        <a href="">Buy gift vouchers</a>
      </div>
    </div>
  )
}

export default Header
