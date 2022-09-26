import React from 'react'

const Test4 = () => {

  const style1 = {
    backgroundColor: 'pink',
    fontSize: 30,
    color:'green'
  }

  return (
    <div>
      <p style={style1}>지금은 React 공부 중</p>
      <p>지금은 수명 중</p>
      <p style={{ backgroundColor: 'tomato', padding: 20, fontSize: 50, textIndent: 20 }}>지금은 React 공부 중</p>
    </div>
  )
}

export default Test4