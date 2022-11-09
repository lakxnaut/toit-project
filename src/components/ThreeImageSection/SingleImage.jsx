import React from "react";

import "./SingleImage.css";

const SingleImage = ({ bg, whiteText, blackText }) => {
  console.log(bg);
  return (
    <div className="SingleImage" style={{ backgroundImage: "url(" + bg + ")" }}>
      <div className="TitleContainer">
        <h1 className="whiteText">{whiteText}</h1>
        <h1 className="blackText">{blackText}</h1>
      </div>
      <div className="lorem">Lorem Ipsum Dollor Dummy Text should be here</div>
    </div>
  );
};

export default SingleImage;
