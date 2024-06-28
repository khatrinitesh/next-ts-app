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
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import { useTable, useSortBy, Column } from "react-table";
import GaugeChart from "react-gauge-chart";
import { StarIcon } from "@heroicons/react/solid";

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
    console.log("Form submitted with data:", formData);
    // Handle form submission logic here (e.g., API call, state update, etc.)
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-1/2 p-6">
        <h1 className="text-2xl font-bold mb-4">Scroll to see sticky element:</h1>
        <div className="h-96 overflow-y-auto">
          {/* Placeholder content to demonstrate scrolling */}
          <p className="mb-4">Scrollable content...</p>
          <p className="mb-4">Scrollable content...</p>
          <p className="mb-4">Scrollable content...</p>
          <p className="mb-4">Scrollable content...</p>
          <p className="mb-4">Scrollable content...</p>
          <StickyElementComponent topOffset={20} bottomOffset={20}>
            <div className="p-4 bg-blue-200">
              <p className="text-lg font-semibold">Sticky Element</p>
              <p>This element stays fixed as you scroll.</p>
            </div>
          </StickyElementComponent>
          <p className="mb-4">Scrollable content...</p>
          <p className="mb-4">Scrollable content...</p>
          <p className="mb-4">Scrollable content...</p>
          <p className="mb-4">Scrollable content...</p>
          <p className="mb-4">Scrollable content...</p>
          <p className="mb-4">Scrollable content...</p>
          <p className="mb-4">Scrollable content...</p>
          <p className="mb-4">Scrollable content...</p>
          <p className="mb-4">Scrollable content...</p>
          <p className="mb-4">Scrollable content...</p>
          <p className="mb-4">Scrollable content...</p>
          <p className="mb-4">Scrollable content...</p>
          <p className="mb-4">Scrollable content...</p>
          <p className="mb-4">Scrollable content...</p>
          <p className="mb-4">Scrollable content...</p>
          <p className="mb-4">Scrollable content...</p>
          <p className="mb-4">Scrollable content...</p>
          <p className="mb-4">Scrollable content...</p>
          <p className="mb-4">Scrollable content...</p>
          <p className="mb-4">Scrollable content...</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Example;



interface StickyElementProps {
    children: React.ReactNode;
    topOffset?: number;
    bottomOffset?: number;
  }

const StickyElementComponent: React.FC<StickyElementProps> = ({children,topOffset=0,bottomOffset=0}) => {
 

  return (
    <>
      <div
      className="sticky top-0 z-10 bg-white shadow-md"
      style={{ top: `${topOffset}px`, bottom: `${bottomOffset}px` }}
    >
      {children}
    </div>
    </>
  );
};
