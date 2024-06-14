"use client";
import React, { useState } from "react";
import Wallpaper from "../../../assets/img/wallpaper.jpg";
// import './style.css';
import Link from "next/link";
import Image from "next/image";


const Example: React.FC<NotificationButtonProps> = ({}) => {
    const [isOnline, setIsOnline] = useState(true);
    useEffect(() => {
        const updateOnlineStatus = () => {
          setIsOnline(navigator.onLine);
        };
    
        window.addEventListener("online", updateOnlineStatus);
        window.addEventListener("offline", updateOnlineStatus);
    
        return () => {
          window.removeEventListener("online", updateOnlineStatus);
          window.removeEventListener("offline", updateOnlineStatus);
        };
      }, []);
  return (
    <>
     <span isOnline={isOnline}>asdd</span>
    </>
  );
};

export default Example;
