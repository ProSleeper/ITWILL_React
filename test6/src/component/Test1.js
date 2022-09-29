/**
 * 
 * 일렬번호 만들기 1번째 방법
 */



import React from 'react';
import { useState } from 'react';

const Test1 = () => {

  const [data, setData] = useState([]);

  const onAdd = () => {
    setData(data.concat({id:data.length, name:'배수지' + Math.floor((Math.random() * 10))}))
  }


  return (
    <div>
      <button onClick={onAdd}>데이터 추가</button>
      {

        data.map((item, index) => {
          return <p key={item.id}>{item.id} / {item.name}</p>
        })
      }
    </div>
  )
}

export default Test1