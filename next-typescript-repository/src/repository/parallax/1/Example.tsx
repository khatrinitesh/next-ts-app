"use client"
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const Example = () => {
  return (
    <>
      <ParallaxSection />
    </>
  );
};

export default Example;

interface ParallaxSectionProps {
    imageUrl: string;
    speed?: number;
  }

  const ParallaxSection: React.FC<ParallaxSectionProps> = ({
    imageUrl,
    speed = 0.3,
  }) => {
    const [ref, inView] = useInView({
      triggerOnce: true,
      rootMargin: "-100px 0px", // Adjust rootMargin as needed
    });
  
    const variants = {
      visible: {
        translateY: 0,
        opacity: 1,
        transition: {
          duration: 0.8,
        },
      },
      hidden: {
        translateY: `${speed * 100}px`,
        opacity: 0,
      },
    };
  
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
        <Image
          src={imageUrl}
          alt="Parallax Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Your Parallax Section</h1>
        </div>
      </motion.div>
    );
  };
