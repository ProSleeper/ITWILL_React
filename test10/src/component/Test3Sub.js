
/**
 * 
 * useEffect를 사용할때
 *  return () => {
      window.addEventListener('mousemove', move);
    }
 * 이렇게 뒷처리 함수를 작성해주면 useEffect함수를 사용할때 window.addEventListener('mousemove', move); 이 코드에 해당하는 메모리 낭비를 하지 않는다.
 * 
 */



import React, { useEffect, useState } from 'react'

const Test3Sub = () => {

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const move = (event) => {

    setX(event.clientX)
    setY(event.clientY)


   
  }

  // useEffect( () => {
  //   console.log('useEffect');
  //   window.addEventListener('mousemove', move);
  // }, [])//[] 해주면 useEffect 함수가 한번만 실행된다. 그래서 지금 이 코드(마우스가 움직이면 좌표를 찍어주는 함수)는 한번만 실행하는 게 맞기 때문에 이렇게 써야한다.



  useEffect( () => {
    console.log('useEffect');
    window.addEventListener('mousemove', move);

    //뒷처리 함수(메모리 누수를 방지)(어떻게???)
    return () => {
      window.addEventListener('mousemove', move);
    }

  }, [])

  
  


  return (
    <div>
      <h2>마우스 좌표</h2>
      <div style={{width:500, height:150, fontSize:50, margin:20, textAlign:"center", border:'1px solid #000', lineHeight:'150px'}}>
        X: {x} / Y: {y}
      </div>
    </div>
  )
}

export default Test3Sub