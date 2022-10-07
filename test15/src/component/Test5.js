// 1. 액션명 (모든변수 사용자 정의)
// 별칭 - 증가별칭, 감소별칭, 초기화별칭
// 사용자 정의이름 : 한글,영문 대소문자 가능
// 주로 상수형 영문 대문자로 쓰는것이좋다

// 예)
// 증가 : INCREMENT
// 감소 : DECREMENT
// 초기화 : RESET

// 2. 상태 업데이트 로직을 담은 함수
// const 함수명 = (state, action) => {
//     switch(action.type) {
//         case '액션명':
//             return 값
//     }
// }

// 별칭의 경우의 수를 분기형 : switch ~ case
//     switch (action.type) {
//     case 'INCREMENT':
//         return count + 1 ;
//     case 'DECREMENT':
//         return count - 1;
//     case 'RESET':
//         return 0;
//     default:
//         return state;
// }

// 3.  const [상태값, dispatch] =
//     useReducer(상태 업데이트 로직을 담은 함수, 초기값);

// const [state, dispatch] = useReducer(reducer, initialState);

// 4. 이벤트 = {() => dispatch({type:'액션명})} //type은 필수

import React from "react";
import { useState, useReducer } from 'react';

const initialState = 0; //초기값
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return 0;
    default:
      return 0;
  }
};

const Test5 = () => {

  // const [count, setCount] = useState(0); 
  const [count, dispatch] = useReducer(reducer, initialState);

  return(
    <div>
      <h2>출력: {count}</h2>
      <p>
        <button onClick={()=>dispatch({type:'INCREMENT'})}>증가</button>
        <button onClick={()=>dispatch({type:'DECREMENT'})}>감소</button>
        <button onClick={()=>dispatch({type:'RESET'})}>초기화</button>
      </p>

    </div>
  );
};

export default Test5;
