import React from "react";
import razormouse from '../images/razormouse.jpg';
import monitor from '../images/monitor.jpg';
import PS5FeaturedImage from '../images/PS5FeaturedImage.jpg';

const CARD_DATA = [
  {
    image: razormouse,
    name: "Razer Basilisk V3",
    newPrice: "$30",
    oldPrice: "$40.99",
    discount: 25,
    rating: 5,
    reviews: 200,
  },
  {
    image: monitor , 
    name: "Redmagic 4k Monitor",
    newPrice: "$350",
    oldPrice: "$700", 
    discount: 20, 
    rating: 5, 
    reviews: 180,
  },
  {
    image: PS5FeaturedImage, 
    name: "PS5",
    newPrice: "$1125",
    oldPrice: "$1250", 
    discount: 10, 
    rating: 5, 
    reviews: 150,
  },
];

export default function Gaming() {
  return (
    <div>
      <div className="Featured">
            <div className="featuredcolor"></div> 
            <div>
                <p className="featured">Gaming</p>
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
