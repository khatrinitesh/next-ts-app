import React from 'react'

interface ObjectExample {
    [key:string]:string;
}

const CustomApp = () => {
    // define an object
    const myObject:ObjectExample = {
        name:'sachin',
        score:44,
        word:'happy'
    }

    const objectEntries = Object.entries(myObject)
  return (
    <div>
        {objectEntries.map(([key,value]) => (
            <div key={key}>
                {value}
            </div>
        ))}
    </div>
  )
}

export default CustomApp