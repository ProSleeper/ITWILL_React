/**
 * 시간과 날짜를 출력하는 코드
 * useState만으로도 출력은 가능하지만 
 * useEffect를 이용해서 출력하는 방법을 알려주는 코드
 * 또 useEffect는 계속해서 실행, 혹은 한번만 실행 가능하다
 * 
 * 
 */



import React from 'react';
import { useState } from 'react';
import Test1Sub from './Test1Sub';

const Test1 = () => {

  const [show, setShow] = useState(false)

  return (
    <div>
      <button onClick={() => {
        setShow(!show)
      }}>
        시간과 날짜 출력
      </button>
      {
        show && <Test1Sub/>
      }
    </div>
  )
}

export default Test1