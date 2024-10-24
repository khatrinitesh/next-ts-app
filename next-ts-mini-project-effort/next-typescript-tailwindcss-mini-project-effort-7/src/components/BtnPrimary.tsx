import { BtnProps } from '@/interface';
import React from 'react';

const BtnPrimary:React.FC<BtnProps> = ({onClick, children, className }) => {
  return (
    <>
       <button onClick={onClick} className={`${className} bg-black text-white px-[20px] py-[10px] text-[16px]`}>
            {children}
        </button>
    </>
  );
}

export default BtnPrimary;
