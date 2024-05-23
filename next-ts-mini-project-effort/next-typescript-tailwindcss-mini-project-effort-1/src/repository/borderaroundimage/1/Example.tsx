import React from 'react'

interface ImageProps {
    src: string;
    alt: string;
    title: string;
  }


const Example:React.FC<ImageProps> = ({src,alt}) => {
  return (
    <>
      <div className="border border-gray-400 rounded-md p-2">
        <img src={src} alt={alt} className="rounded-md" />
        </div>
    </>
  )
}

export default Example