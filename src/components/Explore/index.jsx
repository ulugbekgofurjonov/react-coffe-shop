import React from 'react'

const Explore = () => {
  return (
    <div className='explore container'>
      <h2>Explore Our Alowishus</h2>
      <p>A drink from the ‘My Alowishus’ bottled brews range OR grab one of our delicious coffee’s.</p>
      <div className="wrapper">
        <div className="box">
            <h3>Our Catering</h3>
            <p>Alowishus Catering, delicious drop off Catering</p>
            <img src="./images/explore1.png" alt="" />
        </div>
        <div className="box">
            <h3>The Food</h3>
            <p>Our entire menu is available as dine in or takeaway.g</p>
            <img src="./images/explore2.png" alt="" />
        </div>
        <div className="box">
            <h3>The Gelato</h3>
            <p>Life is like GELATO, enjoy it before it melts.</p>
            <img src="./images/explore3.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Explore
