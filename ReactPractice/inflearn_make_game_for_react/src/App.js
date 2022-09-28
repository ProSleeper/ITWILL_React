import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

//역시 언제나 느끼지만 무작정 코드만 짜는 게 제일 안좋은 것 같다.
//고쳐야 하는데 고쳐야하는데 말만 하고 참 안된다.

/**
 * 남은 구현사항
 * **완료** 1. 입력버튼 클릭시 입력창 초기화 
 * **완료** 2. 정답 메세지에 x * y = z 입력값을 포함해서 정답인지 틀렸는지 출력
 *
 */


function Calculator() {
  const [prefix, setPrefix] = useState(2);
  const [suffix, setSuffix] = useState(1);
  const [inputBox, setInputBox] = useState('');
  const [message, setMessage] = useState("");

  const output = () => {
    const result = `${prefix} * ${suffix} = ${inputBox}`;
    setMessage(prefix * suffix === Number(inputBox) ? `${result} 정답입니다.` : `${result} 틀렸습니다.`);
    changeValue(setPrefix, setSuffix);
    setInputBox('');
  };

  const changeValue = (setPrefix, setSuffix) => {
    setPrefix(Math.ceil(Math.random() * 7 + 2));
    setSuffix(Math.ceil(Math.random() * 8 + 1));
  }

  return (
    <>
      <p>
        {prefix} 곱하기 {suffix} 은
      </p>
      <input type="text" onChange={event => setInputBox(event.target.value)} value={inputBox} />
      <button onClick={output}>입력</button>
      <p>{message}</p>
    </>
  )
}


function App() {
  return (
    <div style={{ marginLeft: 10 }}>
      <Calculator />
      <Calculator />
      <Calculator />
    </div>
  );
}

export default App;
