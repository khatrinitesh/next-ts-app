"use client";
// CUSTOM HOOKS
import { useState, useEffect, useMemo } from "react";
// NEXT/IMAGE
import Image from "next/image";
// LIBRARY
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactPlayer from "react-player";
import { Link as ScrollLink } from "react-scroll";
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import { useTable, useSortBy, Column } from 'react-table';
import GaugeChart from 'react-gauge-chart';
import { StarIcon } from '@heroicons/react/solid';

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
    const handleSubmit = (formData: any) => {
        console.log('Form submitted with data:', formData);
        // Handle form submission logic here (e.g., API call, state update, etc.)
      };

  return (
    <>
     <StarRatingComponent />
    </>
  );
};

export default Example;

interface StarRatingProps {
    totalStars: number;
    initialRating?: number;
  }
  
  const StarRatingComponent: React.FC<StarRatingProps> = ({ totalStars, initialRating = 0 }) => {
    const [rating, setRating] = useState(initialRating);
  
    const handleStarClick = (index: number) => {
      setRating(index + 1);
    };
  
    return (
        <>
        <h1 className="text-xl font-bold mb-4">Rate this product:</h1>
        <div className="flex items-center">
        {[...Array(totalStars)].map((_,index) => (
            <StarIcon key={index}
            className={`h-6 w-6 cursor-pointer ${index < rating ? 'text-yellow-400' : 'text-gray-400'}`}
            onClick={() => handleStarClick(index)}/>
        ))}
      </div>
        </>
      
    );
  };
  


  