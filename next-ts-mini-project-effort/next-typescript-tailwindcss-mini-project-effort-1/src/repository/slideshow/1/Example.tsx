"use client";
// NEXT/IMAGE
import Image from "next/image";
import { useState, useEffect } from "react";
// LIBRARY
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// INTERFACE
// STYLING
// import "./style.css";
import Wallpaper1 from '../../../assets/img/wallpaper.jpg';
import Wallpaper2 from '../../../assets/img/wallpaper2.jpg';
import Wallpaper3 from '../../../assets/img/wallpaper3.jpg';
import Wallpaper4 from '../../../assets/img/wallpaper4.jpg';

const Example: React.FC = () => {

    const images = [Wallpaper1, Wallpaper2, Wallpaper3, Wallpaper4];
    
  return (
    <>
      <SlideShowComponent images={images} />
    </>
  );
};

export default Example;

interface CarouselProps {
    images: string[];
  }

const SlideShowComponent:React.FC<CarouselProps> = ({images}) => {

    const settings: Settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: 'ease-out',
      };
    return(
        <>
 <div className="slideshow-container">
 <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <Image src={image} alt={`Slide ${index}`} className="carousel-image w-full" />
        </div>
      ))}
    </Slider>
    </div>
        </>
    )
}