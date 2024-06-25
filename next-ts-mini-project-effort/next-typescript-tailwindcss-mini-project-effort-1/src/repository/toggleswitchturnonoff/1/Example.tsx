"use client";
// custom hooks - state management
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";
// LIBRARY
import { FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa";
// NEXT/IMAGE
import Image from "next/image";
// NEXT/LINK
import Link from "next/link";
// WALLPAPER
import Wallpaper from "../../../assets/img/wallpaper.jpg";
// STYLINGCSS
import "./style.css";
// INTERFACE

// CONSTANTS

const Example = () => {
    const [checked, setChecked] = useState(true);
  return (
    <>
      <Switch
        isOn={checked}
        handleToggle={() => setChecked(!checked)}
        colorOne="#EF476F"
        colorTwo="#06D6A0"
      />
    </>
  );
};

export default Example;

const Switch = ({ isOn, handleToggle, colorOne, colorTwo }) => {
    return (
      <>
        <input
          checked={isOn}
          onChange={handleToggle}
          className="switch-checkbox"
          id={`switch`}
          type="checkbox"
        />
        <label
          style={{ background: isOn ? colorOne : colorTwo }}
          className="switch-label"
          htmlFor={`switch`}
        >
          <span className={`switch-button`} />
        </label>
      </>
    );
  };