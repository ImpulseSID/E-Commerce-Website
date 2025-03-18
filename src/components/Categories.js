import React from "react";
import "./categories.css";
import "./Clearancesale.css";
import s25ultra from "../images/s25ultra.jpg";
import appleHeadphones from "../images/appleHeadphones.jpg";
import PS5FeaturedImage from "../images/PS5FeaturedImage.jpg";
import asus from "../images/asus.webp";
import macbook from "../images/macbook.jpg";
export default function Categories() {
  return (

    <div>

        <div className="sale-header heading">
                <div className="colordisplay"></div>
                <p className="today-sale">Categories</p>
            </div>

    <div className="categories-container">
      {/* Mobile Category */}
      <div className="category">
        <img src={s25ultra} alt="Phone" className="category-image" />
        <p>Mobiles</p>
      </div>

      {/* Audio Category */}
      <div className="category">
        <img src={appleHeadphones} alt="Audio" className="category-image" />
        <p>Audio</p>
      </div>

      {/* Gaming Category */}
      <div className="category">
        <img src={PS5FeaturedImage} alt="Gaming" className="category-image" />
        <p>Gaming</p>
      </div>

      {/* Laptop Category */}
      <div className="category">
        <img src={asus} alt="Laptop" className="category-image" />
        <p>Laptop</p>
      </div>
    </div>

    <div className="Speaker">
    <img  className=" Speakers" src={macbook} alt="Apple Headphones" />
    
    </div>

    </div>
  );
}
