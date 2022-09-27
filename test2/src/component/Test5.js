import React from 'react'


const Sub = (props) => {

  return (
    <div>
      <h3>이름: {props.name} ({typeof props.name})</h3>
      <h3>나이: {props.age} ({typeof props.age})</h3>
      <h3>로그인여부: {props.done ? '로그인' : '로그아웃'}
      ({typeof props.done})</h3>

    </div>
  );
  
}

const Test5 = () => {

  const data1 = { name: '박신혜', age: 28, done: true };
  const data2 = { name: '김신혜', age: 32, done: false };


  return (
    <div>
      <Sub name='유인나' age={30} done={true} />
      <Sub name='정인선' age={20} done={false} />
      <hr />
      <Sub name={data1.name} age={data1.age} done={data1.done} />
      <Sub name={data2.name} age={data2.age} done={data2.done} />
      <hr />
      <Sub {...data1} />
      <Sub {...data2} />
      
    </div>
  );
}

  

export default Test5;
