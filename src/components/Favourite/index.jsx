import React from "react";
import "./style.css";

const Favourite = () => {
  return (
    <div className="favourite container">
      <div className="left">
        <img src="./images/favouritebg.png" alt="" />
      </div>
      <div className="right">
        <h2>Order Your <br /> Favourite Coffee</h2>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <a>Order Now</a>
      </div>
    </div>
  );
};

export default Favourite;
