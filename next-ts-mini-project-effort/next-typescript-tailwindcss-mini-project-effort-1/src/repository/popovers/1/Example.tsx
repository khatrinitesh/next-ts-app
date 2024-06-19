"use client";
// custom hooks state management
import React, { useState, useEffect } from "react";
// next image
import Image from "next/image";
// image and video
import Wallpaper from "../../../assets/img/wallpaper.jpg";
import VideoMovie from "../../../assets/video/movie.mp4";

const Example = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
      <Popover
        trigger={<button className="bg-blue-500 text-white px-4 py-2 rounded-md">Open Popover</button>}
        content={<div className="text-gray-800">This is the content of the popover.</div>}
        position="bottom"
      />
    </div>
    </>
  );
};

export default Example;

interface PopoverProps {
  trigger: React.ReactNode; // Element that triggers the popover (e.g., button, link)
  content: React.ReactNode; // Content of the popover
  position?: 'top' | 'bottom' | 'left' | 'right'; // Optional position of the popover
}


const Popover: React.FC<PopoverProps> = ({ trigger, content, position = 'bottom' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [popoverStyle, setPopoverStyle] = useState({});

  const togglePopover = () => {
    setIsOpen(!isOpen);
  };

  const calculatePositionStyles = (triggerElement: HTMLElement) => {
    const rect = triggerElement.getBoundingClientRect();
    let styles: React.CSSProperties = {};

    switch (position) {
      case 'top':
        styles = { top: `${rect.top - 10}px`, left: `${rect.left}px` };
        break;
      case 'bottom':
        styles = { top: `${rect.bottom + 10}px`, left: `${rect.left}px` };
        break;
      case 'left':
        styles = { top: `${rect.top}px`, left: `${rect.left - 150}px` };
        break;
      case 'right':
        styles = { top: `${rect.top}px`, left: `${rect.right}px` };
        break;
      default:
        break;
    }

    return styles;
  };

  const handleMouseEnter = () => {
    const triggerElement = document.getElementById('trigger-element');
    if (triggerElement) {
      const styles = calculatePositionStyles(triggerElement);
      setPopoverStyle(styles);
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block">
      <div id="trigger-element" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {trigger}
      </div>
      {isOpen && (
        <div
          className="bg-white border border-gray-200 shadow-lg rounded-lg p-4 z-10"
          style={popoverStyle}
        >
          {content}
        </div>
      )}
    </div>
  );
};
