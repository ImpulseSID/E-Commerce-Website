import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar({ cartItems = [], likedItems = [], onCartClick, onLikedClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      {/* Sale Banner */}
      <nav className="navbar1" style={{ backgroundColor: 'black', height: '5vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="sale-text" style={{ color: 'white', fontSize: '0.9rem', fontWeight: 'bold' }}>Exclusive Winter Sale - Upto 50% OFF!!</div>
      </nav>

      {/* Main Navbar */}
      <nav className="navbar2" style={{ borderBottom: '0.05rem gray solid',position: 'relative', display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '0 2vw', height: '10vh' }}>
        
        {/* Brand Name (Left Side) */}
        <div className="brand container-fluid">
          <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>BudgetBytes</span>
        </div>

        {/* Mobile Menu Button */}
        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <i className="fas fa-bars"></i>
        </button>

        {/* Navigation Links (Perfectly Centered) */}
        <div className={`links ${isMenuOpen ? 'active' : ''}`} style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
          <ul style={{ fontFamily:'',display: 'flex', listStyle: 'none', gap: '3vw', fontSize: '1rem', fontWeight: '500', padding: '0', margin: '0' }}>
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
            <li>SignUp</li>
          </ul>
        </div>

        {/* Search & Icons (Right Side) */}
        <div className="search-area" style={{ display: 'flex', alignItems: 'center', gap: '2vh', marginLeft: 'auto' }}>
          <div className="search-box Placeholder" style={{ display: 'flex', alignItems: 'center', border: '1px solid gray', borderRadius: '15px', padding: '0.5vh ' }}>
            <input type="text" placeholder="What are you looking for?" style={{ border: 'none', outline: 'none' }} />
            <i className="fa-solid fa-magnifying-glass" style={{ marginLeft: '5px' }}></i>
          </div>
          <div className="nav-icons">
            <div className="liked-icon" onClick={onLikedClick}>
              <i className="fa-regular fa-heart"></i>
              {likedItems.length > 0 && (
                <span className="liked-count">{likedItems.length}</span>
              )}
            </div>
            <div className="cart-icon" onClick={onCartClick}>
              <i className="fa-solid fa-cart-shopping"></i>
              {cartItems.length > 0 && (
                <span className="cart-count">{cartItems.length}</span>
              )}
            </div>
          </div>
        </div>

      </nav>
    </div>
  );
}
