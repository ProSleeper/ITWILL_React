/**
 * Test4에서 데이터를 받아서 처리해주는 부분
 */

import React from 'react'

const Test4Name = ({name, onName}) => {
  return (
    <div>
      <label htmlFor="">이름: </label>
      <input type="text" onChange={onName}/>
      <span style={{marginLeft:20}}>{name}</span>
    </div>
  )
}

export default Test4Name