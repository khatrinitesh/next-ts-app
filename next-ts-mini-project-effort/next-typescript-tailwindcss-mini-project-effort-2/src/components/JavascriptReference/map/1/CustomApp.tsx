import React from 'react'

const CustomApp = () => {
const numbers:number[] =[1,2,3,4,5]
const doubled:number[] = numbers.map((val) => val * 2);

const obj: { [key: string]: number } = { a: 1, b: 2, c: 3 };
const mappedObj: { [key: string]: number } = Object.keys(obj).reduce((acc, key) => {
    acc[key] = obj[key] * 2;
    return acc;
  }, {} as { [key: string]: number });
  return (
    <>
   {mappedObj}
    </>
  )
}

export default CustomApp