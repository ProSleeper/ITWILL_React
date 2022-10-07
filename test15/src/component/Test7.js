
/** 
 * css 컨트롤도 가능
 * reducer를 이용해서 css 수치를 컨트롤 하는 방법
 */

import React from 'react'
import { useReducer } from 'react';

const initialState = { width: 100 }

const reducer = (state, action) => {
  switch (action.type) {
    case 'PLUS': return { width:state.width + action.step }
    case 'MINUS': return { width:state.width - action.step }
  
    default:
      return {width:100}
  }
}


const Test7 = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{width:state.width, height:100, background:'tomato', margin:10, transition:'5.3s'}}>
      <p>
        <button onClick={()=>dispatch({type:'PLUS', step:30})}>증가</button>
        <button onClick={()=>dispatch({type:'MINUS', step:20})}>감소</button>
        <button onClick={()=>dispatch({type:'RESET'})}>초기화</button>
      </p>
    </div>
  )
}

export default Test7