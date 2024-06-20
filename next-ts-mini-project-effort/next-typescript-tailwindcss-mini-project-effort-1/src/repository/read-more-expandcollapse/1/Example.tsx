"use client"
// custom hooks - state management
import React, { useState ,useEffect,useRef  } from "react";
// library
// next image
import Image from "next/image";
// interface

// constants

const Example = () => {
  
   
  return (
    <>
     
    </>
  )
};

export default Example;

const ReadMoreCollapse:React.FC<> = ({}) => {
    
    return(
        <>
      <div className="bg-white shadow-md rounded-lg p-6 mb-3">
        <div className="mb-4">
          {isCollapsed ? (
            <>
              <p>{truncatedContent}</p>
              {shouldCollapse && (
                <button
                  className="text-blue-500 mt-2"
                  onClick={toggleCollapse}
                  aria-label={isCollapsed ? 'Expand content' : 'Collapse content'}
                >
                  {isCollapsed ? 'Read more' : 'Show less'}
                </button>
              )}
            </>
          ) : (
            <>
              <p>{content}</p>
              {shouldCollapse && (
                <button
                  className="text-blue-500 mt-2"
                  onClick={toggleCollapse}
                  aria-label={isCollapsed ? 'Expand content' : 'Collapse content'}
                >
                  {isCollapsed ? 'Read more' : 'Show less'}
                </button>
              )}
            </>
          )}
        </div>
      </div>
        </>
    )
}