import React,{useContext}  from 'react'
import { TodosContext } from '../contexts/TodosContext';
import TodoItem from './TodoItem';

const TodoList = () => {

  const {data} = useContext(TodosContext) 

  return (
    <div>
      {
        data.map((item) => {
          return <TodoItem key={item.id} item={item}/>
        })
      }
    </div>
  )
}

export default TodoList