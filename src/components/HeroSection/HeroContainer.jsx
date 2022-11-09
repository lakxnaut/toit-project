import React from "react";
import Header from "./Header";
import "./HeroContainer.css";
import HeroSection from "./HeroSection";

const HeroContainer = () => {
  return (
    <div className="HeroContainer">
      <Header />
      <HeroSection />
    </div>
  );
};

export default HeroContainer;
