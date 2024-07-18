"use client"
import React, { useEffect, useState } from 'react';

interface UserProps{
    id:number;
    title:string;
}

const UsersPage = () => {
    const [data, setData] = useState<UserProps[]>([]); // Initialize as empty array
    const [loading,setLoading] = useState(false);
    const [error,setError]= useState('');

    // const apiUrl = process.env.NEXT_PUBLIC_POSTS
    const baseApiUrl = 'https://mocki.io/v1/2acb3991-e75e-4dde-bf35-69e128cd77ab'

  
    useEffect(() => {
        const fetchData  = async () => {
          try {
            setLoading(true)
            const response = await fetch(baseApiUrl)
            if(!response.ok){
              throw new Error('sorry something went wrong')
            }
            const finalData = await response.json();
            setData(finalData)
            console.log(finalData)
          } 
          catch (error) {
            setError(error.message)
          }

          finally{
            setLoading(false)
          }
        }
        fetchData();
      },[baseApiUrl]);
  return (
    <>
    {data.map((item) => (
        <div key={item.id}>
            <h3>{item.title}</h3>
        </div>
    ))}
    </>
  )
}

export default UsersPage