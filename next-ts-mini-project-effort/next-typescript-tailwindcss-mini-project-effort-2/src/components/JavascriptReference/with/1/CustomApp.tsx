"use client";
import React, { useState } from "react";

interface User {
  name: string;
  age: number;
  location: string;
}

const CustomApp = () => {
  const [user, setUser] = useState<User>({
    name: "John Doe",
    age: 30,
    location: "New York",
  });

  const updateUser = () => {
    setUser((prevUser) => ({
      ...prevUser,
      age: prevUser.age + 1,
      location: "Los Angeles",
    }));
  };

  return (
    <>
      <h2 className="text-lg font-bold mb-2">User Information</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Location: {user.location}</p>
      <button
        className="bg-green-500 text-white p-2 rounded"
        onClick={updateUser}
      >
        Update User
      </button>
    </>
  );
};

export default CustomApp;
