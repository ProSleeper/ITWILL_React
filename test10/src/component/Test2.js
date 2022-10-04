// 문법 2: mount할때만 사용
// useEffect(() => {
//     To Do
//}, []) []는 한번만 실행 됨(초기값)



import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

const Test2 = () => {
  const [text, setText] = useState();
  const ref1 = useRef();


  useEffect(() => {
    console.log('useEffect')
    ref1.current.focus();
  }, [])

  useLayoutEffect(() => {
    console.log('useLayoutEffect')
    ref1.current.focus();
  }, [])
  
  return (
    <div>
      <input type="text" ref={ref1} onChange={(event) => {return setText(event.target.value)}} />
    </div>
  )
}

export default Test2