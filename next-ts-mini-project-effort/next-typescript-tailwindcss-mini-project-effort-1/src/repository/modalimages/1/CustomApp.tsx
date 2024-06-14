'use client'
import React, { useState } from 'react'
import Example from './Example';
import UseModal from './UseModal';
const CustomApp = () => {
    const {isOpen,openModal,closeModal} = UseModal();
    const imageUrl = require("../../../assets/img/wallpaper.jpg").default;
  return (
   <>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={openModal}>Open Modal</button>
    <Example imageUrl={imageUrl} isOpen={isOpen} closeModal={closeModal}/>
   </>
  )
}

export default CustomApp

