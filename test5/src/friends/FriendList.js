/**
 * Friends에서는 item을 생성할 데이터를 전달받고
 * 전달받은 데이터를 가지고 FriendsItem 컴포넌트 리스트를 만든다.
 */



import React from "react";
import FriendItem from "./FriendItem";

const FriendList = ({ data }) => {
  return (
    <ul>
      {
        data.map((item, index) => {
          return (<FriendItem key={item.id} item={item} />)
        })
      }
    </ul>
  );
};

export default FriendList;
