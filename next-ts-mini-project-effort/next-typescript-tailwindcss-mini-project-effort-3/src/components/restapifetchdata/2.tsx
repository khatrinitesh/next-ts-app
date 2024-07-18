"use client"
import { useEffect, useState } from 'react';

const AppFetchData = () => {
    const apiUrl = process.env.NEXT_PUBLIC_API_DOGBREEDS


    const [dogData, setDogData] = useState(null);

    useEffect(() => {
        // Simulating fetching data (replace with actual data fetching logic)
        const fetchData = async () => {
          // Replace this with your data fetching logic
          const response = await fetch(apiUrl); // Update with your API endpoint
          const data = await response.json();
          setDogData(data.message); // Set the data into state
        };
    
        fetchData();
      }, []);
  return (
    <>
    <h1 className='font-medium text-[32px]'>Dog Breeds and Subcategories</h1>
      {dogData ? (
        <ul>
          {Object.entries(dogData).map(([breed, subcategories]) => (
            <li key={breed}>
              <h2 className='font-bold'>{breed}</h2>
              {subcategories.length > 0 ? (
                <ul>
                  {subcategories.map((sub, index) => (
                    <li key={index} className="border-b border-red">{sub}</li>
                  ))}
                </ul>
              ) : (
                <p>No subcategories</p>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </>
  )
}

export default AppFetchData