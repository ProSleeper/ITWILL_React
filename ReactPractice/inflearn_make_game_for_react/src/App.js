import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

//역시 언제나 느끼지만 무작정 코드만 짜는 게 제일 안좋은 것 같다.
//고쳐야 하는데 고쳐야하는데 말만 하고 참 안된다.
function Calculator() {
  const [message, setMessage] = useState("");

  return (
    <>
      <Calculate message={setMessage} />
      <p>{message}</p>
    </>
  );
}

function Calculate(props) {
  const [prefix, setPrefix] = useState(2);
  const [suffix, setSuffix] = useState(1);
  const [inputBox, setInputBox] = useState(0);

  return (
    <>
      <p>
        {prefix} 곱하기 {suffix} 은
      </p>
      <Input draw={setInputBox} />
      <Button result={prefix * suffix} message={props.message} inputBox={inputBox} setPrefix={setPrefix} setSuffix={setSuffix} />
    </>
  );
}

function Button(props) {
  const { result, message, inputBox, setPrefix, setSuffix } = props;
  function output() {
    message(result === inputBox ? "정답입니다." : "틀렸습니다.");
    changeValue(setPrefix, setSuffix);
  }

  return <button onClick={output}>입력</button>;
}

function Input(props) {
  return (
    <input
      type="text"
      onChange={(event) => {
        props.draw(Number(event.target.value));
      }}
    />
  );
}

function changeValue(setPrefix, setSuffix) {
  setPrefix(Math.ceil(Math.random() * 7 + 2));
  setSuffix(Math.ceil(Math.random() * 8 + 1));
}

function App() {
  return (
    <div style={{ marginLeft: 10 }}>
      <Calculator />
    </div>
  );
}

export default App;
