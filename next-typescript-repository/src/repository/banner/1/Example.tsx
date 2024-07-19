import React from 'react'

interface BannerProps {
    message:string;
    btnText:string;
    onBtnClick:() => void;
}

const Example:React.FC<BannerProps> = ({message,btnText,onBtnClick}) => {
  return (
    <>
     <div className="bg-blue-500 text-white p-4 rounded-lg shadow-lg flex justify-between items-center">
      <span className="text-lg font-semibold">{message}</span>
      <button
        onClick={onBtnClick}
        className="bg-white text-blue-500 px-4 py-2 rounded-lg shadow-md hover:bg-gray-200 transition-colors"
      >
        {btnText}
      </button>
    </div>
    </>
  )
}

export default Example