"use client";
import React, { useEffect,useState } from "react";


const Example: React.FC<> = ({  }) => {
   
    const [isCapsLock,setIsCapsLock] = useState<boolean>(false);

    const handleKeyPress = (event:KeyboardEvent) => {
        setIsCapsLock(event.getModifierState("CapsLock"))
    }

    useEffect(() => {
        window.addEventListener('keydown',handleKeyPress)

        return () => {
            window.removeEventListener('keydown',handleKeyPress);
        }
    },[]);
  return (
    <>
     {isCapsLock && (
        <>
         <div className="bg-red-500 text-white p-2 fixed bottom-0 right-0">
          Caps Lock is ON
        </div>
        </>
     )}
    </>
  );
};

export default Example;
