import React from 'react'

const CustomApp = () => {
    const mixedArray = Array.of<number | string | boolean>(1,'hello',true,3.14)
    // basic usuage
    // const num = 123.456;
    // const fixedNum = num.toFixed(2);

    // no decimal places
    // const num = 123.456;
    // const fixedNum = num.toFixed(0);

    // more decimal places than the original number
    // const num = 123.4;
    // const fixedNum = num.toFixed(3);

    // using toFixed on small numbers
    // const num = 0.000456;
    // const fixedNum = num.toFixed(5);

    //  Using toFixed() with Negative Values
    const num = -123.456;
    const fixedNum = num.toFixed(2);
    
  return (
    <>
    {mixedArray}
    <br />
    {num} - {fixedNum}
    </>
  )
}

export default CustomApp