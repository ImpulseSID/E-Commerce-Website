import React from "react";
import appleHeadphones from '../images/appleHeadphones.jpg';
import marshall from '../images/marshall.png';
import bose from '../images/bose.jpeg';

const CARD_DATA = [
  {
    image: appleHeadphones ,
    name: "AirPods Max",
    newPrice: "$440",
    oldPrice: "$550",
    discount: 20,
    rating: 5,
    reviews: 120,
  },
  {
    image: marshall , 
    name: "Marshall Bluetooth Speaker",
    newPrice: "$70",
    oldPrice: "$90", 
    discount: 22, 
    rating: 4, 
    reviews: 60,
  },
  {
    image: bose, 
    name: "Bose Bluetooth speaker",
    newPrice: "$1125",
    oldPrice: "$1250", 
    discount: 10, 
    rating: 5, 
    reviews: 150,
  },
];

export default function Audio() {
  return (
    <div>
      <div className="Featured">
        <div className="featuredcolor"></div> 
        <div>
          <p className="featured">Audio Products</p>
        </div>
      </div>
      <div className="cards-container">
        {CARD_DATA.map((item, index) => (
          <div className="card" key={index}>
            {/* Discount Badge */}
            {item.discount > 0 && <span className="discount-badge">-{item.discount}%</span>}

            {/* Product Image & Icons */}
            <div className="card-image">
              <img src={item.image} alt={item.name} />
              <div className="icons">
                <i className="fa-regular fa-heart"></i>
                <i className="fa-solid fa-cart-shopping"></i>
              </div>
            </div>

            {/* Product Details */}
            <div className="card-details">
              <h3 className="product-name">{item.name}</h3>
              <div className="price">
                <span className="new-price">{item.newPrice}</span>
                <span className="old-price">{item.oldPrice}</span>
              </div>
              <div className="rating">
                {"⭐".repeat(item.rating)} <span>({item.reviews})</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
