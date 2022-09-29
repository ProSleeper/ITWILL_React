/**
 *
 * 일렬번호 만들기 4번째 방법
 * 추가로 form을 이용해서 엔터키를 누르면 입력되도록 구현
 * useRef로 포커스를 항상 입력창으로 가능하게 해서
 * 반복적인 입력이 쉽도록 구현
 * 
 */

import React from "react";
import { useRef } from "react";
import { useState } from "react";

const Test4 = () => {
  const number = useRef(1);
  const textRef = useRef();
  const [data, setData] = useState([]);
  const [text, setText] = useState('');

  const onText = (event) => {
    const { value } = event.target;
    setText(value)
  }

  const onAdd = (event) => {
    event.preventDefault();
    setData([
      ...data,
      {
        id: number.current++,
        text:text
      }
    ])
    setText('')
    textRef.current.focus();
  }


  return (
    <div>
      <form onSubmit={onAdd }>
        <input type="text" name="text" onChange={onText} value={text} ref={textRef} />
        <button >추가</button>
      </form>
      <ul>
        {data.map((item) => {
          return (
            <li key={item.id}>
              {item.id} / {item.text}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Test4;
