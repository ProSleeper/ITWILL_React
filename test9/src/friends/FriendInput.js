import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';

const FriendInput = ({onAdd}) => {

  const nameRef = useRef();

  const [form, setForm] = useState({
    name: '',
    age: '',
    image:'',
  });

  const { name, age, image } = form;

  const onChangeInput = (event) => {
    const { value, name } = event.target;
    setForm({
      ...form,
      [name]:value
    })
  }

  const onInsert = () => {
    if (!name || !age || !image) return;


    onAdd(form);
    setForm({
      name: '',
      age: '',
      image:''
    })

    nameRef.current.focus();
  }

  return (
    <div className="formadd">
        <p>
          <label htmlFor="">이름</label>
        <input type="text" value={name} name='name' onChange={onChangeInput} ref={nameRef} />
        </p>
        <p>
          <label htmlFor="">나이</label>
          <input type="text" value={age} name='age' onChange={onChangeInput}/>
        </p>
        <p>
          <label htmlFor="">사진</label>
          <input type="text" value={image} name='image' onChange={onChangeInput}/>
        </p>
        <p>
          <button onClick={onInsert}>추가</button>
        </p>
      </div>
  )
}

export default FriendInput