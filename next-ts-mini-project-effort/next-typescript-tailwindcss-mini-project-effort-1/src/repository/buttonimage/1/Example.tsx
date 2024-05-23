import React from "react";

interface ImageWithButtonProps {
    imageUrl: string;
    buttonText: string;
    onClick: () => void;
  }

const Example: React.FC<ImageWithButtonProps> = ({ imageUrl,buttonText,onClick }) => {
  return (
    <>
     <div className="relative inline-block">
      <img src={imageUrl} alt="Example Image" className="w-full h-auto" />
      <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded" onClick={onClick}>
        {buttonText}
      </button>
    </div>
    </>
  );
};

export default Example;
