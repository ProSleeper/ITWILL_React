
/**
 * 친구등록 프로그램
 * ㅇ
 * 
 * 
 * 
 */




import React from 'react';
import FriendInput from './FriendInput';
import FriendList from './FriendList';
import "./style.css"
import friend from "../assets/api/friendData";
import { useState } from 'react';
import { useRef } from 'react';


const Friends = () => {

  const number = useRef(friend.length + 1);
  const [data, setData] = useState(friend);
  const [done, setDone] = useState(false);

  const deleteAll = () => {
    setData([]);
  }

  const resetData = () => {
    setData(friend);
  }

  const changeCheck = (event) => {
    const { checked } = event.target;
    setDone(checked);
  }

  const onAdd = (form) => {
    form.id = number.current++;
    console.log(data.length);
    setData([...data, form]);
  }

  const onDelete = (id) => {
    setData(data.filter((item) => {
      return item.id !== id
    }))
  }

  return (
    <div className='wrap'>
      <h1>친구들 총 인원: {data.length}명</h1>
      <p className='chk'>
        <input type="checkbox" checked={done} onChange={changeCheck} />
        {done ? '추가 비활성': '추가 활성'}
        
      </p>
      <FriendList data={data } onDelete={onDelete} />
      <p className='btn'>
        <button onClick={deleteAll}>모두삭제</button>
        <button onClick={resetData}>초기복구</button>
      </p>
      
      {done && <FriendInput onAdd={onAdd} />}
    </div>
  )
}

export default Friends