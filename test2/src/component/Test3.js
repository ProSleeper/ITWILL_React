import React from 'react'

const Sub = () => {
  return (
    <div>
      <h2>배수지의 이달의 할일</h2>
      <ul>
        <li>장소: 서울</li>
        <li>날짜: 22.09.27</li>
        <li>시간: am 10:30</li>
        <li>내용: 업무미팅</li>
      </ul>
    </div>
  );
}

const Test3 = () => {
  return (
    <div>
      <Sub />
      <hr />
      <Sub />
      <hr />
      <Sub/>
    </div>
  )
}

export default Test3