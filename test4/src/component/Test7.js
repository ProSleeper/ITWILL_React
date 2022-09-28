import React from 'react'
import { useState } from 'react';

/**
 * 리액트 useState를 이용한 체크박스 만들기
 * 선택시 빨간색, 미선택시 검정색
 */

const Test7 = () => {

  const [check, setCheck] = useState(false)

  const changeCheck = (event) => {
    const { checked } = event.target;
    setCheck(checked);
  }

  return (
    <div　style={{color:check ? 'red':'black'}}>
      <input type="checkbox" checked={check} onChange={changeCheck } />
      체크박스를 클릭하세요.
      
    </div>
  )
}

export default Test7