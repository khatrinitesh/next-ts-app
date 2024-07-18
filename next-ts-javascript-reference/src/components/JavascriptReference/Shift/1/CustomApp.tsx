import React from 'react'

const CustomApp = () => {
    const originalArray: number[] = [1, 2, 3, 4, 5];
    const resultArray = originalArray.shift();

    const originalObject: { [key: string]: any } = {
        name: "Alice",
        age: 30,
        city: "Wonderland"
    };
    const entries:[string,any][] = Object.entries(originalObject);
    entries.shift();

    const updatedObject:{[key:string]:any} = Object.fromEntries(entries);
    
  return (
    <>
    OriginalArray: {originalArray}
    <br />
    ResultArray: {resultArray}
    <br />
    {updatedObject}
    </>
  )
}

export default CustomApp