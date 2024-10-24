"use client"
import BtnPrimary from "@/components/BtnPrimary";
import Banner from "@/layout/Banner";
import MainLayout from "@/layout/MainLayout";
import { PostProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Service() {

  const [posts,setPosts] = useState<PostProps[]>([])
  const [loading,setLoading] = useState<boolean>(false);
  const [errors,setErrors] = useState<string | null>(null);

  const baseurlposts = process.env.NEXT_PUBLIC_POSTS || "";

  const handleDel = (id:number) => {
    const newData = posts.filter((val) => val.id !== id);
    setPosts(newData);
  }

  const fetchData = async () => {
    setLoading(true);
    setErrors(null);
    try {
      const response = await fetch(baseurlposts);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data: PostProps[] = await response.json();
      setPosts(data);
    } 
    catch (error) {
      setErrors(error.message);
    } finally {
      setLoading(false);
    }
  }
  

  useEffect(() => {
    fetchData()
  },[]);
  return (
    <>
     <MainLayout>
      <div className="content ServicePage">
        <Banner title="Service" description="Laborum commodo ad elit cupidatat ullamco laboris nisi excepteur."/>
        <div className="container mx-auto">
          {loading && <p>Loading...</p>}
          {errors && <div>Error: {errors}</div>}
          {posts.map(post => (
             <div key={post.id} className="post-item">
              <Link href={`/service/${post.id}`}>
                <h2 className="post-title font-bold text-[24px]">{post.title}</h2>
                <p className="post-body font-medium text-[16px]">{post.body}</p>
              </Link>
              <BtnPrimary label="Remove" onClick={() => handleDel(post.id)}/>
            </div>
          ))}
        </div>
       </div>
     </MainLayout>
    </>
  );
}
