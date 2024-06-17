"use client"
import React, { useEffect, useState } from "react";
import Banner from "@/components/Banner";
import { useParams,useRouter } from "next/navigation";

const page = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const baseurl = "https://jsonplaceholder.typicode.com/users";
  const {id} = useParams();

  const router = useRouter();

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${baseurl}/${id}`);
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

  useEffect(() => {
    fetchData();
  }, [id]);

  const handleBack = () => {
    router.push('/service');
  }
  
  return (
    <div className="content">
      <Banner
        bannerStyle="bg-cyan-500"
        title="serivce detail"
        desc="Nostrud ex ad exercitation sit ullamco consectetur id quis tempor."
      />
      <div className="container mx-auto">
        <button onClick={handleBack} className="rounded bg-cyan-500 rounded px-5 py-2">Back</button>
        <hr/>
            {data.id} - {data.name}
      </div>
    </div>
  );
};

export default page;
