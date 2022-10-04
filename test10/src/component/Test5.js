// * 문법 3: mount / 특정 변수가 바뀔때마다 실행()
// * 사용빈도: props(80%), state
// * useEffect(() => {
//     To Do
// }, [의존 변수])
// 의존 변수가 바뀔때마다 useEffect를 실행해라라는 문법



import React, { useEffect, useState } from "react";

const Test5 = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const changeInput = (event) => {
    const { value } = event.target;
    // setStep(value);
    setStep(Number(value))

  }
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((count) => {
        return count + step;
      });
    }, 1000);

    return () => {
      console.log("뒷정리");
      clearInterval(timer);
    };
  }, [step]);

  return (
    <div>
      <input type="text" value={step} onChange={changeInput } />
      <h1>출력: {count}</h1>
    </div>
  );
};

export default Test5;
