import React from 'react'

interface BannerProps {
    message:string;
    btnText:string;
    onBtnClick:() => void;
}

const Example:React.FC<BannerProps> = ({message,btnText,onBtnClick}) => {
  return (
    <>
     <header className="bg-blue-500 text-white text-center py-10">
      <h1 className="text-5xl font-bold">Big Header</h1>
    </header>
    </>
  )
}

export default Example