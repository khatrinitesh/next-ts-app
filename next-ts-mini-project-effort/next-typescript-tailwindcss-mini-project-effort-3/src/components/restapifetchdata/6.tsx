"use client";
import { APISixProps } from "@/interface/interface";
import React, { useEffect, useState } from "react";

const AppFetchData = () => {
  const apiurl = process.env.NEXT_PUBLIC_API_OBJECTSDATA;
  const [data, setData] = useState<APISixProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(apiurl);
      if (!response.ok) {
        throw new Error(`Sorry something went wrong, ${response.status}`);
      }
      const finalData = await response.json();
      setData(finalData);
      console.log(finalData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [apiurl]);

  return (
    <>
       {data.length > 0 ? (
        data.map((val) => (
          <div key={val.id}>
            <h3>{val.name}</h3>
            {Array.isArray(val.data) && val.data.length > 0 ? (
              val?.data?.map((item, index) => (
                <div key={index} className="bg-cyan-100">
                  <p>Capacity: {item.Capacity}</p>
                  <p>Generation: {item.Generation}</p>
                  <p>Price: {item.Price}</p>
                </div>
              ))
            ) : (
              <p>No data available for this item.</p>
            )}
          </div>
        ))
      ) : (
        <p>No data available.</p>
      )}
    </>
  );
};

export default AppFetchData;
