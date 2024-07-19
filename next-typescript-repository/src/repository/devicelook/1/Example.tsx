"use client";
import React, { useEffect,useState } from "react";

interface DeviceInfoProps {
    userAgent: string;
  }


const Example: React.FC<DeviceInfoProps> = ({userAgent}) => {

        // Get device type based on user agent
        const getDeviceType = (): string => {
            if (/Android/i.test(userAgent)) {
            return "Android";
            } else if (/iPhone|iPad|iPod/i.test(userAgent)) {
            return "iOS";
            } else if (/Windows/i.test(userAgent)) {
            return "Windows";
            } else if (/Macintosh/i.test(userAgent)) {
            return "Mac";
            } else if (/Linux/i.test(userAgent)) {
            return "Linux";
            } else {
            return "Unknown";
            }
        };  

    
  return (
    <>
     <div className="bg-gray-200 p-4 rounded-md">
      <p><strong>Device Type:</strong> {getDeviceType()}</p>
      <p><strong>User Agent:</strong> {userAgent}</p>
    </div>
    </>
  );
};

export default Example;
