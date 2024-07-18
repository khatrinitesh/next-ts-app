import React from 'react'

const CustomApp = () => {
    const numbers:number[] = [1,2,3,4,5];

    //example 1: Sum of an Array of Numbers
    const resultNum1 = numbers.reduce((a,b) => a+b)

    // example 2: Product of an Array of Numbers
    const resultNum2 = numbers.reduce((a,b) => a*b);

    // example 3: Flatten an Array of Arrays
    const nestedArray: number[][] = [[1, 2], [3, 4], [5]];
    const flattenedArray = nestedArray.reduce((a,b) => {
        return a.concat(b);
    },[]);

    // example 4: Counting Instances of Values in an Object
//     const names: string[] = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

// interface NameCount {
//   [key: string]: number;
// }

// const countedNames: NameCount = names.reduce((accumulator, currentValue) => {
//   if (accumulator[currentValue]) {
//     accumulator[currentValue]++;
//   } else {
//     accumulator[currentValue] = 1;
//   }
//   return accumulator;
// }, {} as NameCount);

// example 5: Reducing an Array of Objects
interface Product {
    name: string;
    price: number;
  }
  const products:Product[] = [
    { name: 'Laptop', price: 1000 },
    { name: 'Phone', price: 500 },
    { name: 'Tablet', price: 700 }
  ]
  const totalPrice:number = products.reduce((accumulator,product) => {
    return accumulator + product.price
  },0)

    
  return (
    <>
    {resultNum1}
    <br />
    {resultNum2}
    <br />
    {flattenedArray}
    <br />
    {/* {countedNames} */}
    <br />
    {totalPrice}
    </>
  )
}

export default CustomApp