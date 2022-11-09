import React from "react";
import "./HeroSection.css";
import { CgArrowLongDown } from "react-icons/cg";

const HeroSection = () => {
  return (
    <div className="HeroSection">
      <div>
        <div className="toit">
          <h1>TOIT</h1>
        </div>
        <div className="beer border">
          <h1>BEER</h1>
        </div>
        <div className="beer wave">
          <h1>BEER</h1>
        </div>
      </div>
      <div className="arrow">
        <CgArrowLongDown style={{ fontSize: "30px" }} />
      </div>
      <div className="scroll-down">SCROLL DOWN</div>
    </div>
  );
};

export default HeroSection;
