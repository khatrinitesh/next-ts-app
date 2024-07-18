"use client"
import React, { useRef, useEffect, useState } from 'react';

const Example = () => {
    const depth  = window.screen.colorDepth;
  return (
    <>
       <p>Color depth: {depth} bits per pixel</p>       
    </>
  )
}

export default Example