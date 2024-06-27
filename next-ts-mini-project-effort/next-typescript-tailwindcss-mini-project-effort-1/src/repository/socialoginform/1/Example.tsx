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
// import "./style.css";

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
    const handleLoginSuccess = (provider: string) => {
        alert(`Logged in successfully with ${provider}`);
        // Implement your login logic here (e.g., redirect to dashboard)
      };
    

   
  return (
    <>
      <SocialLoginFormComponent onLoginSuccess={handleLoginSuccess}/>
    </>
  );
};

export default Example;

interface SocialLoginProps {
    onLoginSuccess: (provider: string) => void;
  }


const SocialLoginFormComponent: React.FC<SocialLoginProps> = ({onLoginSuccess}) => {
    const handleLogin = (provider: string) => {
        // Simulate successful login
        onLoginSuccess(provider);
      };
    

  return (
    <>
     <div className="flex flex-col items-center justify-center mt-10">
      <button
        onClick={() => handleLogin('google')}
        className="bg-blue-600 text-white hover:bg-blue-700 font-semibold py-2 px-4 rounded-lg mb-4"
      >
        Login with Google
      </button>
      <button
        onClick={() => handleLogin('facebook')}
        className="bg-blue-800 text-white hover:bg-blue-900 font-semibold py-2 px-4 rounded-lg"
      >
        Login with Facebook
      </button>
    </div>
    </>
  );
};
