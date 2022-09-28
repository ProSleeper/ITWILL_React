import React from 'react'
import { useState, useRef } from 'react';

/**
 * 여러개의 Input 관리하기
 * 
 */

const Test9 = () => {


  const nameRef = useRef()

  const [name, setName] = useState()
  const [age, setAge] = useState()
  const [addr, setAddr] = useState()
  
  const onName = (event) => {
    setName(event.target.value)
  }

  const onAge = (event) => {
    setAge(event.target.value)
  }

  const onAddr = (event) => {
    setAddr(event.target.value)
  }

const onReset = () => {
  nameRef.current.focus();
  setName('');
  setAge('');
  setAddr('');
}

  return (
    <div>
      <h2>Input 여러개 관리-1</h2>
      <input type="text" onChange={onName} value={name} ref={nameRef} />
      <input type="text" onChange={onAge} value={age} />
      <input type="text" onChange={onAddr} value={addr} />
      <button onClick={onReset}>초기화</button>
      <hr />
      <h4>
        {name} / {age} / {addr}
      </h4>
    </div>
  )
}

export default Test9