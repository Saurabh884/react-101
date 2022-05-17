import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({data}) => {
    
  return (
    <div>TodoList

        {data.map((elem)=>{
            return <TodoItem key={elem.id} {...elem}/>
        })}
    </div>
  )
}
