import React from 'react'
import './Herosection.css'
import appleHeadphones from '../images/appleHeadphones.jpg';
import AppleEmblem from '../images/AppleEmblem.png';
export default function HeroSection() {
  return (
    <div>
        <div className="HeroSectionWrapper">
      <div className="HeroSectionMain">
        <div className="LogoInfo">
            <div className="Logo">
            <img  className="AppleLogo" src={AppleEmblem} alt="Apple Headphones" />
            <p style={{marginTop:'3vh',fontSize:'1.05rem',marginLeft:'-2vw'}}>Apple Audio</p>
            </div>
        <div className="info" style={{paddingLeft:'5vw'}}>
        <h2>Upto 40% OFF ON NEW ARRVALS!!</h2>
        <p style={{textDecoration:'underline',marginTop:'3vh'}}>Shop Now &rarr;</p>
        </div>
        
        </div>
      
      <img  className="Headphones" src={appleHeadphones} alt="Apple Headphones" />
      </div>
      </div>
    </div>
  )
}
