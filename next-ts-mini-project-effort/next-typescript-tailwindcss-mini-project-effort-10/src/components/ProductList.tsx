"use client"
import { COMMENTS_API } from "@/constants/constants";
import { ProductComment, ProductDetailProps } from "@/interface";
import React, { useState } from "react";
import { toast } from "sonner";
import BtnPrimary from "./BtnPrimary";
import Link from "next/link";

const ProductList: React.FC<ProductPropsComment> = ({ comment }) => {
  const [items, setItems] = useState<ProductComment[]>(comment);

  const handleRemove = async (id: number) => {
    try {
      const res = await fetch(`${COMMENTS_API}/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setItems((prev) => prev.filter((item) => item.id !== id));
        toast.success("Item removed successfully.");
      } else {
        toast.error("Failed to remove the item.");
      }
    } catch (error) {
      console.error("error deleting item:", error);
      toast.error("Something went wrong while deleting.");
    }
  };

  return (
    <>
      <ul className="space-y-4">
      {items.map((comment) => (
        <li key={comment.id} className="border p-4 rounded shadow-sm">
          <Link href={`/product/${comment.id}`} className="text-blue-600 font-semibold">
            {comment.name}
          </Link>
          <p className="text-sm text-gray-600">{comment.email}</p>
          <BtnPrimary
            onClick={() => handleRemove(comment.id)}
            className="text-red-600 mt-2 cursor-pointer underline"
          >
            Remove
          </BtnPrimary>
        </li>
      ))}
    </ul>
    </>
  );
};

export default ProductList;
