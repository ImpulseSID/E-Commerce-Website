import React from 'react'
import "./arrival.css";
import PS5FeaturedImage from '../images/PS5FeaturedImage.jpg';
import appleHeadphones from '../images/appleHeadphones.jpg';
import macbook from "../images/macbook.jpg";
import iphone16 from '../images/iphone16.webp';
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
                <div className="ps5">
                    {/* Image Container */}
                    <div className="ps5image">
                    <img className="PS5image" src={PS5FeaturedImage} alt="PS5" />
                    </div>

                    {/* Text Overlay */}
                    <div className="ps5-overlay">
                    <h2>PlayStation 5</h2>
                    <p>Black and White version of the PS5 coming out on sale.</p>
                    <p className="shopnow">Shop Now</p>
                    </div>
                </div>

                <div className="bigcolumn" style={{display:'flex',flexDirection:'column'}}>
                        <div className="speakers">
                            <div className="speakerimage">
                                <img className="Speakerimage" src={appleHeadphones} alt="Headphones" />
                                <div className="speaker-overlay">
                                <h2>Headphones</h2>
                                <p>Apple AirPods Pro</p>
                                <p className="shopnow2">Shop Now</p>
                                </div>
                            </div>
                        </div>

                        <div className="smallrow" style={{display:'flex',flexDirection:'row'}}>
                        <div className="laptop">
                            <div className="laptopimage">
                                <img className="Laptopimage" src={macbook} alt="Headphones" />
                                <div className="laptop-overlay">
                                <h2>Laptops</h2>
                                <p>Apple MacBook Pro</p>
                                <p className="shopnow2">Shop Now</p>
                                </div>
                            </div>
                        </div>

                        <div className="laptop">
                            <div className="laptopimage">
                                <img className="Laptopimage" src={iphone16} alt="Headphones" />
                                <div className="laptop-overlay">
                                <h2>Phones</h2>
                                <p>Apple 16</p>
                                <p className="shopnow2">Shop Now</p>
                                </div>
                            </div>
                        </div>

                        </div>

                </div>


            </div>

    </div>
  )
}
