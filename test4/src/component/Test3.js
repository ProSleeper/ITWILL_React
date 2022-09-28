/**
 * 1. inputbox 입력과 초기화
 * 2. useRef 사용법
 */

import React, { useState, useRef } from 'react'

const Test3 = () => {

  //1. Ref 이름 선언
  const idRef = useRef()




  const [userId, setUserId] = useState('')
  const [userPwd, setUserPwd] = useState('')

  const chageInput1 = (event) => {
    const { value } = event.target
    setUserId(value)
  }

  const chageInput2 = (event) => {
    const { value } = event.target
    setUserPwd(value)
  }

  const onReset = () => {
    setUserId('')
    setUserPwd('')
    idRef.current.focus(); //3. 작업
  }

  return (
    <div>
      id: <input type="text" onChange={chageInput1} ref={idRef } value={userId} /> //2. 참조 부분설정
      pwd: <input type="text" onChange={chageInput2} value={userPwd} />
      <button onClick={onReset}>초기화</button>
      <h2>id: </h2>
      <h2>pwd: </h2>
    </div>
  )
}

export default Test3