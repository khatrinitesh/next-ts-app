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

  return (
    <>
    <SpriteComponent imageUrl={Wallpaper1}
            width={100}
            height={100}
            spriteWidth={50}
            spriteHeight={50}
            index={0} />
    </>
  );
};

export default Example;

interface SpriteProps {
    imageUrl: string;
    width: number;
    height: number;
    spriteWidth: number;
    spriteHeight: number;
    index: number;
  }

const SpriteComponent: React.FC<SpriteProps> = ({ imageUrl, width, height, spriteWidth, spriteHeight, index }) => {
    const spriteStyle: React.CSSProperties = {
        width: `${width}px`,
        height: `${height}px`,
        backgroundImage: `url(${imageUrl})`,
        backgroundPosition: `-${index * spriteWidth}px 0px`,
        backgroundSize: `${spriteWidth}px ${spriteHeight}px`,
      };
    
  return <div className="sprite" style={spriteStyle}></div>;
};










  