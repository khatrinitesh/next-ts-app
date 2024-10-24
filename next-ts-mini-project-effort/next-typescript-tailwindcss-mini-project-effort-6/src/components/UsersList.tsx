"use client"
import useUserStore from '@/stores/userStore';
import React, { useEffect } from 'react';

const UsersList:React.FC = () => {

    const {users,fetchUsers} = useUserStore();

    useEffect(() => {
        fetchUsers();
    },[fetchUsers]);
  return (
    <>
      <h1 className='font-bold text-[32px]'>User List</h1>
      <ul>
        {users.map((val) => (
            <li key={val.id}>
                <h3>{val.name} - {users.email}</h3>
            </li>
        ))}
      </ul>
    </>
  );
}

export default UsersList;
