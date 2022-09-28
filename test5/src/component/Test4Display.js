/**
 * Test4에서 데이터를 받아서 처리해주는 부분
 */

import React from 'react'

const Test4Display = ({name, animal }) => {
  return (
    <div>
      <h2>{name}가 좋아하는 동물은 {animal } 입니다.</h2>
    </div>
  )
}

export default Test4Display