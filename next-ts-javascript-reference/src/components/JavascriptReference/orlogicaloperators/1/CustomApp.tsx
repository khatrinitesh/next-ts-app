"use client"
import React, { useState } from 'react'

interface Person{
    id:1,
    name:string;
}

const CustomApp:React.FC = () => {
    const [text,setText] = useState(true)
    const [person,setPerson]= useState<Person[]>([])

    const addPerson = () => {
        setPerson([
            ...person,
            {
                id:person.length +1,
                name:`Person ${person.length + 1}`
            }
        ])
    }
  return (
    <>
    {text && (<><Example/></>)}
    {person.map((val) => (
        <div key={val.id}>{val.name}</div>
    ))}
     <button onClick={addPerson}>Add Person</button>
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