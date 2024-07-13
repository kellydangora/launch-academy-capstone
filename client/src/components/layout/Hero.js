import React from "react";
import { Link } from "react-router-dom";
import "../../assets/scss/componentStyles/Hero.scss";
import myImage from "../../../public/images/hero.jpg"



const Hero = () => {

    return (
        <div className="hero-wrapper">
            <div className="hero-text">Discover Your New Property</div>
            <div className="hero-caption">Helping millions of people find the right property.</div>
            <div className="hero-btn-container">
                <button className="hero-btn">Find property</button>
            </div>
            <div className="overlay"></div>
            <div className="hero-image">
                <img src={myImage}/>
            </div>
        </div>
    )
}
export default Hero;
