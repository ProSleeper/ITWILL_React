import React, { useState } from 'react'

//Hooks
//함수형 컴포넌트에 다양한 기능을 제공
//userState, useEffect, useReducer, useMemo, useRef, useCallback

//useState
//setter
//const [name, setName] = useState(초기값);



const Test9 = () => {

  const [name, setName] = useState('');
  
  const onName1 = () => {
    setName('배수지');
  }
  const onName2 = () => {
    setName('유인나')
  }

  return (
    <div>
      <h2>이름: {name}</h2>
      <button onClick={onName1}>배수지</button>
      <button onClick={onName2}>유인나</button>
    </div>
  )
}

export default Test9