
"use client"
import React, { useEffect,useState } from "react";

interface ImageZoomProps {
    src: string;
    alt: string;
  }


const Example: React.FC<ImageZoomProps> = ({src,alt}) => {
    const [zoom, setZoom] = useState(false);

    const handleZoom = () => {
        setZoom(!zoom)
    }
   
  return (
    <>
    <div className="overflow-hidden">
     <img
        src={src}
        alt={alt}
        className={`transition-transform duration-300 ${zoom ? 'scale-150' : 'scale-100'}`}
        onClick={handleZoom}
      />
      </div>
    </>
  );
};

export default Example;
