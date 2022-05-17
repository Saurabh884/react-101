import React, { useState } from 'react'
import { TodoList } from './TodoList';
import { nanoid } from 'nanoid'

export const Todo = () => {
    const [task,setTask]=useState("");
    const [todo,setTodo]=useState([]);

    const handleChange=(e)=>{
        setTask(e.target.value)
    }
    const handleAdd=()=>{
        let todoObj={
                id:nanoid(),
                title:task,
                status:false
        }
        setTodo([todoObj,...todo])
    }
  return (
    <>
    <div>Todo
        <input type="text" placeholder='Write Something' onChange={handleChange}/>
        <button onClick={handleAdd}>+</button>
    </div>
    <TodoList data={todo}/>
    </>
  )
}
