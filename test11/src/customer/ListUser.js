import React from 'react'
import ItemUser from './ItemUser';

const ListUser = ({users, onDelete, onEdit}) => {
  return (
    <div>
      <h2 className='users'>
        모범택시 고객추가
      </h2>
      <table>
        <colgroup>
          <col className='w1'/>
          <col className='w2'/>
          <col className='w3'/>
        </colgroup>
        <thead>
          <tr>
            <th>이름</th>
            <th>직업</th>
            <th>관리</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((item) => {
              return <ItemUser key={item.id} item={item} onDelete={onDelete} onEdit={onEdit} />
            })
          }
          
        </tbody>
      </table>
    </div>
  )
}

export default ListUser