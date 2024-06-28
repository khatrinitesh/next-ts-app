"use client"
// next/link
import Link from 'next/link'
// state management
import React, { useEffect, useState } from 'react'

const Example = () => {
  return (
    <>
        <FetchDataComponent/>
    </>
  )
}

export default Example


// interface users
interface UsersData{
    id:number;
    username:string;
    name:string;
    email:string;
}

// interface posts
interface PostsData{
    id:number;
    title:string;
    body:string;
}

// interface comments
interface CommentsData{
    id:number;
    name:string;
    email:string;
    body:string;
}


const FetchDataComponent:React.FC = () => {

    const [users,setUsers] = useState<UsersData>([]);
    const [posts,setPosts] = useState<PostsData[]>([]);
    const [comments,setComments] = useState<CommentsData>([]);
    const [isLoading,setIsLoading] = useState<boolean>(false);
    const [error,setError] = useState<string | null>(null);


    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(null);
            // try
            try {
                const usersPromise = fetch('https://jsonplaceholder.typicode.com/users') //users
                .then((response) => response.json());
                const postsPromise = fetch('https://jsonplaceholder.typicode.com/posts') //posts
                .then((response) => response.json());
                const commentsPromise = fetch('https://jsonplaceholder.typicode.com/comments') //comments
                .then((response) => response.json());

                const [usersData,postsData,commentsData]= await Promise.all([usersPromise,postsPromise,commentsPromise]);
                    setUsers(usersData);
                    setPosts(postsData);
                    setComments(commentsData);
                    console.log((usersData));
                    console.log((postsData));
                    console.log((commentsData));
                    
                
            } 
            // catch
            catch (error) {
                setError(error.message);
            }
            // finally
            finally{
                setIsLoading(false);
            }
        }
        fetchData();
    },[])
    

    if(isLoading){
        return(
            <div>Loading...</div>
        )
    }
    if(error){
        return(
            <div>{error}</div>
        )
    }
    return(
        <>
        <div className='border  py-2'>
            <h2 className='font-bold text-[42px]'>Users Data</h2>
            {users.map((user,id) => (
                <div key={user.id} className='shadow p-5 rounded border mb-3'>
                    <h3 className='text-[32px] text-red-600'>{user.name}</h3>
                    <h3  className='text-[24px] text-blue-800'>{user.username}</h3>
                    <h3  className='text-[20px] text-orange-600'>{user.email}</h3>
                </div>
            ))}
        </div>
        <div className='border  py-2'>
            <h2 className='font-bold text-[42px]'>Posts Data</h2>
            {posts.map((user,id) => (
                <div key={user.id} className='shadow p-5 rounded border mb-3'>
                    <h3 className='text-[32px] text-red-600'>{user.title}</h3>
                    <h3  className='text-[24px] text-blue-800'>{user.body}</h3>
                </div>
            ))}
        </div>
        <div className='border  py-2'>
            <h2 className='font-bold text-[42px]'>Comments Data</h2>
            {comments.map((user,id) => (
                <div key={user.id} className='shadow p-5 rounded border mb-3'>
                    <h3 className='text-[32px] text-red-600'>{user.name}</h3>
                    <h3  className='text-[20px] font-bold text-blue-800'>
                        <Link href={`mailto:${user.email}`}>{user.email}</Link>
                    </h3>
                    <h3  className='text-[16px] text-green-800'>{user.body}</h3>
                </div>
            ))}
        </div>
        </>
    )
}