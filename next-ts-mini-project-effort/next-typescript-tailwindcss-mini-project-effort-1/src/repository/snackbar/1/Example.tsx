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

    const [showSnackbar, setShowSnackbar] = useState<boolean>(false);

    const handleOpenSnackbar = () => {
      setShowSnackbar(true);
    };
  
    const handleCloseSnackbar = () => {
      setShowSnackbar(false);
    };
  return (
    <>
        <button onClick={handleOpenSnackbar} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Open Snackbar
        </button>

       {showSnackbar && (
          <SnackbarComponent message="This is a snackbar message" onClose={handleCloseSnackbar} />
        )}
    </>
  );
};

export default Example;

interface SnackbarProps {
    message: string;
    onClose: () => void;
  }

const SnackbarComponent: React.FC<SnackbarProps> = ({message,onClose}) => {
    useEffect(() => {
        const timeout = setTimeout(() => {
          onClose();
        }, 3000); // Snackbar auto-closes after 3 seconds
    
        return () => clearTimeout(timeout);
      }, [onClose]);

  return (
    <>
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 shadow-lg">
      <p>{message}</p>
    </div>
    </>
  );
};
