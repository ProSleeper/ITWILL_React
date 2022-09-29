/**
 * Test2에서 사용할 버튼 컴포넌트를 따로 만듬
 */

import React from "react";

const Test2Sub = ({onAdd, onDelete}) => {
  return (
    <div>
      <h3>이름 추가</h3>
      <p>
        <button onClick={()=>onAdd('배수지')}>배수지</button>
        <button onClick={()=>onAdd('유인나')}>유인나</button>
        <button onClick={()=>onAdd('정인아')}>정인아</button>
      </p>
      <h3>이름 삭제</h3>
      <p>
        <button onClick={()=>onDelete(1)}>정인선</button>
        <button onClick={()=>onDelete(2)}>이주현</button>
        <button onClick={()=>onDelete(3)}>김지선</button>
      </p>
    </div>
  );
};

export default Test2Sub;
