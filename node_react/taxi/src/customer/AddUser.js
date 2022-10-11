import React from 'react'
import { useRef } from 'react';
import { useState } from 'react';

const AddUser = ({ onAdd }) => {
  
  const nameRef = useRef();
  const [user, setUser] = useState({
    name:'', job:''
  })
  
  const { name, job } = user;


  const changeInput = (event) => {
    const { value, name } = event.target;
    setUser({
      ...user,
      [name]:value
    })
  }
  const onSubmit = (event) => {
    event.preventDefault();
    
    if (!name || !job) {
      return;
    } 

    onAdd(user);

    setUser({
      name: '',
      job:''
    })
    nameRef.current.focus();
  }

  return (
    <form onSubmit={onSubmit}>
      <h2>모범택시 고객 추가</h2>
      <p>
        <label htmlFor="">이름</label>
        <input type="text" onChange={changeInput} value={name} name='name' ref={nameRef}/>
      </p>
      <p>
        <label htmlFor="">직업</label>
        <input type="text" onChange={changeInput} value={job} name='job'/>
      </p>
      <p>
        <button>추가</button>
      </p>
    </form>
  )
}

export default AddUser