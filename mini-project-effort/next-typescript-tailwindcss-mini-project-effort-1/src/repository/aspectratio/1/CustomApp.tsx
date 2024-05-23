import React from 'react';
import AspectRatio from './AspectRatio';

const CustomApp = () => {

    const data = [
        {src:'https://static.vecteezy.com/system/resources/thumbnails/025/067/762/small_2x/4k-beautiful-colorful-abstract-wallpaper-photo.jpg',alt:'test',aspectWidth:16,aspectHeight:9}
    ]
  return (
    <>
     <h1 className="text-2xl font-bold mb-4">Aspect Ratio Image Example</h1>
        {data.map((val,index) => (
            <div key={index}>
                <AspectRatio src={val.src} alt={val.alt} aspectWidth={val.aspectWidth} aspectHeight={val.aspectHeight}/>
            </div>
        ))}
    </>
  )
}

export default CustomApp