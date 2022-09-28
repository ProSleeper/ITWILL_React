

/**
 * 버튼으로 배경색 토클
 * 버튼으로 나이 증가 감소 표현
 * 
 */


import React from 'react';
import "./Test1.css";
import { useState } from 'react';

const Test1 = () => {

  const [age, setAge] = useState(10)
  const [isColor, setIsColor] = useState();

  const onColor = () => {
    setIsColor(!isColor);
  }

  const onUp = () => {
    setAge(age + 1);
  }

  const onDown = () => {
    setAge(age - 1);
  }


  return (
    <div className={`wrap ${isColor ? 'yellow' : 'white'}`}> 
      <h2>나이: {age} 살</h2>
      <h2>배경색: yellow</h2>
      <p>
        <button onClick={onColor}>{isColor ? 'yellow': 'white'}</button>
        <button onClick={onUp}>나이증가</button>
        <button onClick={onDown}>나이감소</button>
      </p>
    </div>
  )
}

export default Test1