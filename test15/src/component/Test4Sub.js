/**
 * memo를 만드는 방법 3번째
 */



import React from 'react'

const Test4Sub = ({text, count}) => {

  console.log("Test4Sub", text);
  return (
    <div>
      <h1>Test4Sub: {text} / {count}</h1>
    </div>
  )
}

export default React.memo(Test4Sub)