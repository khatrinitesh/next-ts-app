"use client"
import React, { useState } from 'react'


interface Person {
    name:'test',
    age:34
}

const CustomApp:React.FC = () => {
    const person:Person = {
        name:'asdad',
        age:40
    }

    const personDetails:JSX.Element[] = [];
    for(const property  in person) {
        personDetails.push(
            <div key={property}>
                <strong>{property}:</strong> {person[property]}
            </div>
        )
    }
   
  return (
    <>
        <h2>Person Details</h2>
            {/* Rendering the array of JSX elements */}
            {personDetails}
    
    </>
  )
}

export default CustomApp
