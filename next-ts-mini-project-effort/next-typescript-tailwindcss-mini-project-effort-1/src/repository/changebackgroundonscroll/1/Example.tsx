'use client'
import React, { useState,useEffect  } from 'react'


const Example:React.FC = () => {

    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if(offset > 50){
            setScrolled(true);
        }
        else{
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll',handleScroll)
        return () => {
            window.removeEventListener('scroll',handleScroll)
        }
    },[])
  return (
    <>
     <div className={`h-screen ${scrolled ? 'bg-blue-500' : 'bg-red-500'} transition-colors duration-300`}>
      <h1 className="text-white text-center pt-40">Scroll to change background color</h1>
    </div>
    </>
  )
}

export default Example
