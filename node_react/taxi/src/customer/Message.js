import React from 'react'
import { useEffect } from 'react';

const Message = ({ msg, isShow, setIsShow }) => {
  
  useEffect(() => {
  const timer = setInterval(() => {
    setIsShow(false);
  }, 2000);

  return () => {
    clearInterval(timer);
  }
}, [isShow])

  return (
    <div className={`message ${isShow ? 'on' : ''}`}>
      {msg }
    </div>
  )
}

export default Message