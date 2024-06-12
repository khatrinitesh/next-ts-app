"use client"
import React, { useState } from 'react'


interface Todo{
    id:number;
    text:string;
    completed:boolean;
}

const CustomApp:React.FC = () => {
  
    const [todo,setTodo] = useState<Todo[]>([]);
    const [inputText,setInputText] = useState<string>('');

    const handleInputChange = (event:React.ChangeEvent<HTMLInput>) => {
        setInputText(event.target.value);
    }

    const handleAddTodo = () => {
        if(inputText.trim() !== ''){
            const newTodo: Todo = {
                id: Math.random(),
                text: inputText,
                completed: false,
            };
            setTodo([...todo,newTodo])
            setInputText('');
        }
    };

    const handleToggleCompletion = (id: number) => {
        setTodos(todo.map(todo => {
          if (todo.id === id) {
            return { ...todo, completed: !todo.completed };
          }
          return todo;
        }));
      };

      const handleDel = (id:number) => {
        const newData = todo.filter((item) => item.id !== id)
        setTodo(newData)
      }
  return (
    <>
    <h1>Todo List</h1>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter todo..."
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todo.map(val => (
          <li
            key={val.id}
            style={{ textDecoration: val.completed ? 'line-through' : 'none' }}
            onClick={() => handleToggleCompletion(val.id)}
          >
            {val.text}
            <button onClick={() => handleDel(val.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default CustomApp