"use client"
import Banner from "@/components/Banner";
import { log } from "console";
import { useParams, usePathname,useRouter } from "next/navigation";
import React, { useState,useEffect } from "react";

interface User{
    id:number;
    name:string;
    email:string;
    username:string;
}

const ServiceDetail = () => {
    const [data, setData] = useState<User | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const baseurl = "https://jsonplaceholder.typicode.com/users";
    const { id } = useParams();
    const router = useRouter();

    const btnBack = () => {
        router.push('/service');
    }
  
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${baseurl}/${id}`);
        if (!response.ok) {
          throw new Error(`Sorry, something went wrong: ${response.status}`);
        }
        const finalData = await response.json();
        setLoading(false);
        setData(finalData);
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, [name]);
  

  if(loading){
    return(
      <div>Loading...</div>
    )
  }
  if(error){
    return(
      <div>{error}</div>
    )
  }
  if (!data) {
    return <div>No data found</div>;
  }
  return (
    <>
      <div className="content">
        <Banner
          title="ServiceDetail"
          desc="Officia do et anim velit irure cupidatat do non."
        />
        <div className="container mx-auto">
        <button onClick={btnBack} className="bg-blue-500 text-white rounded px-5 py-2">Back</button>
        <div className="p-4 border-b border-gray-200">
          <h3 className="text-xl font-bold">{data.name}</h3>
          <p>{data.username}</p>
          <p>{data.email}</p>
        </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetail;
