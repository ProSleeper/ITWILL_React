/**
 * 버튼을 눌러서 컴포넌트를 추가하고 삭제하는 코드
 */



import React from 'react';
import { useState } from 'react';
import Test2Sub from './Test2Sub';
import { useRef } from 'react';

const Test2 = () => {

  const number = useRef(7);

  const [data, setData] = useState([
    {
      id: 1,
      name:'정인선'
    },{
      id: 2,
      name:'이주현'
    },{
      id: 3,
      name:'김지선'
    },{
      id: 4,
      name:'홍은혜'
    },{
      id: 5,
      name:'김지현'
    },{
      id: 6,
      name:'이상수'
    },
  ]);

  const onAdd = (text) => {
    // alert('추가');
    setData([
      ...data,
      {
        id: number.current++,
        name:text
      }
    ])
  }

  const onDelete = (id) => {
    //alert('삭제')
    setData(data.filter((item)=>item.id !== id))

  }

  return (
    <div>
      {
        data.map((item) => {
          return <p key={item.id}>{item.id } / {item.name }</p>
        })
      }
      <hr />
      <Test2Sub onAdd={onAdd} onDelete={onDelete } />
    </div>
  )
}

export default Test2