import { log } from 'console';
import React from 'react'

const CustomApp = () => {
    const originalArray: number[] = [1, 2, 3, 4, 5];
   const isGreaterThanThree:boolean = originalArray.some((num) => num > 3);
   console.log(isGreaterThanThree);

   const person:{[key:string]:number} = {
    age: 25, weight: 70, height: 18
   }

   const hasValueGreaterThanHundred:boolean = Object.values(person).some((val) => val > 10);

   
    
  return (
    <>
    OriginalArray: {originalArray}
    <br />
    isGreaterThanThree: {isGreaterThanThree}
    <br />
    {hasValueGreaterThanHundred}
    </>
  )
}

export default CustomApp