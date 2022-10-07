/**
 * memo를 만드는 방법 2번째
 */


import React, { memo } from 'react'

const Test4Title = memo(() => {
  return (
    <div>
      <h1>Test4 Title 입니다.</h1>
    </div>
  )
})

export default Test4Title