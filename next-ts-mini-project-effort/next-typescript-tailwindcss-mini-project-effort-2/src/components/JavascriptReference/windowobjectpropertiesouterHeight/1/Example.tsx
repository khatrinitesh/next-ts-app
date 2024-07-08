"use client"
import React, { useRef, useEffect, useState } from 'react';

const Example = () => {
    const elementRef = useRef<HTMLDivElement>(null);
    const [outerHeight, setOuterHeight] = useState<number | null>(null);

    useEffect(() => {
        if (elementRef.current) {
            const height = elementRef.current.getBoundingClientRect().height;
            setOuterHeight(height);
        }
    }, []);
  return (
    <>
         <div ref={elementRef} style={{ padding: '120px', border: '1px solid black' }}>
            <p>Content inside</p>
            {outerHeight && <p>Outer height: {outerHeight}px</p>}
        </div>
    </>
  )
}

export default Example