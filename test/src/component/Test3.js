import React from 'react'

const Test3 = () => {

  const title = '신상 정보'
  const name = '배수지'
  const age = 27
  const addr = '서울'
  const gender = '여자'


  return (
    <div>
      <h2>{title }</h2>
      <ul>
        <li>이름: {name}</li>
        <li>나이: {age}</li>
        <li>주소: {addr }</li>
        <li>성별: {gender }</li>
      </ul>

    </div>
  )
}

export default Test3