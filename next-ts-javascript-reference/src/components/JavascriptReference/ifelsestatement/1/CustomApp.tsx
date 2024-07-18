"use client"
import React, { useState } from 'react'

interface Person {
    name:string;
    isAdmin:boolean;
}

const CustomApp:React.FC<{person:Person}> = ({person}) => {
    let greeting:JSX.Element;
    if(person.isAdmin){
        greeting = <h2>Welcome back, {person.name}! You have admin privileges.</h2>;
    }
    else{
        greeting = <h2>Welcome, {person.name}!</h2>;
    }
  return (
    <>
        {greeting}
        {person.isAdmin ? <p>You have admin access to the system.</p> : <p>You have regular user access.</p>}
    
    </>
  )
}

export default CustomApp
