"use client"
import Banner from '@/components/Banner'
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useState,useEffect } from 'react';

const Service = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const baseurl = "https://jsonplaceholder.typicode.com/users";
  const {id} = useParams();

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${baseurl}`);
      if (!response.ok) {
        throw new Error(`Sorry something went wrong ${response.status}`);
      }
      const result = await response.json();
      setData(result);
      console.log(result);
      setLoading(false);
    } 
    catch (error) {
      setError(`${error.message}`);
      setLoading(false);
    }
  };

  const handleDel = (id) => {
    const newData = data.filter((val) => val.id !== id)
    setData(newData);
    console.log(newData);
    
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='content'>
      <Banner bannerStyle="bg-cyan-500" title="service" desc="Nostrud ex ad exercitation sit ullamco consectetur id quis tempor."/>
      <div className="container mx-auto">
      {data.map((val) => (
        <div key={val.id} className="shadow p-2 border mb-2">
          <Link href={`/service/${val.id}`}>
          <h3>{val.name}</h3>
          <h3>{val.email}</h3>
          <h3>{val.username}</h3>
          </Link>
          <button onClick={() => handleDel(val.id)}>Delete</button>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Service