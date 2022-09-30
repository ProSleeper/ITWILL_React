import React from 'react'
import "./TodoList.css"
import TodoItem from './TodoItem';



const TodoList = ({todos, onDelete, onToggle}) => {
  return (
    <ul className='TodoList'>
      {
        todos.map((item) => {
          return <TodoItem key={item.id} item={item} onDelete={onDelete} onToggle={onToggle} />
        })
      }
    </ul>
  )
}

export default TodoList