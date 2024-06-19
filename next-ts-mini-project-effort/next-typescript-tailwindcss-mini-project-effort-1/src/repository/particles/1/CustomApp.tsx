import React from 'react';
import Example from './Example';
import Wallpaper from "../../../assets/img/wallpaper.jpg";
import Particles from "react-particles-js";

const CustomApp = () => {
    const { params, updateParams } = useParticles();
  return (
    <div>
        <Particles
        params={params}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      />
      <div className="flex items-center justify-center h-full">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() =>
            updateParams({
              particles: {
                number: {
                  value: 150,
                },
                size: {
                  value: 4,
                },
              },
              interactivity: {
                events: {
                  onhover: {
                    enable: true,
                    mode: "bubble",
                  },
                },
              },
            })
          }
        >
          Change Particle Settings
        </button>
      </div>
    </div>
  )
}

export default CustomApp