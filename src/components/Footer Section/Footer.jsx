import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="top">TOP</div>
      <div className="footer-menu">
        <a href="#">
          <p>About</p>
        </a>
        <a href="#">
          <p>Beers</p>
        </a>
        <a href="#">
          <p>Food</p>
        </a>
        <a href="#">
          <p>Shop</p>
        </a>
        <a href="#">
          <p>Contact</p>
        </a>
      </div>
    </div>
  );
};

export default Footer;
