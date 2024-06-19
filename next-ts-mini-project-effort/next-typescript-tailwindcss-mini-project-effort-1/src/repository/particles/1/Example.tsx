"use client"
import React from "react";
import Image from "next/image";

const Example = () => {
  return (
    <>
      <useParticles />
    </>
  );
};

export default Example;

interface ParticlesConfig {
    params: ParticlesParams;
    updateParams: (params: ParticlesParams) => void;
  }
  
  const useParticles = (): ParticlesConfig => {
    const [params, setParams] = useState<ParticlesParams>({
      particles: {
        number: {
          value: 80,
        },
        size: {
          value: 3,
        },
      },
      interactivity: {
        events: {
          onhover: {
            enable: true,
            mode: "repulse",
          },
        },
      },
    });
  
    const updateParams = (newParams: ParticlesParams) => {
      setParams(newParams);
    };
  
    return { params, updateParams };
  };