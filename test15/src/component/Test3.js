
/**
 * useCallback 은 리액트가 반복적으로 동일한 함수를 실행하면 그것을 알아서 기존 함수로 실행을 해준다.
 * 
 */



import React from 'react';
import { useState, useCallback } from 'react';

const Test3 = () => {
  
  const [count, setCount] = useState(1)

  const ran = Math.random();

  console.log('test')

  // const increment = () => {
  //   console.log(ran);
  //   setCount(count + 1);
  // }

  // const decrement = () => {
  //   console.log(ran);
  //   setCount(count - 1);
  // }


  const increment = useCallback(() => {
    console.log(ran);
    console.log(count);
    setCount(count + 1);
  }, [])

  const decrement = useCallback(() => {
    console.log(ran);
    console.log(count);
    setCount(count - 1);
  }, [])

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>증가</button>
      <button onClick={decrement}>감소</button>
    </div>
  )
}

export default Test3