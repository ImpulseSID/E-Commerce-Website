import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Phones from './components2/Phones';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ClearanceSale from './components/ClearanceSale';
import Categories from './components/Categories';
import Arrivals from './components/Arrivals';
import Footer from './components/Footer';
import Laptops from './components2/Laptops';
import Audio from './components2/Audio';
import Gaming from './components2/Gaming';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [likedItems, setLikedItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLikedOpen, setIsLikedOpen] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleSignup = () => {
    // For demo purposes, just show a success message
    alert('Account created successfully! Please login.');
  };

  const handleAddToCart = (product) => {
    if (!isAuthenticated) {
      alert('Please login to add items to cart');
      return;
    }
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const handleAddToLiked = (product) => {
    if (!isAuthenticated) {
      alert('Please login to add items to favorites');
      return;
    }
    setLikedItems(prevItems => {
      const isAlreadyLiked = prevItems.some(item => item.id === product.id);
      if (!isAlreadyLiked) {
        return [...prevItems, product];
      }
      return prevItems;
    });
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const handleRemoveFromLiked = (productId) => {
    setLikedItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.newPrice * item.quantity), 0).toFixed(2);
  };

  // Protected Route component
  const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={
            isAuthenticated ? <Navigate to="/" /> : <Login onLogin={handleLogin} />
          } />
          <Route path="/signup" element={
            isAuthenticated ? <Navigate to="/" /> : <Signup onSignup={handleSignup} />
          } />
          
          <Route path="/*" element={
            <ProtectedRoute>
              <div>
                <Navbar 
                  cartItems={cartItems} 
                  likedItems={likedItems}
                  onCartClick={() => setIsCartOpen(true)}
                  onLikedClick={() => setIsLikedOpen(true)}
                />
                <Routes>
                  <Route path="/" element={
                    <>
                      <HeroSection />
                      <ClearanceSale />
                      <Categories />
                      <Arrivals onAddToCart={handleAddToCart} onAddToLiked={handleAddToLiked} />
                    </>
                  } />
                  <Route path="/phones" element={<Phones onAddToCart={handleAddToCart} onAddToLiked={handleAddToLiked} />} />
                  <Route path="/laptops" element={<Laptops onAddToCart={handleAddToCart} onAddToLiked={handleAddToLiked} />} />
                  <Route path="/audio" element={<Audio onAddToCart={handleAddToCart} onAddToLiked={handleAddToLiked} />} />
                  <Route path="/gaming" element={<Gaming onAddToCart={handleAddToCart} onAddToLiked={handleAddToLiked} />} />
                </Routes>

                {/* Cart Overlay */}
                <div className={`cart-overlay ${isCartOpen ? 'active' : ''}`}>
                  <div className="cart-header">
                    <h2>Shopping Cart</h2>
                    <button className="cart-close" onClick={() => setIsCartOpen(false)}>×</button>
                  </div>
                  
                  <div className="cart-items">
                    {cartItems.length === 0 ? (
                      <p>Your cart is empty</p>
                    ) : (
                      cartItems.map((item) => (
                        <div key={item.id} className="cart-item">
                          <img src={item.image} alt={item.name} />
                          <div className="cart-item-details">
                            <h3 className="cart-item-title">{item.name}</h3>
                            <p className="cart-item-price">
                              ${item.newPrice} × {item.quantity}
                            </p>
                          </div>
                          <button 
                            className="remove-item"
                            onClick={() => handleRemoveFromCart(item.id)}
                          >
                            ×
                          </button>
                        </div>
                      ))
                    )}
                  </div>

                  {cartItems.length > 0 && (
                    <div className="cart-total">
                      <h3>Total: ${calculateTotal()}</h3>
                      <button className="checkout-button">Checkout</button>
                    </div>
                  )}
                </div>

                {/* Liked Items Overlay */}
                <div className={`liked-overlay ${isLikedOpen ? 'active' : ''}`}>
                  <div className="liked-header">
                    <h2>Liked Items</h2>
                    <button className="liked-close" onClick={() => setIsLikedOpen(false)}>×</button>
                  </div>
                  
                  <div className="liked-items">
                    {likedItems.length === 0 ? (
                      <p>No liked items yet</p>
                    ) : (
                      likedItems.map((item) => (
                        <div key={item.id} className="liked-item">
                          <img src={item.image} alt={item.name} />
                          <div className="liked-item-details">
                            <h3 className="liked-item-title">{item.name}</h3>
                            <p className="liked-item-price">${item.newPrice}</p>
                          </div>
                          <button 
                            className="remove-item"
                            onClick={() => handleRemoveFromLiked(item.id)}
                          >
                            ×
                          </button>
                        </div>
                      ))
                    )}
                  </div>
                </div>

                <Footer />
              </div>
            </ProtectedRoute>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
