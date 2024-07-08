"use client"
import React, { useRef, useEffect, useState } from 'react';

const Example = () => {
    const elementRef = useRef<HTMLDivElement>(null);
    const [outerWidth, setOuterWidth] = useState<number | null>(null);

    useEffect(() => {
        if (elementRef.current) {
            const width = elementRef.current.getBoundingClientRect().width;
            setOuterWidth(width);
        }
    }, []);
  return (
    <>
         <div ref={elementRef} style={{ padding: '120px', border: '1px solid black' }}>
            <p>Content inside</p>
            {outerWidth && <p>Outer height: {outerWidth}px</p>}
        </div>
    </>
  )
}

export default Example