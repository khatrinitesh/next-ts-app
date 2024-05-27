
"use client"
import React,{useState} from "react";

const Example: React.FC<MyComponentProps> = ({  initialActive=false}) => {

    const [isActive, setIsActive] = useState(initialActive);

    const toggleActive = () => {
        setIsActive(!isActive);
      };

      const buttonClass = isActive
    ? 'bg-blue-500 text-white'
    : 'bg-gray-500 text-black';
  return (
    <>
       <div className="p-4">
      <button
        className={`p-2 rounded ${buttonClass}`}
        onClick={toggleActive}
      >
        Toggle Me
      </button>
    </div>
    </>
  );
};

export default Example;
