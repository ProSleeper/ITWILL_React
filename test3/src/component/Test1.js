import React, { useState } from "react";

const Test1 = () => {
  const [name, setName] = useState("지렁이");
  const [color, setColor] = useState("green");


  const onColor = (color) => {
    setColor(color);
  };
{/* <div style={{ border: `5px solid ${color}`, padding: 30 }}> */}
  return (
    <div>
      <h2 style={{ color: color } }>이름: {name}</h2>
      <h2 style={{ color: color } }>색: {color}</h2>
      <p>
        <button onClick={() => setName("배수지")}>배수지</button>
        <button onClick={() => setName("유인나")}>유인나</button>
        <button onClick={() => setName("정인선")}>정인선</button>
      </p>
      <p>
        <button onClick={() => onColor("Pink")}>Pink</button>
        <button onClick={() => onColor("Yellow")}>Yellow</button>
        <button onClick={() => onColor("SkyBlue")}>SkyBlue</button>
      </p>
    </div>
  );
};

export default Test1;
