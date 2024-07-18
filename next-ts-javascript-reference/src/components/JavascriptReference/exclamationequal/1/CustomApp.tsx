"use client"
import React, { useState } from 'react'

interface Person{
    id:1,
    name:string;
    score:number;
}

const CustomApp:React.FC = () => {
    const [text,setText] = useState(true)

    const person:Person[] = [
        {id:1,name:'sachin',score:450},
        {id:2,name:'rahul',score:500},
        {id:3,name:'laxman',score:650},
        {id:4,name:'rahul',score:750},
        {id:5,name:'ajay',score:1100},
    ]
    const filteredPerson = person.filter((val) =>  val.name !== 'sachin' &&  val.name !== 'ajay')

    const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const combinedquarterly = [...q1,...q2,...q3,...q4]
const result = combinedquarterly.join(' 2011\n')
  return (
    <>
    {!text || (<><Example/></>)}

{filteredPerson.map((val) => (
    <div key={val.id}>{val.name} - {val.score}</div>
))}
<br />
<pre style={{fontFamily:'arial'}}>{result}</pre>
    
    </>
  )
}

export default CustomApp

const Example = () => {
    return(
        <>
        it is an example
        </>
    )
}
const Authors = () => {
    return(
        <>
        it is an Authors
        </>
    )
}