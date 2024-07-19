"use client";
// custom hooks - state management
import React, { useState, useEffect, useRef } from "react";

// NEXT/IMAGE
import Image from "next/image";
// NEXT/LINK
import Link from "next/link";
// WALLPAPER
import Wallpaper from "../../../assets/img/wallpaper.jpg";
// STYLINGCSS
// import "./style.css";
// INTERFACE
import { Todo } from "./interface";
// CONSTANTS
import { INITIAL_TODOS } from "./constants";


const Example = () => {
  return (
    <>
       <TodoList/>
    </>
  );
};

export default Example;

const TodoList:React.FC = () =>{
    const [todo,setTodo] = useState<Todo[]>(INITIAL_TODOS);


    return(
        <>
        <div className="todo-list-container">
            <h2 className="text-2xl font-bold mb-4">Todo List</h2>
            {todo.map(todo => (
                <div key={todo.id} className="flex items-center mb-2">
                <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-500"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                />
                <span
                    className={`ml-2 ${todo.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}
                >
                    {todo.text}
                </span>
            </div>
            ))}
        </div>
        </>
    )
}

