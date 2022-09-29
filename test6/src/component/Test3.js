/**
 *
 * 일렬번호 만들기 3번째 방법
 */

import React from "react";
import { useRef } from "react";
import { useState } from "react";

const Test3 = () => {
  const number = useRef(1);
  const nameRef = useRef();
  const [data, setData] = useState([]);
  const [form, setForm] = useState({
    name: "",
    age: "",
  });

  const { name, age } = form;

  const onText = (event) => {
    const { value, name } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const onAdd = () => {
    setData([
      ...data,
      {
        id: number.current++,
        name: name,
        age: age,
      },
    ]);
    setForm({
      name: "",
      age: "",
    });
    nameRef.current.focus();
  };

  return (
    <div>
      <input type="text" value={name} name="name" onChange={onText} ref={nameRef} />
      <input type="text" value={age} name="age" onChange={onText} />
      <button onClick={onAdd}>추가</button>
      <hr />
      <ul>
        {data.map((item) => {
          return (
            <li key={item.id}>
              {item.id} / {item.name} / {item.age}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Test3;
