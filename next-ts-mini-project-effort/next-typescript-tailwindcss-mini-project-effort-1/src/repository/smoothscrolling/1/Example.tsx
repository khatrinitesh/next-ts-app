"use client";
// CUSTOM HOOKS
import { useState, useEffect } from "react";
// NEXT/IMAGE
import Image from "next/image";
// LIBRARY
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactPlayer from "react-player";
import { Link as ScrollLink } from "react-scroll";
// STYLING
import "./style.css";

// WALLPAPER
import Wallpaper1 from "../../../assets/img/wallpaper.jpg";
import Wallpaper2 from "../../../assets/img/wallpaper2.jpg";
import Wallpaper3 from "../../../assets/img/wallpaper3.jpg";
import Wallpaper4 from "../../../assets/img/wallpaper4.jpg";
// AUDIO
import Audio1 from "../../../assets/audio/SoundHelix-Song-1.mp3";
import Audio2 from "../../../assets/audio/SoundHelix-Song-2.mp3";
import Audio3 from "../../../assets/audio/SoundHelix-Song-3.mp3";

// INTERFACE

const Example: React.FC = () => {
  return (
    <>
      <SmoothScrollingComponent />
    </>
  );
};

export default Example;

const SmoothScrollingComponent: React.FC<> = ({}) => {

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      event.preventDefault();
      const container = document.getElementById("smooth-scroll-container");
      if (!container) return;

      container.scrollBy({
        top: event.deltaY * 2,
        behavior: "smooth",
      });
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <>
      <div id="smooth-scroll-container" className="smooth-scroll-container">
        {/* SECTION 1 */}
        <ScrollLink to="section1" smooth={true} duration={500}>
          Section 1
        </ScrollLink>
        <div id="section1" className="section">
          Section 1 Content
        </div>


        {/* SECTION 2 */}
        <ScrollLink to="section2" smooth={true} duration={500}>
          Section 2
        </ScrollLink>
        <div id="section2" className="section">
          Section 2 Content
        </div>

        {/* SECTION 3 */}
        <ScrollLink to="section3" smooth={true} duration={500}>
          Section 3
        </ScrollLink>
        <div id="section3" className="section">
          Section 3 Content
        </div>

         {/* SECTION 4 */}
         <ScrollLink to="section4" smooth={true} duration={500}>
          Section 4
        </ScrollLink>
        <div id="section4" className="section">
          Section 4 Content
        </div>
      </div>
    </>
  );
};
