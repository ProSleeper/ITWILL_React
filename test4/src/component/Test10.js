import React from 'react'
import { useState, useRef } from 'react';

/**
 * 여러개의 Input 관리하기
 * useState로 객체를 만들어서 데이터들을 한번에 관리하기
 * event에 name 값을 넣어서 메서드 1개로 관리하기
 */

const Test10 = () => {

  const nameRef = useRef()

  const [form, setForm] = useState({
    name: '',
    age: '',
    addr:'',
  })
  /*
  const onName = (event) => {
    const { value } = event.target;
    setForm({
      //...form,
      name:value
    })
  }

  const onAge = (event) => {
    const { value } = event.target;
    setForm({
      //...form,
      age:value
    })
  }

  const onAddr = (event) => {
    const { value } = event.target;
    setForm({
     // ...form,
      addr:value
    })
  }
  */

  const changeInput = (event) => {
    const { value, name } = event.target;
    setForm({
     // ...form,
      [name]:value
    })
  }

  //비구조 할당
  const { name, age, addr } = form;


const onReset = () => {
  nameRef.current.focus();
  setForm({})
  }
  
  const Button = (value) => {
    return (
      <input type="text" onChange={changeInput} value={age} name='age' />
    );
  }

  return (
    <div>
      <h2>Input 여러개 관리-1</h2>
      <input type="text" onChange={changeInput} value={name} name='name' ref={nameRef} />
      <input type="text" onChange={changeInput} value={age} name='age' />
      <input type="text" onChange={changeInput} value={addr} name='addr'/>
      <button onClick={onReset}>초기화</button>
      <hr />
      <h4>
        {name} / {age} / {addr}
      </h4>
    </div>
  )
}


export default Test10