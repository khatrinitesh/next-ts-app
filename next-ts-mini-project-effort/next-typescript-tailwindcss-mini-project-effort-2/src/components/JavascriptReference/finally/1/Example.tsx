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

interface UserData {
    id: number;
    name: string;
  }
  
  interface PostData {
    userId: number;
    id: number;
    title: string;
    body: string;
  }

  interface CommentData{
    postId:number;
    id:number;
    email:string;
    body:string;
  }

const ResultComponent: React.FC = () => {

    const [users, setUsers] = useState<UserData[]>([]); // users
    const [posts, setPosts] = useState<PostData[]>([]); //posts
    const [comments,setComments] = useState<CommentData[]>([]); // comments
    const [isLoading, setIsLoading] = useState<boolean>(true); // loading
    const [error, setError] = useState<string | null>(null); //error

    useEffect(() => {

        const fetchData = async() => {
            setIsLoading(true);
            setError(null);

            try{
                const usersPromise = fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json());

                const postsPromise = fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json());

                const commentsPromise = fetch('https://jsonplaceholder.typicode.com/comments')
                .then(response => response.json());
                const [usersData,postsData,commentsData] = await Promise.all([usersPromise,postsPromise,commentsPromise]);

                setUsers(usersData); // users
                setPosts(postsData); // posts
                setComments(commentsData); //comments
            }
            catch(error){
                setError(error.message);
            }
            finally{
                setIsLoading(false);
            }
        }
    
        fetchData();
      }, []); // Empty dependency array to run effect only once on component mount


    
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <>
    <h1>Users and Posts</h1>
      <div>
        <h2 className="font-bold text-[32px]">Users</h2>
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
      <br />
      <div>
        <h2 className="font-bold text-[32px]">Posts</h2>
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="font-bold text-[32px]">Comments</h2>
        <ul>
          {comments.map(comment => (
            <li key={comment.id}>
              <h3 className="font-bold text-red-600">{comment.email}</h3>
              <p>{comment.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
