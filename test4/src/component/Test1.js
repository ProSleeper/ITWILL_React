import React, { useState } from 'react'


const Test1 = () => {
  const [data, setData] = useState([
    { id: 1, name: "배수지", age: 27, done: true },
    { id: 2, name: "유인나", age: 27, done: false },
    { id: 3, name: "정인선", age: 27, done: true },
    { id: 4, name: "박신혜", age: 27, done: false },
    { id: 5, name: "손예진", age: 27, done: false },
    // { id: 6, name: "한예슬", age: 27, done: true },
  ]);

  const onAdd1 = () => {
    setData(data.concat({id:6, name:'한예슬', age:35, done:false}))
  }

  const onAdd2 = () => {
    const newData = data.concat({ id: 7, name: '안젤리나', age: 25, done: true })
    setData(newData);
  }
  
  const onAdd3 = () => {
    setData(
      [
      ...data, //스프레드 연산자로 기존 값을 가져와서 추가 해주는 방식
        {
          id: 8, name: '정인아', age: 35, done: false
        }
      ]
    )
  }

  const onAdd4 = () => {
    const newData = { id: 9, name: '박은빈', age: 25, done: false }
    setData([...data, newData])
  }

  return (
    <div>
      <p>
        <button onClick={onAdd1}>추가1</button>
        <button onClick={onAdd2}>추가2</button>
        <button onClick={onAdd3}>추가3</button>
        <button onClick={onAdd4}>추가4</button>
      </p>
      {
        data.map((item, index) => <p key={item.id}>{item.id} / {item.name}, {item.age}, {item.done ? '참' : '거짓'}</p>)
      }
      <hr />
      {
        data.map(item => <p key={item.id}>{item.id} / {item.name}</p>)
      }
    </div>
  )
}

export default Test1