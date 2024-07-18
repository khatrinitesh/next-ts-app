import React from 'react'

const CustomApp = () => {
    let numbers: number[] = [1, 2, 3];
    // add multiple numbers
    const finalnumbers = numbers.push(4,5)

    let fruits: string[] = ['apple', 'banana'];
    fruits.push('grape','pineapple')
    const resultFruit = fruits.join(", ")

    interface Person{
        name:string;
        age:number;
    }

    let people:Person[] = [
        { name: 'Alice', age: 30 },
        { name: 'Bob', age: 25 }
    ]

    const resultPeople = people.push({name:'michael',age:45})

    
    
    
  return (
    <>
    {finalnumbers}
    <br />
    {resultFruit}
    <br />
    {resultPeople}
    </>
  )
}

export default CustomApp