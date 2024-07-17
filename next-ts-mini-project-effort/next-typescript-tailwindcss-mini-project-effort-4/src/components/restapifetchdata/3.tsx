"use client"
import React, { useEffect, useState } from 'react'

const AppFetchData = () => {
    const [data,setData] = useState([]);  // Initialize with null
    const [loading,setLoading] = useState(false);// Set true initially to show loading state
    const [error,setError] = useState(null);

    const apiUrl = process.env.NEXT_PUBLIC_API_FOODFACTS

    const fetchData = async () => {
        setLoading(true)
        try {
            const response = await fetch(apiUrl)
            if(!response.ok){
                throw new Error(`sorry something went wrong,${response.status}`);
            }
            const finaldata = await response.json()
            setData(finaldata.product || {});
            console.log(finaldata.product);
            
        } catch (error) {
            setError(error.message)
        }
        finally{
            setLoading(false)
        }
    }
    useEffect(() => {
        setData()
    },[apiUrl])
  return (
    <>
        {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data ? (
        <div>
          <h1>Product Details</h1>
          <p><strong>Name:</strong> {data.product_name || 'Not available'}</p>
          <p><strong>Brand:</strong> {data.brands || 'Not available'}</p>
          <p><strong>Quantity:</strong> {data.quantity || 'Not available'}</p>
          {/* Add more fields based on the actual API response */}
        </div>
      ) : (
        !loading && <p>No data available.</p> // Show this if data is null and not loading
      )}
    </>
  )
}

export default AppFetchData