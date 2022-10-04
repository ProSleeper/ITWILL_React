import React from 'react'

const ItemUser = ({ item, onDelete, onEdit }) => {
  
  const { id, name, job } = item;
  return (
    <tr>
      <td>{name}</td>
      <td>{job}</td>
      <td>
        <button onClick={() => {
          return onEdit(item)
        }}>수정</button>
        <button onClick={() => {
          return onDelete(id)
        }}>삭제</button>
      </td>
    </tr>
  )
}

export default ItemUser