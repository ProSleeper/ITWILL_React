/**
 * useReducer 사용법
 * 
 */


import React from "react";
import { useReducer } from 'react';

const initialState = 0;

const reducer = (state, action) => {

    switch(action.type){
        case 'INCREMENT':
            return state + action.step
        case 'DECREMENT':
            return state - action.step
        default:
            return state
    }
}

const Test6 = () => {

  
  const [count1, dispatcher1] = useReducer(reducer, initialState);  //reducer는 함수, initialState는 초기값
  const [count2, dispatcher2] = useReducer(reducer, 200);
  const [count3, dispatcher3] = useReducer(reducer, 300);


  return(
    <div>
      <h2>출력: {count1}</h2>
      <p>
        <button onClick={()=>dispatcher1({type:'INCREMENT', step:10})}>증가</button>
        <button onClick={()=>dispatcher1({type:'DECREMENT', step:50})}>감소</button>
      </p>
      <hr />
      <h2>출력: {count2}</h2>
      <p>
        <button onClick={()=>dispatcher2({type:'INCREMENT', step:100})}>증가</button>
        <button onClick={()=>dispatcher2({type:'DECREMENT', step:200})}>감소</button>
      </p>
      <hr />
      <h2>출력: {count3}</h2>
      <p>
        <button onClick={()=>dispatcher3({type:'INCREMENT', step:500})}>증가</button>
        <button onClick={()=>dispatcher3({type:'DECREMENT', step:500})}>감소</button>
      </p>

    </div>
  );
};

export default Test6;
