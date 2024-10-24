import { ButtonPrimary } from '@/types';
import React from 'react';

const BtnPrimary:React.FC<ButtonPrimary> = ({label,onClick}) => {
  return (
    <>
      <button onClick={onClick} className='bg-red-400 text-white px-6 py-2 rounded-[10px]'>{label}</button>
    </>
  );
}

export default BtnPrimary;
