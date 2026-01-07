import React from 'react'
import './style.css'

const Footer = () => {
  return (
    <div className='footer container'>
      <div className="left">
        <h3>Store Locations</h3>
        <p>Find your nearest Alowishus store with opening hours, location and contact details.</p>
      </div>
      <div className="right">
        <h3>First One’s On Us!</h3>
        <form action="">
            <input type="email" placeholder='E-mail' />
            <button>Subscribe</button>
        </form>
      </div>
    </div>
  )
}

export default Footer
