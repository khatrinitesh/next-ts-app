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
  const speedValue= .75
  return (
    <>
    <SpeedMeterGauge value={speedValue} />
    </>
  );
};

export default Example;

interface SpeedMeterGaugeProps {
  value: number; // Value between 0 and 1 representing the percentage
}

const SpeedMeterGauge: React.FC<SpeedMeterGaugeProps> = ({ value }) => {
  return (
    <div className="flex items-center justify-center">
      <GaugeChart
        id="speed-gauge-chart"
        nrOfLevels={30}
        arcsLength={[0.3, 0.5, 0.2]}
        colors={['#FF5F6D', '#FFC371', '#A8D582']}
        percent={value}
        arcPadding={0.02}
        textColor="#424242"
        needleColor="#424242"
        needleBaseColor="#424242"
      />
    </div>
  );
};











  