/**
 * styled 컴포넌트를 이용해서 이모지를 사용하는 방법
 * 은근히 외국 사람들 많이 쓰던데 아이콘이나 그림 필요할때 써보자.
 */


import React, { useState } from 'react';
import styled from "styled-components";


const Container = styled.div`
  border: 1px solid #000;
  padding: 20px;
  width: ${props => props.width};
  h2 {
    font-size: 50px;

  }
`;
const Button = styled.button`
  margin: 5px;
  font-size: 40px;
  padding: 0 35 25px;
  cursor: pointer;
  outline: none;
  border: none;

  &.up::after{content:'👍'}
  &.down::after{content:'👎'}

  &.hover {
    background: tomato;
  }

  &.disable {
    filter: grayscale(100%);
    background: #999;
    cursor: not-allowed;
  }
`;



const Test8 = () => {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count > 10 ? 10 : count + 1);
  }

  const decrement = () => {
    setCount(count < 1 ? 0 : count - 1);
  } 

  return (
    <div>
      <h2>숫자: {count}</h2>    
      <Button onClick={increment} className='up' disabled={count === 10}></Button>
      <Button onClick={decrement} className='down'  disabled={count === 0}></Button>
    </div>
  )
}

export default Test8