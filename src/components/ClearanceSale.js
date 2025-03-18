import React, { useState } from "react";
import "./Clearancesale.css";
import Cards from "./Cards";
import appleHeadphones from '../images/appleHeadphones.jpg';
import s25ultra from '../images/s25ultra.jpg';
import razormouse from '../images/razormouse.jpg';
import iphone16 from '../images/iphone16.webp';
import marshall from '../images/marshall.png';
import macbook from '../images/macbook.jpg';
import asus from '../images/asus.webp';
import monitor from '../images/monitor.jpg';
// Sample Products Data
const products = [
  {  image: s25ultra,name: "Samsung S25 Ultra", newPrice: 960, oldPrice: 1600, discount: 40, rating: 5, reviews: 88 },
  {  image: appleHeadphones, name: "AirPods Max", newPrice: 440, oldPrice: 550, discount: 20, rating: 4, reviews: 120 },
  {  image: razormouse,name: "Razer Basilisk V3", newPrice: 30, oldPrice: 40.99, discount: 25, rating: 5, reviews: 200 },
  {  image: iphone16,name: "Apple Iphone 16", newPrice: 559, oldPrice: 799, discount: 30, rating: 4, reviews: 150 },
  {  image: marshall,name: "Marshall Bluetooth Speaker", newPrice: 70, oldPrice: 90, discount: 22, rating: 4, reviews: 60 },
  {  image: macbook,name: "MacBook Pro", newPrice: 975, oldPrice: 1299, discount: 25, rating: 5, reviews: 250 },
  {  image: asus,name: "ASUS Zephyrus Duo 16 Laptop", newPrice: 2800, oldPrice: 3500, discount: 20, rating: 5, reviews: 300 },
  {  image: monitor,name: "Redmagic 4k Monitor", newPrice: 350, oldPrice: 700, discount: 20, rating: 5, reviews: 180 },
];

export default function ClearanceSale() {
  const [startIndex, setStartIndex] = useState(0);
  const cardsPerPage = 4;

  // Function to get the visible cards
  const visibleCards = products.slice(startIndex, startIndex + cardsPerPage);

  // Function to go to the next set of cards
  const nextSlide = () => {
    if (startIndex + cardsPerPage < products.length) {
      setStartIndex(startIndex + cardsPerPage);
    }
  };

  // Function to go to the previous set of cards
  const prevSlide = () => {
    if (startIndex - cardsPerPage >= 0) {
      setStartIndex(startIndex - cardsPerPage);
    }
  };

  return (
    <div className="sale-container">
      {/* Sale Header */}
      <div className="sale-header">
        <div className="colordisplay"></div>
        <p className="today-sale">Today's</p>
        
      </div>

      {/* Time Zone */}
      <div className="timezone">
        <h2>Flash Sales</h2>
        <div className="timeinfo">
          <div className="timeLeft">
            <p>Days</p>
            <h3>03</h3>
          </div>
          <div className="timeLeft">
            <p>Hours</p>
            <h3>05</h3>
          </div>
          <div className="timeLeft">
            <p>Minutes</p>
            <h3>26</h3>
          </div>
          <div className="timeLeft">
            <p>Seconds</p>
            <h3>17</h3>
          </div>
        </div>
      

      {/* Arrows for Sliding */}
      <div className="arrows">
        <i className="fa-solid fa-arrow-left" onClick={prevSlide} style={{ marginRight: "2vw", cursor: "pointer" }}></i>
        <i className="fa-solid fa-arrow-right" onClick={nextSlide} style={{ cursor: "pointer" }}></i>
      </div>
      </div>
      {/* Display Only 4 Cards at a Time */}
      <Cards visibleCards={visibleCards} />
    </div>
  );
}
