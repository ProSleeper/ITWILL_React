import React from 'react'
import { useState, useEffect } from 'react';

const EditUser = ({current, onUpdate, setIsEdit}) => {


  const [user, setUser] = useState(current);
  const { id, name, job } = user;

  const changeInput = (event) => {
    const { value, name } = event.target;
    setUser({
      ...user,
      [name]:value
    })
  }

  const onSubmit = (event) => {
    event.preventDefault();

    onUpdate(user);

    setUser({
      name: '',
      job:''
    })
  }

  useEffect(() => {
    setUser(current)
  }, [current])


  return (
    <form onSubmit={onSubmit}>
      <h2>모범택시 고객 수정</h2>
      <p>
        <label htmlFor="">이름</label>
        <input type="text" value={name} name='name' onChange={changeInput}/>
      </p>
      <p>
        <label htmlFor="">직업</label>
        <input type="text" value={job} name='job' onChange={changeInput}/>
      </p>
      <p>
        <button>수정</button>
        <button onClick={() => {
          return setIsEdit(false)
        }} >취소</button>
      </p>
    </form>
  )
}

export default EditUser