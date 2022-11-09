import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import "./ShopSection.css";
import pic1 from "../../../assets/pic1.png";
import pic2 from "../../../assets/pic2.png";
import pic3 from "../../../assets/pic3.png";
import pic4 from "../../../assets/pic4.png";

const ShopSection = () => {
  return (
    <div className="ShopSection">
      <div className="ShopSection-container">
        <div className="PurchaseContainer">
          <div>
            <h1>
              WANT TO PURCHASE <br />
              OUR MERCHANDISE
            </h1>
          </div>
          <div>
            <p>
              There are many variations of passages of Lorem Ipsum <br />{" "}
              available, but the majority have suffered alteration in <br />{" "}
              some form, by injected humour, or randomised words <br /> which
              don't look even slightly believable.
            </p>
          </div>
          <div className="shopbtnContainer">
            <button>
              SHOP NOW <HiArrowLongRight />
            </button>
          </div>
        </div>
      </div>
      <div className="shop-images-container">
        <img src={pic1} alt="" />
        <img src={pic2} alt="" />
        <img src={pic3} alt="" />
        <img src={pic4} alt="" />
      </div>
    </div>
  );
};

export default ShopSection;
