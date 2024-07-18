import React from 'react'

const CustomApp = () => {
    const Originalnumbers:number[] = [1,2,3,4,5];
    
    const reverseNum:number[] = Originalnumbers.slice().reverse();

    const originalObject: { [key: string]: any } = {
        name: "Alice",
        age: 30,
        city: "Wonderland"
      };

    const reversedObject: { [key: string]: any } = Object.fromEntries(
        Object.entries(originalObject).reverse()
      );
    
  return (
    <>
    {reverseNum}
    <br />
    {reversedObject}
    </>
  )
}

export default CustomApp