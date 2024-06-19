import React from 'react';
import Example from './Example';
import Wallpaper from "../../../assets/img/wallpaper.jpg";

const CustomApp = () => {
  return (
    <div>
        <Example imageUrl={Wallpaper} speed={1}/>
    </div>
  )
}

export default CustomApp