'use client'
import React, { useState } from 'react';
import { ModalImageProps } from './interface';
import UseModal from './UseModal';
import Image from 'next/image';

const Example:React.FC<ModalImageProps> = ({imageUrl, isOpen, closeModal}) => {
    return(
      <>
      <div className={`modal ${isOpen ? 'block' : 'hidden'} fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50`}>
      <div className="modal-container p-4 mx-auto my-20 max-w-3xl">
        <div className="bg-white rounded-lg shadow-lg">
          <button className="modal-close absolute top-0 right-0 cursor-pointer p-4" onClick={closeModal}>
            <svg className="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
              <path d="M10.964 9l5.793-5.793a1 1 0 0 0-1.414-1.414L9 7.586 3.207 1.793A1 1 0 0 0 1.793 3.207L7.586 9l-5.793 5.793a1 1 0 0 0 1.414 1.414L9 10.414l5.793 5.793a1 1 0 0 0 1.414-1.414L10.414 9z"/>
            </svg>
          </button>
          <div className="modal-content">
            <Image src={imageUrl} alt="Modal Image" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
      </>
    )
}

export default Example
