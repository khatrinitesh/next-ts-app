'use client'
import React, { useState } from 'react';
import { ModalImageProps } from './interface';
import UseModal from './UseModal';
import Image from 'next/image';
import UseCounter from './UseCounter';

const Example:React.FC<> = ({}) => {
    const {count,increment,decrement} = UseCounter()
    return(
      <>
     <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-200 p-4 rounded-md">
        <h1 className="text-2xl font-bold mb-4">Counter</h1>
        <div className="flex items-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={decrement}>-</button>
          <span className="text-xl">{count}</span>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2" onClick={increment}>+</button>
        </div>
      </div>
    </div>
      </>
    )
}

export default Example
