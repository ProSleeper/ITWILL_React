import React, { useState } from "react";

const Test4 = () => {

  const [count, setCount] = useState(0)

  const increment = (value) => {
    setCount(count + value);
  }
  const decrement = (value) => {
    setCount(count - value);
  }

  const calculate = () =>{
    setCount((i)=> i + 1);
  }
  
  
  return (
    <div>
      <h2>카운트: {count}</h2>
      <p>
        <button onClick={increment}>증가</button>
        <button onClick={decrement}>감소</button>
      </p>
      <p>
        <button onClick={() => increment()}>증가</button>
        <button onClick={() => decrement()}>감소</button>
      </p>
      <p>
        <button onClick={() => { calculate();calculate();calculate();calculate(); } }>2씩 증가</button>
        <button onClick={() => { decrement(2); } }>2씩 감소</button>
      </p>
    </div>
  )
}

export default Test4