"use client"
import React, { useState,useEffect  } from "react";

const Example = () => {
  return (
    <>
    <ResultComponent/>
    </>
  )
};

export default Example;

interface Post {
  id: number;
  title: string;
  body: string;
}

const ResultComponent: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        const timer = setInterval(() => {
            let i = 0;
            while(i<5){
                setCount(prevC => prevC + 1)
                i++;
            }
        },1000);

        return () => {
            clearInterval(timer);
        }
    },[]);  // Empty dependency array to run effect only once on component mount
 
  return (
    <>
      <h1>Count: {count}</h1>
    </>
  );
};
