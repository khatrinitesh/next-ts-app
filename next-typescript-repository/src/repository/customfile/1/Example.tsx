
"use client"
import React, { useRef ,useEffect,useState } from "react";



interface CustomFileInputProps {
    label: string;
    onFileSelect?: (file: File | null) => void;
  }

const Example: React.FC<CustomFileInputProps> = ({label,onFileSelect }) => {
   const [fileName, setFileName] = useState<string | null>(null);
   const fileInputRef = useRef<HTMLInputElement | null>(null);
 
   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
     const file = event.target.files ? event.target.files[0] : null;
     setFileName(file ? file.name : null);
     if (onFileSelect) {
       onFileSelect(file);
     }
   };
 
   const handleButtonClick = () => {
    fileInputRef.current?.click();
  };
  return (
    <>
    <div className="flex flex-col items-start">
      <label className="mb-2 text-sm font-medium text-gray-700">{label}</label>
      <div className="flex items-center">
        <button
          type="button"
          onClick={handleButtonClick}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Choose File
        </button>
        <span className="ml-3">{fileName || 'No file chosen'}</span>
      </div>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
    </>
  );
};

export default Example;
