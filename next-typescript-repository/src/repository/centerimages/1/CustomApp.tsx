"use client"
import React from 'react'
import Example from './Example'

const CustomApp = () => {
  
    const wallpaper = [
        {id:1,src:'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',alt:'wallpaper1'},
        {id:2,src:'https://img.freepik.com/free-photo/snowy-mountain-peak-starry-galaxy-majesty-generative-ai_188544-9650.jpg',alt:'wallpaper2'},
        {id:3,src:'https://img.freepik.com/free-photo/sunset-silhouettes-trees-mountains-generative-ai_169016-29371.jpg',alt:'wallpaper3'},
    ]
  return (
    <>
    <div>
        <Example images={wallpaper} />
    </div> 
    </>
  )
}

export default CustomApp