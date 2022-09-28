
/**
 * 
 *
 * 데이터를 읽어와서 출력하는 코드
 * 1. FriendItem로 하나의 컴포넌트를 만들고
 * 2. FriendList는 FriendItem 컴포넌트를 list로 구현후
 * 3. Friends에서 List를 출력한다.
 * 
 * 코드의 구현과정은 위와 같지만 데이터의 흐름은 정확히 반대로 흘러간다.
 * 1. Friends에서 List를 출력할 데이터를 friendsData에서 읽는다.
 * 2. Friends는 FriendList에 해당 데이터를 전달하고
 * 3. FriendList에서 data.map을 이용해서 데이터를 하나씩 FriendItem에 전달해서 컴포넌트를 만든다.
 * 
 */






import React, { useState } from "react";
import "../assets/css/reset.css";
import "./style.css";
import FriendList from "./FriendList";
import friendData from "../assets/api/friendData.js";

const Friends = () => {
  const [data, setData] = useState(friendData); 

  const onRemove = () => {
    setData(data.length ? []:friendData);
  }


  return (
    <div className="wrap">
      <h1>친구들 총 인원: {data.length}명</h1>
      <FriendList data={data} />
      <p className="btn">
        <button onClick={onRemove}>모두삭제</button>
      </p>
    </div>
  );
};

export default Friends;
