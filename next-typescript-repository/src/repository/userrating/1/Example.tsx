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
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/outline";
// NEXT/IMAGE
import Image from "next/image";
// NEXT/LINK
import Link from "next/link";
// WALLPAPER
import Wallpaper from "../../../assets/img/wallpaper.jpg";
// // STYLINGCSS
// import "./style.css";
// INTERFACE
import { Rating as RatingInterFace } from "./interface";
// CONSTANTS
import { ratings } from "./constants";

const Example = () => {
  return (
    <>
       <h1 className="text-2xl font-bold mb-4">User Ratings</h1>
      {ratings.map((rating) => (
        <Rating key={rating.id} rating={rating} />
      ))}
    </>
  );
};

export default Example;

interface RatingProps {
  rating: RatingInterFace;
}

const Rating: React.FC<RatingProps> = ({ rating }) => {
  // Generate star icons based on rating value
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating.value) {
        stars.push(
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 fill-current text-yellow-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 1l2.065 6.308H18l-5.365 3.89 2.066 6.307L10 14.82 5.299 17.505l2.065-6.308L2 7.308h5.935z"
              clipRule="evenodd"
            />
          </svg>
        );
      } else {
        stars.push(
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 fill-current text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 1l2.065 6.308H18l-5.365 3.89 2.066 6.307L10 14.82 5.299 17.505l2.065-6.308L2 7.308h5.935z"
              clipRule="evenodd"
            />
          </svg>
        );
      }
    }
    return stars;
  };
  return (
    <>
      <div className="flex items-center">
        <div className="flex mr-2">{renderStars()}</div>
        <span className="text-gray-600">{rating.comment}</span>
      </div>
    </>
  );
};
