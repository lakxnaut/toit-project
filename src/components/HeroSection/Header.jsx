import React from "react";
import menu from "../../assets/Frame 1.png";
import logo from "../../assets/toit-logo 1.png";
import "./Header.css";
import { IoPaperPlane } from "react-icons/io5";

const Header = () => {
  return (
    <div className="header">
      <div className="header-menu">
        <div>
          <img src={menu} alt="" />
        </div>
        <h3>MENU</h3>
      </div>
      <div className="header-logo">
        <img src={logo} alt="" />
      </div>
      <div className="header-menuButtons">
        <p>KUDIX</p>
        <p>RESERVATION</p>
        <p>BREWERY TOUR</p>
        <span className="header-find-beer">
          FIND MY BEER
          <IoPaperPlane />
        </span>
      </div>
    </div>
  );
};

export default Header;
