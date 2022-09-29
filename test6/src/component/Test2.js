

/**
 * 
 * 일렬번호 만들기 2번째 방법
 */






import React from "react";
import { useState, useRef } from "react";

const Test2 = () => {

  const number = useRef(1);
  const [data, setData] = useState([]);

  const names = "배수지, 유인나, 정인선, 박혜선, 이효리, 박은빈, 한지민".split(", ");

  const onAdd = () => {
    const random = Math.floor(Math.random() * names.length);
    setData([
      ...data,
      {
        id: number.current++,
        name: names[random],
      },
    ]);
  };

  return (
    <div>
      <h2>고유번호</h2>
      <button onClick={onAdd}>추가</button>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {" "}
            {item.id} / {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Test2;
