import React from "react";
import asus from '../images/asus.webp';
import macbook from '../images/macbook.jpg';

import omen from '../images/omen.jpg';


const CARD_DATA = [
  {
    image: asus,
    name: "ASUS Zephyrus Duo 16 Laptop",
    newPrice: "$2800",
    oldPrice: "$3500",
    discount: 20,
    rating: 5,
    reviews: 120,
  },
  {
    image: macbook , 
    name: "Apple MacBook Pro",
    newPrice: "$975",
    oldPrice: "$1299", 
    discount: 25, 
    rating: 5, 
    reviews: 250,
  },
  {
    image: omen, 
    name: "HP Omen Gaming Laptop",
    newPrice: "$1125",
    oldPrice: "$1250", 
    discount: 10, 
    rating: 5, 
    reviews: 150,
  },
  
];

export default function Phones() {
  return (
    <div>
      <div className="Featured">
            <div className="featuredcolor"></div> 
            <div>
                <p className="featured">Laptops</p>
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
