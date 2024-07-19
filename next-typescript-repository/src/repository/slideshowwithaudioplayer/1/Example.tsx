"use client";
// NEXT/IMAGE
import Image from "next/image";
import { useState, useEffect } from "react";
// LIBRARY
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ReactPlayer from 'react-player';
// INTERFACE
import { Slide,SlideshowProps  } from "./interface";
// STYLING
// import "./style.css";
import Wallpaper1 from '../../../assets/img/wallpaper.jpg';
import Wallpaper2 from '../../../assets/img/wallpaper2.jpg';
import Wallpaper3 from '../../../assets/img/wallpaper3.jpg';
import Wallpaper4 from '../../../assets/img/wallpaper4.jpg';
import Audio1 from "../../../assets/audio/SoundHelix-Song-1.mp3";
import Audio2 from "../../../assets/audio/SoundHelix-Song-2.mp3";
import Audio3 from "../../../assets/audio/SoundHelix-Song-3.mp3";

const Example: React.FC = () => {
    
    const slides: Slide[] = [
        { image: Wallpaper1, audio: Audio1 },
        { image: Wallpaper2, audio: Audio2 },
        { image: Wallpaper3, audio: Audio3 },
      ];
    
  return (
    <>
      <SlideShowAudioComponent slides={slides}/>
    </>
  );
};

export default Example;


const SlideShowAudioComponent:React.FC<SlideshowProps> = ({slides }) => {

    const [currentSlide, setCurrentSlide] = useState<number>(0);

    const settings: Settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      cssEase: 'ease-out',
      beforeChange: (current: number, next: number) => setCurrentSlide(next),
    };
  
    const handleSlideChange = (index: number) => {
      setCurrentSlide(index);
    };

    return(
        <>
         <div className="slideshow-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <Image src={slide.image} alt={`Slide ${index}`} className="slide-image" />
          </div>
        ))}
      </Slider>
      <div className="audio-player">
        <ReactPlayer url={slides[currentSlide].audio} controls />
      </div>
    </div>
        </>
    )
}