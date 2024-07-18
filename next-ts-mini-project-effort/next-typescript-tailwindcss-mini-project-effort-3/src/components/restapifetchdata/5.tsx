"use client"
import React, { useEffect, useState } from 'react'
import { APIFiveProps } from './../../interface/interface';
import Image from 'next/image';

const AppFetchData = () => {
    const apiUrl = process.env.NEXT_PUBLIC_API_DUMMYPRODUCT

    const [data,setData] = useState<APIFiveProps[]>([]);
    const [error,setError] = useState<string | null>(null);
    const [loading,setLoading] = useState<boolean>(false);

    const fetchData = async () => {
        setLoading(true)
        try {
            const response = await fetch(apiUrl)
            if(!response.ok){
                throw new Error(`Sorry something went wrong, ${response.status}`)
            }
            const finalData = await response.json();
            if (Array.isArray(finalData.products)) {
                setData(finalData.products);
            } else {
                throw new Error('Unexpected response format');
            }
            console.log(finalData.products);
            
        } catch (error) {
            setError(error.message)
        }
        finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    },[]);

    const handleDel = (id:number) => {
        const newData = data.filter((val) => val.id !== id)
        setData(newData)
    }

  return (
    <>
       {loading && <div>Loading...</div>}
       {error && <div>{error}</div>}
       {data.length > 0 ? (
                <div className="grid-cols-12 grid gap-6">
                    {data.map((val) => (
                        <div key={val.sku} className="col-span-4 card p-6 text-center flex items-center justify-center flex-col shadow rounded"> {/* Use a unique key for mapping */}
                            <h3>{val.title}</h3>
                            <p>{val.description}</p>
                            <p>Price: ${val.price}</p>
                            <p>Brand: {val.brand}</p>
                            <p>Stock: {val.stock}</p>
                            <Image
                                src={val.thumbnail}
                                alt={val.title}
                                width={500}
      height={500}
      alt="Picture of the author" priority
                            />
                            <button onClick={() => handleDel(val.sku)}></button>
                        </div>
                    ))}
                </div>
            ) : (
                !loading && <p>No data available.</p> // Show this if data is empty and not loading
            )}
    </>
  )
}

export default AppFetchData