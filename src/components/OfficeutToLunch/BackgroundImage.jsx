import React from 'react'
import './style.css';
import BGIMG from "../../images/home-corporate-pk.webp"

const BackgroundImage = () => {
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

export default BackgroundImage