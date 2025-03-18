import React from 'react';
import { Link } from 'react-router-dom';
import "./arrival.css";
import PS5FeaturedImage from '../images/PS5FeaturedImage.jpg';
import appleHeadphones from '../images/appleHeadphones.jpg';
import macbook from "../images/macbook.jpg";
import iphone16 from '../images/iphone16.webp';
import monitor from '../images/monitor.jpg';

export default function Arrivals() {
  return (
    <div>
        <div className="Featured">
            <div className="featuredcolor"></div> 
            <div>
                <p className="featured">Featured</p>
            </div>
        </div>
        <div className="arrivals">
            <h3>NEW ARRIVALS</h3>
        </div>

        <div className="NewArrivals">
            {/* PlayStation 5 Section */}
            <div className="ps5">
                {/* Image Container */}
                <div className="ps5image">
                    <img className="PS5image" src={PS5FeaturedImage} alt="PlayStation 5" />
                </div>

                {/* Text Overlay */}
                <div className="ps5-overlay">
                    <h2>PlayStation 5</h2>
                    <p>Black and White version of the PS5 coming out on sale.</p>
                    <Link className="shopnow" to="/Gaming">Shop Now</Link> {/* Link to Gaming page */}
                </div>
            </div>

            <div className="bigcolumn" style={{display:'flex', flexDirection:'column'}}>

                {/* Apple Headphones Section */}
                <div className="speakers">
                    <div className="speakerimage">
                        <img className="Speakerimage" src={appleHeadphones} alt="Apple AirPods Pro" />
                        <div className="speaker-overlay">
                            <h2>Headphones</h2>
                            <p>Apple AirPods Pro</p>
                            <Link className="shopnow2" to="/Audio">Shop Now</Link> {/* Placeholder Link */}
                        </div>
                    </div>
                </div>

                <div className="smallrow" style={{display:'flex', flexDirection:'row'}}>
                    {/* MacBook Section */}
                    <div className="laptop">
                        <div className="laptopimage">
                            <img className="Laptopimage" src={macbook} alt="Apple MacBook Pro" />
                            <div className="laptop-overlay">
                                <h2>Laptops</h2>
                                <p>Apple MacBook Pro</p>
                                <Link className="shopnow2" to="/Laptops">Shop Now</Link> {/* Link to Laptops */}
                            </div>
                        </div>
                    </div>

                    {/* iPhone Section */}
                    <div className="laptop">
                        <div className="laptopimage">
                            <img className="Laptopimage" src={iphone16} alt="Apple iPhone 16" />
                            <div className="laptop-overlay">
                                <h2>Phones</h2>
                                <p>Apple iPhone 16</p>
                                <Link className="shopnow2" to="/Phones">Shop Now</Link> {/* Link to Phones */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Redmagic Gaming Monitor Section */}
            <div className="ps5">
                {/* Image Container */}
                <div className="ps5image">
                    <img className="PS5image" src={monitor} alt="Redmagic Gaming Monitor" />
                </div>

                {/* Text Overlay */}
                <div className="ps5-overlay">
                    <h2>Redmagic Gaming Monitor</h2>
                    <p>The all-new Redmagic Gaming Monitor out on sale.</p>
                    <Link className="shopnow" to="/Gaming">Shop Now</Link> {/* Link to Gaming page */}
                </div>
            </div>
        </div>
    </div>
  );
}
