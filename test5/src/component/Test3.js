/**
 * 1. props로 메서드나 변수를 자식에게 내려주어서 부모의 데이터를 바꾸고 해당 데이터를 다른 자식에게도 전달해준다.
 * 2. redux 같은 라이브러리를 사용하지 않으면 리액트의 데이터는 무조건 위에서 아래로만 흐른다.
 * 
 *
 */

import React from "react";
import { useState } from "react";

const Name = () => {
  const [name, setName] = useState("배수지");

  const onChange = (event) => {
    const { value } = event.target;
    setName(value);
  };

  return (
    <div>
      <h2>Name 컴포넌트</h2>
      <p>
        <label htmlFor="">이름: </label>
        <input type="text" value={name} onChange={onChange} />
        <span style={{ marginLeft: 15 }}>{name}</span>
      </p>
    </div>
  );
};

const Animal = ({animal, changeInput}) => {
  return (
    <div>
      <h2>Animal 컴포넌트</h2>
      <p>
        <label htmlFor="">동물: </label>
        <input type="text" value={animal} onChange={changeInput} />
        <span style={{ marginLeft: 15 }}>{animal}</span>
      </p>
    </div>
  );
};

const Display = ({animal}) => {
  return (
    <div>
      <h2>Display 컴포넌트</h2>
      <h2>내가 좋아하는 동물은 {animal}입니다. </h2>
    </div>
  );
};

const Test3 = () => {
  const [animal, setAnimal] = useState("강아지");

  const changeInput = (event) => {
    const { value } = event.target;
    setAnimal(value);
  }

  return (
    <div>
      <Name />
      <hr />
      <Animal animal={animal} changeInput={changeInput} />
      <hr />
      <Display animal={animal} />
    </div>
  );
};

export default Test3;
