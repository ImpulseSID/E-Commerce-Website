import React from "react";
import iphone16 from '../images/iphone16.webp';
import s25ultra from '../images/s25ultra.jpg';
import pixel6 from '../images/pixel6.jpg';
import fold from '../images/fold.jpg';
import oneplus13 from '../images/oneplus13.webp';

const CARD_DATA = [
  {
    image: iphone16,
    name: "Apple iPhone 16",
    newPrice: "$559",
    oldPrice: "$599",
    discount: 10,
    rating: 4,
    reviews: 120,
  },
  {
    image: s25ultra, 
    name: "Samsung Galaxy S25 Ultra",
    newPrice: "$960",
    oldPrice: "$1600", 
    discount: 5, 
    rating: 5, 
    reviews: 250,
  },
  {
    image: pixel6, 
    name: "Google Pixel 6",
    newPrice: "$699",
    oldPrice: "$749", 
    discount: 7, 
    rating: 4, 
    reviews: 150,
  },
  {
    image: oneplus13, 
    name: "OnePlus 13",
    newPrice: "$630",
    oldPrice: "$749", 
    discount: 10, 
    rating: 5, 
    reviews: 150,
  },
  {
    image: fold, 
    name: "Samsung Galaxy Fold",
    newPrice: "$1710",
    oldPrice: "$1900", 
    discount: 10, 
    rating: 5, 
    reviews: 150,
  }
];

export default function Phones() {
  return (
    <div>
      <div className="Featured">
            <div className="featuredcolor"></div> 
            <div>
                <p className="featured">Phones</p>
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
