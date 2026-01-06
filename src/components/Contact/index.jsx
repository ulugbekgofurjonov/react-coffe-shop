import React from "react";
import './style.css'

const Contact = () => {
  return (
    <div className="contact container">
      <div className="left">
        <img src="./images/logo.png" alt="" />
        <p>
          We made it our mission to create community everyday and grow
          meaningful, lasting relationships with our staff, our suppliers and of
          course you, our customers.
        </p>
      </div>
      <div className="right">
        <h3>Contact Alowishus!</h3>
        <div className="item">
            <a href=""><img src="./images/email.png" alt="" /></a>
            <h6>alowishus@gmai.com</h6>
        </div>
        <div className="item">
            <a href=""><img src="./images/call.png" alt="" /></a>
            <h6>+110 214 214 2451</h6>
        </div>
        <div className="icons">
            <a href=""><img src="./images/facebook.png" alt="" /></a>
            <a href=""><img src="./images/instagram.png" alt="" /></a>
            <a href=""><img src="./images/twitter.png" alt="" /></a>
            <a href=""><img src="./images/linkedin.png" alt="" /></a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
