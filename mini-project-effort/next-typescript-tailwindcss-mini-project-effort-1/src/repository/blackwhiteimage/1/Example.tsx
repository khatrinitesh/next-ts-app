"use client"
import React, { useEffect } from 'react'


const Example: React.FC = () => {
    useEffect(() => {
      const image = document.getElementById('image') as HTMLImageElement;
      const toggleButton = document.getElementById('toggleButton') as HTMLButtonElement;
  
      const toggleGrayscale = () => {
        if (image.classList.contains('grayscale')) {
          image.classList.remove('grayscale');
        } else {
          image.classList.add('grayscale');
        }
      };
  
      toggleButton.addEventListener('click', toggleGrayscale);
  
      // Cleanup the event listener on component unmount
      return () => {
        toggleButton.removeEventListener('click', toggleGrayscale);
      };
    }, []);
  
    return (
      <>
        <div className="text-center">
          <h1 className="text-2xl mb-4">Grayscale Image Example</h1>
          <img id="image" src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="Example Image" className="grayscale"/>
          <div className="mt-4">
            <button id="toggleButton" className="px-4 py-2 bg-blue-500 text-white rounded">Toggle Grayscale</button>
          </div>
        </div>
      </>
    );
  };

export default Example