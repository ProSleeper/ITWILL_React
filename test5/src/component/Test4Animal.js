/**
 * Test4에서 데이터를 받아서 처리해주는 부분
 */


import React from 'react'

const Test4Animal = ({animal, onAnimal}) => {
  return (
    <div>
      <label htmlFor="">동물:  </label>
      <input type="text" onChange={onAnimal}/>
      <span style={{ marginLeft: 20 }}>{animal}</span>
    </div>
  )
}

export default Test4Animal