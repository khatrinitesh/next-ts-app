"use client"
import React, { useState,useEffect  } from "react";

const Example = () => {
  return (
    <>
    <ResultComponent/>
    </>
  )
};

export default Example;

interface Post {
  id: number;
  title: string;
  body: string;
}

const ResultComponent: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []); // Empty dependency array to run effect only once on component mount

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <>
      <div className="container mx-auto">
        <h1 className="font-bold text-[32px] underline underline-orange-500 underline-warm-gray-700">Posts</h1>
        <ul>
            {posts.map((post) => (
            <li key={post.id} className="shadow mb-3 p-5 rounded">
                <h2 className="font-bold text-[24px]">{post.title}</h2>
                <p>{post.body}</p>
            </li>
            ))}
        </ul>
      </div>
    </>
  );
};
