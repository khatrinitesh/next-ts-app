"use client"
// custom hooks - state management
import React, { useState ,useEffect,useRef  } from "react";
// library
// next image
import Image from "next/image";
// constants

interface QtyProps{
    initialQty:number;
}

const Example = () => {
   
  return (
    <>
      <QtyComp initialQty={10}/>
    </>
  )
};

export default Example;

const QtyComp:React.FC<QtyProps> = ({initialQty}) => {
    // state
    const [qty,setQty] = useState(initialQty);

    // increment
    const btnInc = () => {
        if(qty < 10){
        setQty(prevQty => prevQty +1)
    }
    }
    // decrement
    const btnDec = () => {
        if(qty > 0){
            setQty(prevQty => prevQty - 1)
        }
        
    }
    return(
        <>
        <div className="flex items-center">
      <button
        className="text-gray-600 focus:outline-none"
        onClick={btnDec}
      >
        &#8722; {/* Unicode for minus symbol */}
      </button>
      <span className="mx-4 text-xl">{qty}</span>
      <button
        className="text-gray-600 focus:outline-none"
        onClick={btnInc}
      >
        &#43; {/* Unicode for plus symbol */}
      </button>
    </div>
        </>
    )
}