import React from "react";

const Sub = ({ name, place, date, time, content }) => {

  //비구조 할당
  // const { name, place, date, time, content } = props;


  return (
    <div>
      <h2>{name}의 이달의 할일</h2>
      <ul>
        <li>장소: {place}</li>
        <li>날짜: {date}</li>
        <li>시간: {time}</li>
        <li>내용: {content}</li>
      </ul>
    </div>
  );
};

const Test4 = () => {
  return <div>
    <Sub name='배수지' place='서울' date='22.09.30' time='am 10:30' content='회사미팅' />
    <hr />
    <Sub name='유인나' place='부산' date='22.10.30' time='am 4:50' content='팬미팅' />
    <hr />
    <Sub name='정인선' place='대구' date='22.05.30' time='am 09:20' content='미팅'/>
  </div>;
};

export default Test4;
