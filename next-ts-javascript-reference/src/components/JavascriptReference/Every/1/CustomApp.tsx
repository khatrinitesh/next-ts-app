import React from 'react'

const CustomApp = () => {

    const numbers:number[] = [1,2,3,4,5];
    const strings:string[] = ['apple','banana','grape'];
    interface Person{
        name:string;
        age:number;
    }

    const people:Person[] = [
        { name: 'Alice', age: 30 },
        { name: 'Bob', age: 35 },
    ]
  return (
    <>
     <h3 className="font-bold">Array of Numbers</h3>
          <ul>
            {numbers.map(number => (
              <li key={number}>{number}</li>
            ))}
          </ul>

          <h3 className="font-bold">Array of Strings</h3>
          <ul>
            {strings.map(str => (
              <li key={str}>{str}</li>
            ))}
          </ul>

          <h3 className="font-bold">Array of Objects</h3>
          <ul>
            {people.map(person => (
              <li key={person.name}>
                {person.name}, {person.age}
              </li>
            ))}
          </ul></>
  )
}

export default CustomApp