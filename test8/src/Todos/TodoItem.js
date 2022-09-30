import React from 'react'
import { FaRegTrashAlt } from 'react-icons/fa';
import { MdOutlineCheckBox, MdOutlineCheckBoxOutlineBlank } from 'react-icons/md';



const TodoItem = ({ item: {id, text, done }, onDelete, onToggle}) => {
  return (
    <li className={done ? 'on' : ''}>
      <span onClick={() => onToggle(id)}>{done ? <MdOutlineCheckBox /> : <MdOutlineCheckBoxOutlineBlank/> }</span>
      <em onClick={()=>onToggle(id)}>{text}</em>
      <button onClick={()=>onDelete(id)}>
        <FaRegTrashAlt color='rgb(175,169,169)' size='20'/>
      </button>
    </li>
  )
}

export default TodoItem