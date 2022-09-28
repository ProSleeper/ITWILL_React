import React from 'react'
import { useState } from 'react';


/**
 * 체크박스를 이용해서 보이기/숨기기
 * 
 */
const Test8 = () => {

  const [check, setCheck] = useState(false)

  const onToggle = (event) => {
    const { checked } = event.target;
    setCheck(checked);
  }


  return (
    <div>
      <p>
        <input type="checkbox" checked={check} onChange={onToggle} />
        {check ? '숨기기' : '보이기'}
      </p>
      {
        check && 
        <div style={{width:400, height:100, background:'tomato', margin:30}}>
        </div>
      }

    </div>
  )
}

export default Test8