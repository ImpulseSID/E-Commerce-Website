import React from "react";
import "./categories.css";
import "./Clearancesale.css";
import phone from "../images/phone.png";
import audio from "../images/audio.png";
import gaming from "../images/gaming.png";
import laptop from "../images/laptop.png";
import Bspeaker from "../images/Bspeaker.png";
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
        <img src={phone} alt="Phone" className="category-image" />
        <p>Mobiles</p>
      </div>

      {/* Audio Category */}
      <div className="category">
        <img src={audio} alt="Audio" className="category-image" />
        <p>Audio</p>
      </div>

      {/* Gaming Category */}
      <div className="category">
        <img src={gaming} alt="Gaming" className="category-image" />
        <p>Gaming</p>
      </div>

      {/* Laptop Category */}
      <div className="category">
        <img src={laptop} alt="Laptop" className="category-image" />
        <p>Laptop</p>
      </div>
    </div>

    <div className="Speaker">
    <img  className=" Speakers" src={Bspeaker} alt="Apple Headphones" />
    </div>

    </div>
  );
}
