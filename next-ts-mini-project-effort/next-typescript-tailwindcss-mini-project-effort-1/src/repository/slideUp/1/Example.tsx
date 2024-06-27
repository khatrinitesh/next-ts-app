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

// WALLPAPER
import Wallpaper1 from '../../../assets/img/wallpaper.jpg';
import Wallpaper2 from '../../../assets/img/wallpaper2.jpg';
import Wallpaper3 from '../../../assets/img/wallpaper3.jpg';
import Wallpaper4 from '../../../assets/img/wallpaper4.jpg';
// AUDIO
import Audio1 from "../../../assets/audio/SoundHelix-Song-1.mp3";
import Audio2 from "../../../assets/audio/SoundHelix-Song-2.mp3";
import Audio3 from "../../../assets/audio/SoundHelix-Song-3.mp3";

const Example: React.FC = () => {
    
 
  return (
    <>
      <SlideUpComponent />
    </>
  );
};

export default Example;


const SlideToggleComponent:React.FC<> = ({ }) => {
    const [text,setText]  = useState(false);
    const handleToggle = () => {
        setText(!text)
    }
    return(
        <>
         <button onClick={handleToggle} className="bg-red-600 text-white px-10 py-2 rounded">Click toggle</button>
         <br />
         {text && (<>happy</>)}
        </>
    )
}