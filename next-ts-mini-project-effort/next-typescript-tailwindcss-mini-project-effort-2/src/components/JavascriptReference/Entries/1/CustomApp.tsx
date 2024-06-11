import React from 'react'

interface MyObject {
    [key:string]:string;
  }

const CustomApp = () => {

    // Define an object
  const myObject: MyObject = {
    name: 'John',
    age: '30',
    city: 'New York',
  };


  const objectentries = Object.entries(myObject);
  return (
    <>
     <ul>
            {objectentries.map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {value}
              </li>
            ))}
          </ul>
          <br />
          <hr/>
    </>
  )
}

export default CustomApp