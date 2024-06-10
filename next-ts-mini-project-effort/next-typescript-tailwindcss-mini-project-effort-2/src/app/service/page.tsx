"use client";
import Banner from "@/components/Banner";
import { log } from "console";
import Link from "next/link";
import React, { useState, useEffect } from "react";

interface User{
  id:number;
  name:string;
  email:string;
  username:string;
}


const ServiceList = () => {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const baseurl = "https://jsonplaceholder.typicode.com/users";

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${baseurl}`);
      if (!response) {
        throw new Error(`sorry something went wrong ${response.status}`);
      }
      const finalData = await response.json();
      setData(finalData)
      setLoading(false);
      console.log(finalData);
    } catch (error: any) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDel  = (id:number)=> {
    const newData = data.filter((item) => item.id !== id)
    setData(newData)
  }

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <>
      <div className="content">
        <Banner
          title="ServiceList"
          desc="Officia do et anim velit irure cupidatat do non."
        />
        <div className="container mx-auto">
          {data.map((val, id) => (
            <div  key={val.id} className="border-[red] block border p-2 shadow not-last-child-margin">
            <Link href={`/service/${val.id}`}>
              <h3>{val.name}</h3>
              <p>{val.username}</p>
              <p>{val.email}</p>
            </Link>
            <button onClick={() => handleDel(val.id)}>&times;</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServiceList;
