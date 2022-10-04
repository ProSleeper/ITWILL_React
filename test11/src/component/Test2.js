/**
 * 지금까지는 함수를 따로 만들어줘서 props로 전달해주었지만
 * setXXXX 인 세터 함수도 props로 전달하는 것이 가능하다.
 * JS문법상으로는 당연히 되는 것이긴하다.
 */




import React from 'react'
import Test2Sub from './Test2Sub';
import { useState } from 'react';

const Test2 = () => {

  const [isShow, setIsShow] = useState(false)
  const [msg, setMsg] = useState('');

  const showMsg = (text, bool) => {
    setIsShow(bool)
    setMsg(text)
  }

  const onMsg1 = () => {
    const result = window.confirm('전부 삭제하시겠습니까?');
    if (result) {
      // setIsShow(true)
      // setMsg('예 전부 삭제합니다.')
      showMsg('예 전부 삭제합니다.', true)
    }
    else {
      return;
    }
  }

  const onMsg2 = () => {
    const result = window.confirm('전부 복구하시겠습니까?');
    if (result) {
      showMsg('예 전부 복구합니다.', true)
    }
    else {
      return;
    }
  }

  return (
    <div>
      <p>
        <button onClick={onMsg1}>전체 삭제</button>
        <button onClick={onMsg2}>전체 복구</button>
      </p>
      {
        isShow && <Test2Sub msg={msg} setIsShow={setIsShow } />
      }
      
    </div>
  )
}

export default Test2