"use client"
import BtnPrimary from "@/components/BtnPrimary";
import { COMMENTS_API } from "@/constants/constants";
import { ProductComment, ProductDetailProps } from "@/interface";
import { useParams,useRouter  } from "next/navigation";
import React, { useEffect, useState } from "react";

const ProductDetailPage: React.FC= () => {
  const params = useParams();
  const id = params?.id;
  const [comment,setComment] = useState<ProductComment>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchComp = async () => {
      const res = await fetch(`${COMMENTS_API}/${id}`);
      const data = await res.json();
      setComment(data);
    }
    if(id) fetchComp();
  },[id]);

  const handleClick = () => {
      router.push("/product")
  }

  if(!comment) return(
    <>
    <div>
      <p>Loading...</p>
    </div>
    </>
  )

  return (
    <div className="p-6">
      <BtnPrimary onClick={handleClick}>Back</BtnPrimary>
      <h1 className="text-2xl font-bold">{comment.name}</h1>
      <p className="mt-2 text-gray-700">{comment.body}</p>
      <p className="mt-4 text-sm text-gray-600">Email: {comment.email}</p>
      
    </div>
  );
};

export default ProductDetailPage;