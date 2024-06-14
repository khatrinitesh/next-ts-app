import React, { useState } from 'react'

const UseCounter = (initialValue:number=0) => {
    const [count,setCount] = useState(initialValue);

    const increment = () => {
        setCount(prevCount => prevCount + 1)
    }
    const decrement = () => {
        setCount(prevCount => prevCount - 1)
    }


  return {count,increment,decrement}
}

export default UseCounter