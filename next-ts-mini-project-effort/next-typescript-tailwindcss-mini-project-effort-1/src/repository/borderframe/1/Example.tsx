import React from 'react'

// Define the interface for props
interface ImageProps {
    src: string;
    alt: string;
    borderColor?: string;
    borderWidth?: string;
    borderRadius?: string;
  }


const Example:React.FC<ImageProps> = ({src,alt,borderColor = 'black', borderWidth = '2px', borderRadius = 'rounded' }) => {

     // Style object for the image container
  const containerStyle: React.CSSProperties = {
    border: `${borderWidth} solid ${borderColor}`,
    borderRadius: borderRadius === 'rounded' ? 'rounded-lg' : borderRadius,
    overflow: 'hidden', // Ensure image doesn't overflow container
  };

  // Style object for the image
  const imageStyle: React.CSSProperties = {
    width: '100%', // Ensure image fills container
    height: 'auto', // Maintain aspect ratio
    display: 'block', // Prevent whitespace below image
  };
  return (
    <>
      <div style={containerStyle}>
        <img src={src} alt={alt} style={imageStyle} />
        </div>
    </>
  )
}

export default Example