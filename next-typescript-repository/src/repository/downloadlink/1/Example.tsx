"use client";
import React, { useEffect,useState } from "react";


interface DownloadLinkProps {
    url: string;
    fileName: string;
  }


const Example: React.FC<> = ({url,fileName}) => {
     
  return (
    <>
     <a
      href={url}
      download={fileName}
      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded inline-block mt-4"
    >
      Download {fileName}
    </a>
    </>
  );
};

export default Example;
