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
// import "./style.css";
// INTERFACE

// CONSTANTS

const Example = () => {
  return (
    <>
      <TogglePwdVisibility />
    </>
  );
};

export default Example;

const TogglePwdVisibility: React.FC = () => {
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword); // Toggle showPassword state
  };

  return (
    <>
      <div className="flex items-center">
        <input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-400 rounded-md px-3 py-2 mr-2"
          placeholder="Enter your password"
        />
        <button
          type="button"
          onClick={handleTogglePassword}
          className="px-3 py-2 bg-gray-200 rounded-md border border-gray-400 hover:bg-gray-300"
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>
    </>
  );
};
