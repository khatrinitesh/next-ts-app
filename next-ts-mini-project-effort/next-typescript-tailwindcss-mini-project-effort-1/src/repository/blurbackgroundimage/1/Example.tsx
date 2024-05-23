import React from 'react'


interface BlurBgProps{
    imageUrl:string;
    blurAmt?:string; // Optional prop for blur amount
    children:React.ReactNode;  // Optional prop for nested elements
}

const Example:React.FC<BlurBgProps> = ({imageUrl,blurAmt='blur-md',children}) => {
  return (
    <>
      <div className="relative w-full h-full">
      <div 
        className={`absolute inset-0 bg-cover bg-center ${blurAmt}`} 
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="relative z-10 p-6">
        {children}
      </div>
    </div>
    </>
  )
}

export default Example