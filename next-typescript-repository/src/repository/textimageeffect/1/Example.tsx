"use client";
// custom hooks - state management
import React, { useState, useEffect, useRef } from "react";
// library
// next image
import Image from "next/image";
import Link from "next/link";
// interface
import Wallpaper from "../../../assets/img/wallpaper.jpg";
import { ImageEffect, TextEffect } from "./interface/Effects";
import { IMAGE_EFFECTS, TEXT_EFFECTS } from "./constants/effects";


const Example = () => {
    const text = "Hello, world!";
    const selectedTextEffect = TEXT_EFFECTS[0]; // Example: Underline

    const imageUrl = Wallpaper;
    const selectedImageEffect = IMAGE_EFFECTS[0]; // Example: Rounded
  return (
    <>
      <TxtEffect text={text} selectedEffect={selectedTextEffect} />
      <ImageEffectComp imageUrl={Wallpaper} selectedEffect={selectedImageEffect} />
    </>
  )
};

export default Example;

// ******************************************* TEXT EFFECT
interface TextWithEffectProps{
    text:string;
    selectedEffect:TextEffect;
}

const TxtEffect:React.FC<TextWithEffectProps>  = ({text,selectedEffect}) => {
    return(
        <>
        <p className={`text-xl ${selectedEffect.cssClass}`}>{text}</p>
        </>
    )
}


// ******************************************* IMAGE EFFECT
interface ImageWithEffectProps{
    imageUrl:string;
    selectedEffect:ImageEffect;
}

const ImageEffectComp:React.FC<ImageWithEffectProps> = ({imageUrl,selectedEffect}) => {
    return(
        <>
            <Image height={1200} width={1200} src={imageUrl} alt="Image" className={`max-w-full ${selectedEffect.cssClass}`} />
        </>
    )
}


