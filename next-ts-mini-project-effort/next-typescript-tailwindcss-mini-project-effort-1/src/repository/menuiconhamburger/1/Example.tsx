'use client'
import React, { useState } from 'react'

const Example = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return {
      isOpen,
      toggleMenu,
    };
}

export default Example
