import React from 'react'


// Define the interface for BrowserWindowProps
interface BrowserWindowProps {
    title: string;
    url: string;
    width: number;
    height: number;
  }

const Example:React.FC<BrowserWindowProps> = ({title,url,width,height}) => {
    
  return (
    <>
     <div className="border rounded-lg shadow-lg p-4 w-max">
      <div className="flex justify-between items-center mb-2">
        <span className="font-bold">{title}</span>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
      </div>
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <iframe
          title={title}
          src={url}
          width={width}
          height={height}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
    </>
  )
}

export default Example