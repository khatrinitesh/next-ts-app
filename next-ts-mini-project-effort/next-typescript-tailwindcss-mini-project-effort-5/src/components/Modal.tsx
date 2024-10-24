"use client"
import { ModalProps } from '@/types';
import React, { useState } from 'react';

const Modal:React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {

    if (!isOpen) return null;

  return (
    <>
       <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <div className="flex justify-between items-center border-b pb-4">
          <h2 className="text-lg font-bold">{title}</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-900">
            &times;
          </button>
        </div>
        <div className="mt-4">
          {children}
        </div>
      </div>
    </div>
    </>
  );
}

export default Modal;
