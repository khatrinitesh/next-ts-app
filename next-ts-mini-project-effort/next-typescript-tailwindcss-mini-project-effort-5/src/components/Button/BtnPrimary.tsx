import React from 'react'
import { BtnPrimaryProps } from './../../interface/interface';

const BtnPrimary:React.FC<BtnPrimaryProps> = ({label,onClick}) => {
  return (
    <>
    <button onClick={onClick} className='bg-black text-white rounded px-2 py-2'>{label}</button></>
  )
}

export default BtnPrimary