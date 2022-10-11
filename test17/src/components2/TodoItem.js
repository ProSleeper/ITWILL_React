import React, {useContext, } from 'react'
import { TodosContext } from './../contexts/TodosContext';

const TodoItem = ({item:{id, name}}) => {

  const {onDelete} = useContext(TodosContext)

  return (
    <div>
      {id} / {name} <button onClick={() => onDelete(id)}>
      삭제</button>
    </div>
  )
}

export default TodoItem