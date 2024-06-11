import React from 'react'

const CustomApp = () => {
    const originalArray: number[] = [1, 2, 3, 4, 5];
    const slicedArray = originalArray.slice(1,3);

    const person = {
        name: "Alice",
        age: 30,
        city: "Wonderland"
    }
    
    const {name,age,city} = person;
    const resultPerson = {name,city}
    
  return (
    <>
    OriginalArray: {originalArray}
    <br />
    slicedArray: {slicedArray}
    <br />
    {JSON.stringify(resultPerson)}
    </>
  )
}

export default CustomApp