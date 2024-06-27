"use client";
import { useState, useEffect } from "react";
import { skillsData } from "./constants";
// LIBRARY

// INTERFACE
// STYLING
// import "./style.css";

const Example: React.FC = () => {
  return (
    <>
      <SlideDownBarScrollComponent />
    </>
  );
};

export default Example;

const SlideDownBarScrollComponent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true); // Initially visible

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingDown = prevScrollPos < currentScrollPos;
      setIsVisible(!isScrollingDown); // Toggle visibility based on scroll direction
      prevScrollPos = currentScrollPos;
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 w-full bg-blue-500 text-white p-4 transition-transform duration-300 ${
          isVisible ? "transform translate-y-0" : "-translate-y-full"
        }`}
      >
        Slide down bar content
      </div>
    </>
  );
};
