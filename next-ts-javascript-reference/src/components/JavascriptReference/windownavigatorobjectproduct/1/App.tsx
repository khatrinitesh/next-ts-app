"use client"
import React, { useState ,useEffect } from 'react';


const CustomApp:React.FC = () => {
   const [product,setProduct] = useState<string | null>(null);

   useEffect(() => {
    setProduct(window.navigator.product)
   },[]);
  return (
    <>
      {product}
    </>
  )
}

export default CustomApp