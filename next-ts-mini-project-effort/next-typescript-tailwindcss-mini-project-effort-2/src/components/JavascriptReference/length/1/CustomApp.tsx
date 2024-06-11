import React from 'react'

const CustomApp = () => {

    const fruits = ['apples','banana','watermelon']
    const arrayLength = fruits.length;

   const obj:{[key:string]:any} = {
    name:'test',
    age:35
   }
    const objectLength = Object.keys(obj).length
  return (
    <>
    {`Array length: ${arrayLength}`}
    <br />
    {objectLength}
    </>
  )
}

export default CustomApp