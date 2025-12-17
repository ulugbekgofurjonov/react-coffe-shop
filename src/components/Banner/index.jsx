import React from "react";
import './style.css'

const Banner = () => {
  return (
    <div className="banner">
      <div className="left">
        <h1>
          Alowishus <br />
          Delicious <br />
          Coffee{" "}
        </h1>
        <p>A drink from the ‘My Alowishus’ bottled brews range OR grab one of our delicious coffee’s.</p>
        <div className="links">
            <a className="applink" href="">Download App</a>
            <a href="">Shop Coffee</a>
        </div>
      </div>
      <div className="right">
        <img src="./images/bg1.png" alt="" />
      </div>
    </div>
  );
};

export default Banner;
