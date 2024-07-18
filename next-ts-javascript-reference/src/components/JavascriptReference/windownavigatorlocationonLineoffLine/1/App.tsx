"use client"
import React, { useState ,useEffect } from 'react';


const CustomApp:React.FC = () => {
   const [status,setStatus] = useState<string>(navigator.onLine ? 'Online' : 'Offline');

   useEffect(() => {
    const handleOnline = () => {
        setStatus('Online');
    }
    const handleOffline = () => {
        setStatus('Offline');
    }

    window.addEventListener('online',handleOnline)
    window.addEventListener('offline',handleOffline);

    return () => {
        window.removeEventListener('online',handleOnline)
        window.removeEventListener('offline',handleOffline);
    }
   },[]);
  return (
    <>
      {status}
    </>
  )
}

export default CustomApp