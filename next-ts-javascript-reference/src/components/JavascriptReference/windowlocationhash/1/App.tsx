"use client"
import React, { useState ,useEffect } from 'react';


const CustomApp:React.FC = () => {

    const [hash,setHash] = useState<string>(window.location.hash)

    useEffect(() => {
        const handleHashChange = () => {
            setHash(window.location.hash);
        }

        window.addEventListener('hashchange',handleHashChange)
        return () => {
            window.removeEventListener('hashchange',handleHashChange)
        }
    },[]);

    useEffect(() => {
        if(hash){
            console.log(`Current hash: ${hash}`);
            const targetElement = document.querySelector(hash);
            if(targetElement){
                targetElement.scrollIntoView({
                    behavior:'smooth'
                });
            }
        }
    },[hash]);


  return (
    <>
        <h1>Scroll to Sections</h1>
      <a href="#section1">Go to Section 1</a>
      <a href="#section2">Go to Section 2</a>
      <a href="#section3">Go to Section 3</a>
      
      <div id="section1" style={{ height: '100vh', background: '#f0f0f0', padding: '20px' }}>
        <h2>Section 1</h2>
      </div>
      <div id="section2" style={{ height: '100vh', background: '#e0e0e0', padding: '20px' }}>
        <h2>Section 2</h2>
      </div>
      <div id="section3" style={{ height: '100vh', background: '#d0d0d0', padding: '20px' }}>
        <h2>Section 3</h2>
      </div>
    </>
  )
}

export default CustomApp