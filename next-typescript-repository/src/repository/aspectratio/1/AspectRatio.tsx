import React from 'react'

interface AspectRatioImageProps {
    src: string;
    alt: string;
    aspectWidth: number;
    aspectHeight: number;
  }


const AspectRatio:React.FC<AspectRatioImageProps> = ({src,alt,aspectWidth,aspectHeight}) => {
    const aspectClass = `aspect-w-${aspectWidth} aspect-h-${aspectHeight}`;
  return (
    <div className={aspectClass}>
         <img src={src} alt={alt} className={`object-cover ${aspectClass}`} />
    </div>
  )
}

export default AspectRatio  