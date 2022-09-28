import React, {useState, useRef} from "react";

/**
 * 
 * useState를 이용해서 select박스를 선택했을 때 색상 바꾸기
 */

const Test6 = () => {

  const colorRef = useRef()
  const [color, setColor] = useState()
  const [text, setText] = useState()
  const onColor = (event) => {

    const { value } = event.target;
    // setColor(value);
    setText(value);
  }

  const onSelect = () => {
    setColor(text);
  }

  return (
    <div>
      <h2 style={{color:color}}>컬러선택</h2>
      <select name="" id="" onChange={onColor} >
        <option value="red">red</option>
        <option value="green">green</option>
        <option value="pink">pink</option>
        <option value="skyblue">skyblue</option>
        <option value="tomato">tomato</option>
      </select>
      <button onClick={onSelect}>선택</button>
    </div>
  );
};

export default Test6;
