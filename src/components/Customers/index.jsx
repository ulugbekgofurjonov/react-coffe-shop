import React from "react";

const Customers = () => {
  return (
    <div className="customers container">
      <div className="left">
        <div className="box">
          <img src="./images/person.png" alt="" />
          <div className="texts">
            <h4>Imam White</h4>
            <img src="./images/stars.png" alt="" />
          </div>
          <p className="leftP">
            “Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia”
          </p>
        </div>
      </div>
      <div className="right">
        <h3>What Our Customers Say</h3>
        <div className="item">
            <div className="left">
                <h5>4.9</h5>
            </div>
            <div className="right">
                <img src="./images/stars.png" alt="" />
                <span>based on 2452+ reviews</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
