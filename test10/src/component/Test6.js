/**
 * 
 * 버튼을 눌러서 지정한 시간마다 카운트가 증가하게 만든 코드
 * useEffect를 이용해서 카운트 증가를 구현했다.
 * 
 * 
 */




import React, { useEffect, useState } from 'react'

const Test6 = () => {

  const [count, setCount] = useState(1);
  const [done, setDone] = useState(false);

  const onToggle = (() => {
    setDone(!done);
  })

  const onReset = () => {
    setDone(false);
    setCount(0)
  }

  useEffect(() => {
    console.log(count);
    let timer = null;
    if (done) {
      console.log('활성');
      timer = setInterval(() => {
        setCount(state => state + 1)
      }, 1000);
    }
    else if (!done && count === 0) {
      console.log('비활성');
      clearInterval(timer)
    }
    console.log('비활성2');

    return () => {
      console.log('Clear Count');
      clearInterval(timer)
    }
  }, [done, count])

  return (
    <div style={{margin:30}}>
      <h1 style={{ fontSize: 50 }}>
        카운트: {count}
      </h1>
      <button onClick={onToggle}>
        {
          done ? '중지':'시작' 
        }
        </button>
      <button onClick={onReset}>초기화</button>
    </div>
  )
}

export default Test6