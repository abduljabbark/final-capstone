import React from 'react'
import './style.css';
import BGIMG from "../../images/home-vendor-pk.webp"

const HeroImg = () => {
  return (
    <div className="hero-container">
    <img
        src={BGIMG}
        alt="Chef cooking"
        className="hero-image"
    />
</div>
  )
}

export default HeroImg