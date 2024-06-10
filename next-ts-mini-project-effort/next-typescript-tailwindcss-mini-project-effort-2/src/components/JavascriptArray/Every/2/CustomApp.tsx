import React from "react";

const CustomApp = () => {
  const numbers: number[] = [1, 2, 3, 4, 5];
  const strings: string[] = ["apple", "banana", "grape"];

  interface Person {
    name: string;
    age: number;
  }

  const family: Person[] = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 35 },
  ];

  return (
    <>
      {numbers.map((val, index) => (
        <div key={index}>
          <h3>{val}</h3>
        </div>
      ))}

      {strings.map((val, index) => (
        <div key={index}>
          <h3>{val}</h3>
        </div>
      ))}

      <table>
        {family.map((val, index) => (
          <tr key={index}> 
            <td>{val.name}</td>
            <td>{val.age}</td>
          </tr>
        ))}
      </table>
    </>
  );
};

export default CustomApp;
