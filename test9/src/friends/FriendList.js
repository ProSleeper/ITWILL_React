import React from 'react'
import FriendItem from './FriendItem';

const FriendList = ({data, onDelete}) => {
  return (
    <ul>
      {
        data.map((item) => {
          return <FriendItem key={item.id} item={item } onDelete={onDelete} />
        })
      }
      </ul>
  )
}

export default FriendList