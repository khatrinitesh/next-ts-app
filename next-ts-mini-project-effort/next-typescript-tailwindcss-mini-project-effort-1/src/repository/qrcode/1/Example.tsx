"use client"
// custom hooks - state management
import React, { useState ,useEffect,useRef  } from "react";
// library
import QRCodeReact from 'qrcode.react';
// next image
import Image from "next/image";
// constants
import { features  } from "./constants";

const Example = () => {
    const qrText = 'https://www.qrcode-monkey.com'; // Replace with your desired text or URL
  return (
    <>
      <div className="flex justify-center items-center">
        <QRCodeComp text={qrText} />
      </div>
    </>
  )
};

export default Example;

const QRCodeComp: React.FC<{text:string}> = ({ text }) => {
    const qrCodeRef = useRef(null);
  return (
    <>
      <div className="flex flex-col items-center">
      <QRCodeReact
        value={text}
        size={256}
        level={'H'}
        renderAs={'svg'}
        includeMargin={true}
        ref={qrCodeRef}
      />
      <p className="mt-4 text-gray-600">Scan QR code</p>
    </div>
    </>
  );
};
