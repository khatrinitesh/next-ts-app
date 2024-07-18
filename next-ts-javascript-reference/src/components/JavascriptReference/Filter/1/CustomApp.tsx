"use client"
import React, { useState } from "react";

interface Item {
    id:number;
    name:string;
}


const CustomApp:React.FC = () => {

    const [items,setItems] = useState<Item[]>([
        { id: 1, name: 'Apple' },
        { id: 2, name: 'Banana' },
        { id: 3, name: 'Orange' },
        { id: 4, name: 'Grapes' },
        { id: 5, name: 'Mango' },
    ]);

    const filterArray = () => {
        const filteredArray = items.filter((val) => val.name === 'Apple')
        setItems(filteredArray)
        console.log(filteredArray);
    }

  return (
    <>
    <button onClick={filterArray}>Filter Array</button>
    {items.map((val,id) => (
        <div key={id}>
            <h3>{val.name}</h3>
        </div>
    ))}
    <br />
    <hr/>
    </>
  );
};

export default CustomApp;
