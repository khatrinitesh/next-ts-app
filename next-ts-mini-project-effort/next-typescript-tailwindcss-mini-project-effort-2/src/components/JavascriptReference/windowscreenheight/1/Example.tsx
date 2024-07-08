"use client"
import React, { useRef, useEffect, useState } from 'react';

const Example = () => {
    const [pixelDepth, setPixelDepth] = useState<number | null>(null);

    useEffect(() => {
        // Function to safely access window.screen.pixelDepth
        const getPixelDepth = () => {
            if (window.screen && typeof window.screen.pixelDepth === 'number') {
                setPixelDepth(window.screen.pixelDepth);
            } else {
                // Fallback or error handling if window.screen.pixelDepth is not available
                console.warn('Unable to retrieve screen pixel depth.');
                setPixelDepth(null);
            }
        };

        // Call the function when the component mounts
        getPixelDepth();

        // Clean up any event listeners or subscriptions if necessary
        // (none needed for this specific case)

    }, []);
  return (
    <>
      <p>Pixel depth: {pixelDepth !== null ? `${pixelDepth} bits per pixel` : 'Loading...'}</p>
    </>
  )
}

export default Example