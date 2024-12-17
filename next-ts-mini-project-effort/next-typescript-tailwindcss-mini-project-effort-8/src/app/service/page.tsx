"use client"
import Banner from '@/components/Banner';
import MainLayout from '@/layout/MainLayout';
import React, { useEffect } from 'react';
import usePostStore from './../../store/usePoststore';

const ServicePage:React.FC = () => {

  const {posts,fetchPosts,isLoading,error,deletePost} = usePostStore()

  useEffect(() => {
    fetchPosts()
  },[fetchPosts])
  if(isLoading){
    return(
      <div>Loading...</div>
    )
  }
  if(error){
    return(
      <div>error: {error}</div>
    )
  }
  return (
    <MainLayout>
    <Banner title="Service" description="Aute eiusmod nulla ut culpa non anim dolore exercitation mollit Lorem do."/>
    <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2 className="text-[32px] font-bold">{post.title}</h2>
            <p className="text-[18px] font-bold">{post.body}</p>
            <button onClick={() => deletePost(post.id)} className='bg-red-500 text-white py-2 px-4 rounded mt-2'>Delete</button>
          </li>
        ))}
      </ul>
  </MainLayout>
  );
}

export default ServicePage;
