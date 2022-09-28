
/**
 * 개별적인 하나의 item이다.
 * 리액트의 기본적인 구조를 잘 설명한 구조 같다.
 * 
 */


import React from "react";

const FriendItem = ({ item }) => {

  const {name, age, image} = item;

  return (
    <li>
      <p>
        <img src={image} alt={name} />
      </p>
      <div>
        <strong>이름: {name} </strong>
        <span>나이: {age}</span>
      </div>
    </li>
  );
};

export default FriendItem;
