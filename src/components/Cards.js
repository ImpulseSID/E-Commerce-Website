import React from "react";
import "./cards.css";

export default function Cards({ visibleCards }) {
  return (
    <div className="cards-container">
      {visibleCards.map((item, index) => (
        <div className="card" key={index}>
          {/* Discount Badge */}
          {item.discount > 0 && <span className="discount-badge">-{item.discount}%</span>}

          {/* Product Image & Icons */}
          <div className="card-image">
            <img src={item.image} alt={item.name} />
            <div className="icons">
              <i className="fa-regular fa-heart"></i>
              <i className="fa-solid fa-eye"></i>
            </div>
          </div>

          {/* Product Details */}
          <div className="card-details">
            <h3 className="product-name">{item.name}</h3>
            <div className="price">
              <span className="new-price">${item.newPrice}</span>
              <span className="old-price">${item.oldPrice}</span>
            </div>
            <div className="rating">
              {"⭐".repeat(item.rating)} <span>({item.reviews})</span>
            </div>
          </div>
        </div>
      ))}
    </div>
    

  );
}
