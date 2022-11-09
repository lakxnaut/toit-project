import React from "react";
import SingleImage from "./SingleImage";
import "./ThreeImageSection.css";
import bg1 from "../../assets/bars.png";
import bg2 from "../../assets/beers.png";
import bg3 from "../../assets/brew.png";

const threeImageSection = () => {
  return (
    <div className="threeImageSection">
      <SingleImage bg={bg1} whiteText="BA" blackText="RS" />
      <SingleImage bg={bg2} whiteText="BE" blackText="ERS" />
      <SingleImage bg={bg3} whiteText="BREW" blackText="ERY" />
    </div>
  );
};

export default threeImageSection;
