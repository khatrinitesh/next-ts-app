"use client";
// custom hooks - state management
import React, { useState, useEffect, useRef } from "react";
// library
// next image
import Image from "next/image";
import Link from "next/link";
// interface
import Wallpaper from "../../../assets/img/wallpaper.jpg";
import { Testimonial as TestimonialType } from "./interface";


interface TestimonalProps{
    testimonial:TestimonialType
}


const Example = ({testimonials }) => {
  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {testimonials.map((testimonial) => (
                    <Testimonials key={testimonial.id} testimonial={testimonial} />
                ))}
            </div>
    </>
  )
};

export default Example;

const Testimonials: React.FC<TestimonialType> = ({testimonial}) => {
  return (
    <>
      <div className="bg-white p-4 shadow-lg rounded-lg">
            <p className="text-gray-800 mb-2">{testimonial.content}</p>
            <p className="font-semibold">{testimonial.author}</p>
        </div>
    </>
  );
};
