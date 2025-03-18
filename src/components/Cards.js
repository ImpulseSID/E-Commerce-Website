import React, { useState } from "react";
import "./cards.css";

export default function Cards({ visibleCards, onAddToCart, onAddToLiked }) {
  const [toast, setToast] = useState({ visible: false, message: '' });

  const handleAddToCart = (product, event) => {
    event.stopPropagation();
    onAddToCart(product);
    showToast(`${product.name} added to cart!`);
  };

  const handleAddToLiked = (product, event) => {
    event.stopPropagation();
    onAddToLiked(product);
    showToast(`${product.name} added to liked items!`);
  };

  const showToast = (message) => {
    setToast({ visible: true, message });
    setTimeout(() => setToast({ visible: false, message: '' }), 2000);
  };

  return (
    <>
      <div className="cards-container">
        {visibleCards.map((item, index) => (
          <div className="card" key={index}>
            {/* Discount Badge */}
            {item.discount > 0 && <span className="discount-badge">-{item.discount}%</span>}

            {/* Product Image & Icons */}
            <div className="card-image">
              <img src={item.image} alt={item.name} />
              <div className="icons">
                <i 
                  className="fa-regular fa-heart"
                  onClick={(e) => handleAddToLiked(item, e)}
                ></i>
                <i 
                  className="fa-solid fa-cart-shopping"
                  onClick={(e) => handleAddToCart(item, e)}
                ></i>
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

      {/* Toast Notification */}
      <div className={`toast ${toast.visible ? 'active' : ''}`}>
        {toast.message}
      </div>
    </>
  );
}
