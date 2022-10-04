import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const Test1Sub = () => {

  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date())
    }, 1000);

    console.log('아마 실행');
    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <div>
      <h1>날짜: {date.toLocaleDateString()} </h1>
      <h1>시간: {date.toLocaleTimeString()}</h1>
    </div>
  )
}

export default Test1Sub