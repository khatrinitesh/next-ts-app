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
    <SplitScreenComponent leftContent={<LeftPanel />}
          rightContent={<RightPanel />} />
    </>
  );
};

export default Example;

interface SplitScreenLayoutProps {
    leftContent: React.ReactNode;
    rightContent: React.ReactNode;
  }


const SplitScreenComponent: React.FC<SplitScreenLayoutProps> = ({leftContent,rightContent  }) => {
    
  return (
    <>
      <div className="flex h-screen">
      <div className="w-1/2 bg-gray-200 p-4">
        {leftContent}
      </div>
      <div className="w-1/2 bg-gray-100 p-4">
        {rightContent}
      </div>
    </div>
    </>
  );
};


const LeftPanel: React.FC = () => {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <h2 className="text-2xl font-bold mb-4">Left Panel Content</h2>
        <p>This is the left panel content.</p>
      </div>
    );
  };
  
  const RightPanel: React.FC = () => {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <h2 className="text-2xl font-bold mb-4">Right Panel Content</h2>
        <p>This is the right panel content.</p>
      </div>
    );
  };









  