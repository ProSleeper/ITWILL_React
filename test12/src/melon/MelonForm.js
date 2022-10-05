import React, { useEffect, useState } from 'react'
import "./MelonForm.css";


const MelonForm = ({onSearch}) => {

  const [text, setText] = useState();

  //검색값이 바뀔때마다 검색하는 방법 1
  const changeInput = (event) => {
    const { value } = event.target;
    setText(value)
    //onSearch(value)
  }

  //검색값이 바뀔때마다 검색하는 방법 2
  const onSubmit = (event) => {
    event.preventDefault();
    //onSearch(text)
    setText('');
  }

  //검색값이 바뀔때마다 검색하는 방법 3
  useEffect(() => {
    onSearch(text);
  },[text])

  return (
    <form className='MelonForm' onSubmit={onSubmit}>
      <input type="text" placeholder='曲名を入力してください' value={text} onChange={changeInput} />
    </form>
  )
}

export default MelonForm