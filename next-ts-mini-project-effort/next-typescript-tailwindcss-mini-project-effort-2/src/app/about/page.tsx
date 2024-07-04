import React from "react";
import Banner from "@/components/Banner";

// define an interface for the items
interface Item {
  id: number;
  name: string;
  score: number;
}

const About = () => {
  // Example array of items with the defined type
  const items: Item[] = [
    { id: 1, name: "Alice", score: 85 },
    { id: 2, name: "Bob", score: 92 },
    { id: 3, name: "Charlie", score: 73 },
    { id: 4, name: "Diana", score: 98 },
    { id: 5, name: "Eve", score: 80 },
  ];

  // Example arrays of items
  const array1: Item[] = [
    { id: 1, name: "Alice", score: 85 },
    { id: 2, name: "Bob", score: 92 },
  ];

  const array2: Item[] = [
    { id: 3, name: "Charlie", score: 73 },
    { id: 4, name: "Diana", score: 98 },
  ];

  const array3: Item[] = [
    { id: 5, name: "Eve", score: 80 },
    { id: 1, name: "Alice", score: 90 }, // Duplicate id with updated score
  ];
  const concatenatedArray: Item[] = [...array1, ...array2, ...array3];
  // Filter even scores
  const evenScores2 = items.filter((item) => item.score % 2 === 0);

  const scores = [85, 92, 73, 98, 80];
  const evenScores = scores.filter((num) => num % 2 === 0);

  const sideLengths = [5, 6, 7];
  const areas = sideLengths.map((num) => num * num);

  const nestedGroceries = [
    ["Apples", ["Red", "Green"]],
    ["Milk", ["Whole", "2%"]],
  ];
  const flatGroceries = nestedGroceries.flat();

  const guestList = ["Alice", "Bob", "Charlie", "Alice"];
  const uniqueGuestList = [...new Set(guestList)];

  const age = 18;
  const message = age >= 18 ? "Welcome!" : "Sorry, not yet.";

  const str = "Hello, world!";
  const reversedStr = str.split("").reverse().join("");

  const user = { name: "Alice", age: 30 };
  const hasEmail = "email" in user;

  const greet = (name = "Guest") => `Hello, ${name}!`;

  const numbers = [1, 0, null, 3];
  const compactNumbers = numbers.filter(Boolean);

  const prop = "score";
  const person = { [prop]: 90 };

  // Merge properties of objects with the same id
  const mergedArray = concatenatedArray.reduce((acc, current) => {
    const existingItem = acc.find((item) => item.id === current.id);
    if (existingItem) {
      // Merge the properties
      existingItem.score = current.score; // For example, update the score
    } else {
      acc.push(current);
    }
    return acc;
  }, [] as Item[]);
  return (
    <>
      <div className="content">
        <Banner
          title="About"
          desc="Laboris id labore adipisicing occaecat elit."
        />
        <div className="container mx-auto">
          {/* <div className="blockContent border-1 border-b">
            <h3 className="font-bold">Even Score</h3>
            <span>{evenScores.join(', ')}</span>
          </div>
          <div className="blockContent border-1 border-b">
            <h3 className="font-bold">Areas</h3>
            <span>{areas.join(', ')}</span>
          </div>
          <div className="blockContent border-1 border-b">
            <h3 className="font-bold">Areas</h3>
            <span>{flatGroceries}</span>
          </div>
          <div className="blockContent border-1 border-b">
            <h3 className="font-bold">Unique Elements (No Duplicates Allowed!)</h3>
            <span>{uniqueGuestList.join(', ')}</span>
          </div>
          <div className="blockContent border-1 border-b">
            <h3 className="font-bold">Shorthand Conditionals</h3>
            <span>{message}</span>
          </div>
          <div className="blockContent border-1 border-b">
            <h3 className="font-bold">String Reversal</h3>
            <span>{reversedStr}</span>
          </div>
          <div className="blockContent border-1 border-b">
            <h3 className="font-bold">Object Property Existence</h3>
            <span>{hasEmail}</span>
          </div>
          <div className="blockContent border-1 border-b">
            <h3 className="font-bold">Default Parameter Values</h3>
            <span>{greet()}</span>
          </div>
          <div className="blockContent border-1 border-b">
            <h3 className="font-bold">Compact Arrays</h3>
            <span>{compactNumbers}</span>
          </div>
          <div className="blockContent border-1 border-b">
            <h3 className="font-bold">Compact Arrays</h3>
            <span>{compactNumbers}</span>
          </div>
          <div className="blockContent border-1 border-b">
            <h3 className="font-bold">Even Scores</h3>
            <ul>
            {evenScores2.map(item => (
              <li key={item.id}>
                {item.name}: {item.score}
              </li>
            ))}
          </ul>
          </div>
          <div className="blockContent border-1 border-b">
            <h3 className="font-bold">Concat</h3>
            {mergedArray.map((val,id) => (
              <div key={id}>
                <h3><strong>Name:</strong> {val.name}</h3>
                <p><strong>Score:</strong> {val.score}</p>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </>
  );
};

export default About;
