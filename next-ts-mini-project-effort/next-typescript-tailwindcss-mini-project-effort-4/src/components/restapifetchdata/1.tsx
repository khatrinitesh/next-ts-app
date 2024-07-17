import { useEffect, useState } from 'react';

const AppFetchData = () => {

    const apiUrl = process.env.NEXT_PUBLIC_API_CATFACT

  const [data,setData] = useState([]);
  const [loading,setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${apiUrl}`)
      if(!response.ok){
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
      const resultData = await response.json();
      setData(resultData);
      console.log(resultData)
    } catch (error) {
      setError(error.message)
    }
    finally{
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchData();
  },[]);
  return (
    <>
     {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data.map((item) => (
        <div key={item._id}>
          <h3>{item.source}</h3>
          <p>{item.updatedAt}</p>
        </div>
      ))}
    </>
  )
}

export default AppFetchData