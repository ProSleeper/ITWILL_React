import React, {useRef} from "react";

const Test5 = () => {

  const colorRef = useRef()
  const colorRef1 = useRef()


  const onColor = () => {
    console.log(colorRef);
    console.log(colorRef.current);
    console.log(colorRef.current.value);

    console.log(colorRef1);
    console.log(colorRef1.current);
    console.log(colorRef1.current.value);

    const data = {
      color: colorRef.current.value
    }
    //console.log(data);
    const json = JSON.stringify(data, null, 2);
    //console.log(json);
  }

  return (
    <div>
      <h2>컬러선택</h2>
      <select name="" id="" ref={colorRef}>
        <option value="red">red</option>
        <option value="green">green</option>
        <option value="pink">pink</option>
        <option value="skyblue">skyblue</option>
        <option value="tomato">tomato</option>
      </select>
      <button onClick={onColor} ref={colorRef1} value="button">선택</button>
    </div>
  );
};

export default Test5;
