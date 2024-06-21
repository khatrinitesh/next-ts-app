"use client";
// custom hooks - state management
import React, { useState, useEffect, useRef } from "react";
// library
// next image
import Image from "next/image";
import Link from "next/link";
// interface
import Wallpaper from "../../../assets/img/wallpaper.jpg";

// constants

const Example = () => {
  return (
    <>
    </>
  );
};

export default Example;

const Gallery:React.FC = () => {
    const [selectedImage,setSelectedImage] = useState<string | null>(null);

    const openModal = (imageSrc:string) => {
        setSelectedImage(imageSrc);
    }

    const closeModal = () => {
        setSelectedImage(null);
    }

    // example list of image (replace with your data or API fetch)
    const images = [
        { id: 1, src: 'image1.jpg', alt: 'Image 1' },
        { id: 2, src: 'image2.jpg', alt: 'Image 2' },
        // Add more images as needed
      ];
    return(
        <>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((image) => (
        <Image key={image.id} src={image.src} alt={image.alt} onClick={() => openModal(image.src)} />
      ))}
      {selectedImage && <Modal src={selectedImage} onClose={closeModal} />}
    </div>
        </>
    )
}

// ----------------------- IMAGE
interface ImageProps{
    src:string;
    alt:string;
    onClick:() => void;
}

const Image:React.FC<ImageProps> = ({src,alt,onClick}) => {
    return(
        <>
         <Image src={src} alt={alt} className="cursor-pointer" onClick={onClick} />
        </>
    )
}


// ----------------------- MODAL
const Modal:React.FC = () => {
    return(
        <></>
    )
}
