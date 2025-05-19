
import React from "react";
import MainLayout from "../layouts/MainLayout";
import { COMMENTS_API } from "@/constants/constants";
import { ProductComment } from "@/interface";
import Link from "next/link";
import ProductList from "@/components/ProductList";

const Product: React.FC = async () => {
  const res = await fetch(COMMENTS_API);
  const comments: ProductComment[] = await res.json();

  return (
    <MainLayout>
      <div className="content py-[30px]">
        <div className="container mx-auto px-[1rem]">
          <h1 className="text-2xl font-bold">Product Page</h1>
          <ProductList comment={comments.slice(0,10)}/>
        </div>
      </div>
    </MainLayout>
  );
};

export default Product;
