"use client";
// custom hooks - state management
import React, { useState, useEffect, useRef } from "react";
// library
// next image
import Image from "next/image";
import Link from "next/link";
// interface
import Wallpaper from "../../../assets/img/wallpaper.jpg";
import { Alert as AlertType } from "./interface";
import { DANGER_ALERT, INFO_ALERT, SUCCESS_ALERT, WARNING_ALERT } from "./constants";

interface AlertProps{
    alert:AlertType;
}


const Example = ({ }) => {
  return (
    <>
        <Alert alert={SUCCESS_ALERT} />
        <Alert alert={WARNING_ALERT} />
        <Alert alert={DANGER_ALERT} />
        <Alert alert={INFO_ALERT} />
    </>
  )
};

export default Example;

const Alert:React.FC <AlertType> = ({alert}) => {

    let alertClass = '';

    switch (alert.type) {
        case 'success':
            alertClass = 'bg-green-100 border-green-400 text-green-700';
            break;
        case 'warning':
            alertClass = 'bg-yellow-100 border-yellow-400 text-yellow-700';
            break;
        case 'danger':
            alertClass = 'bg-red-100 border-red-400 text-red-700';
            break;
        case 'info':
            alertClass = 'bg-blue-100 border-blue-400 text-blue-700';
            break;
        default:
            alertClass = '';
    }
    return(
        <>
        <div className={`border px-4 py-2 mb-4 rounded ${alertClass}`}>
            {alert.message}
        </div>
        </>
    )
}