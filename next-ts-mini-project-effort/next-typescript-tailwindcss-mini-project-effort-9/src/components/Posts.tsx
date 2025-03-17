'use client'
import React, { useEffect, useState } from 'react';

const Posts:React.FC = () => {
    const [posts,setPossts] = useState<any[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(process.env.NEXT_PUBLIC_API_URL)
            const data = await response.json();
            setPossts(data);
        };

        fetchPosts()
    },[]);

    const btnDel = (id:number) => {
        const newData = posts.filter((val) => val.id !== id)
        setPossts(newData)
    }
  return (
    <>
      <h1 className='font-bold text-[32px]'>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title} <button onClick={() => btnDel(post.id)}>Remove</button></li>
        ))}
      </ul>
    </>
  );
}

export default Posts;
