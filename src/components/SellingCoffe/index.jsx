import React from "react";
import "./style.css";

const SellingCoffe = () => {
  return (
    <div className="selling container">
      <h2>Best Selling Coffee</h2>
      <p className="topP">
        A drink from the ‘My Alowishus’ bottled brews range OR grab one of our
        delicious coffee’s.
      </p>

      <div className="wrap">
        <div className="box">
          <div className="top">
            <img src="./images/2.png" alt="" />
            <div className="texts">
              <span>#1 Selling</span>
              <h4>Double Espresso</h4>
            </div>
          </div>
          <p>
            Amet minim mollit non deserunt dolor ullamco est sit aliqua dolor do
            amet sint. Velit officia consequat duis.
          </p>
          <div className="bottom">
            <h5>$59.99</h5>
            <a href="">Order now</a>
          </div>
        </div>
        <div className="box">
          <div className="top">
            <img src="./images/3.png" alt="" />
            <div className="texts">
              <span>#2 Selling</span>
              <h4>Caramel Frappe</h4>
            </div>
          </div>
          <p>
            Amet minim mollit non deserunt dolor ullamco est sit aliqua dolor do
            amet sint. Velit officia consequat duis.
          </p>
          <div className="bottom">
            <h5>$59.99</h5>
            <a href="">Order now</a>
          </div>
        </div>
        <div className="box">
          <div className="top">
            <img src="./images/1.png" alt="" />
            <div className="texts">
              <span>#3 Selling</span>
              <h4>Iced Coffee</h4>
            </div>
          </div>
          <p>
            Amet minim mollit non deserunt dolor ullamco est sit aliqua dolor do
            amet sint. Velit officia consequat duis.
          </p>
          <div className="bottom">
            <h5>$59.99</h5>
            <a href="">Order now</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellingCoffe;
