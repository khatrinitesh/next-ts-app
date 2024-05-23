"use client";
import React from "react";
import BlogLayout from "./BlogLayout";

const CustomApp = () => {
  const posts: BlogPost[] = [
    {
      id: 1,
      title: "First Blog Post",
      excerpt: "This is the first blog post excerpt.",
      content: "This is the full content of the first blog post.",
      author: "John Doe",
      publishedDate: "May 20, 2024",
    },
    {
      id: 2,
      title: "Second Blog Post",
      excerpt: "This is the second blog post excerpt.",
      content: "This is the full content of the second blog post.",
      author: "Jane Doe",
      publishedDate: "May 21, 2024",
    },
  ];

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <BlogLayout posts={posts} />
      </div>
    </>
  );
};

export default CustomApp;
