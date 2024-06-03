"use client";
import React, { useEffect,useState } from "react";


const Example: React.FC<> = ({  }) => {
    const [browserName, setBrowserName] = useState<string>("");

    useEffect(() => {
        const userAgent = window.navigator.userAgent;
        let name = "";
    
        if (userAgent.indexOf("Firefox") > -1) {
          name = "Firefox";
        } else if (userAgent.indexOf("Chrome") > -1) {
          name = "Chrome";
        } else if (userAgent.indexOf("Safari") > -1) {
          name = "Safari";
        } else if (userAgent.indexOf("MSIE") > -1 || userAgent.indexOf("Trident/") > -1) {
          name = "Internet Explorer";
        } else {
          name = "Unknown";
        }
    
        setBrowserName(name);
      }, []);
   
  return (
    <>
    {browserName && (
        <div className="bg-blue-500 text-white p-2 fixed bottom-0 right-0">
          You are using {browserName}
        </div>
      )}
    </>
  );
};

export default Example;
