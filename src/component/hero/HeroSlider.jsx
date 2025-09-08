import React from 'react';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import bg1 from "../../assets/images/hero-1.jpg"
import bg2 from "../../assets/images/hero-2.jpg"
import bg3 from "../../assets/images/hero-3.jpg"
import bg4 from "../../assets/images/hero-7.jpg"


const images = [bg1,bg2,bg3,bg4]


const HeroSlider = () => {
    const setting ={
        infinite: true,
        speed: 12000,
        autoplay: true,
        autoplaySpeed: 15000,
    }

    return (
        <Slider {...setting} className='hero-slider'>
            {images.map((img, index) => (
                <div key={index} className='slide'>
                    <img src={img} alt={`Slide ${index + 1}`} className='slide-image'/>
                </div>
            ))}
        </Slider>
    );
};

export default HeroSlider;