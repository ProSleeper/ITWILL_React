import React from 'react'
import propTypes from "prop-types";

const Test6Sub = ({title, name, age, addr, tel, color, done }) => {
  return (
    <div style={{ border: `5px solid ${color}`, padding: 30 }}>
      <h2>{title}</h2>
      <ul>
        <li>이름: {name}</li>
        <li>나이: {age}</li>
        <li>주소: {addr}</li>
        <li>전화: {tel}</li>
        <li>컬러: {color}</li>
        <li>로그인여부: {done?'로그인':'로그아웃'}</li>
      </ul>
    </div>
  )
}

//PropType은 전달받은 데이터의 유효성을 검증하기 위해서
//타입스크립트를 사용한다.
Test6Sub.propTypes = {
  name: propTypes.string.isRequired,
  age: propTypes.string.isRequired,
  addr: propTypes.string,
  tel: propTypes.string,
  color: propTypes.string,
  done:propTypes.bool
}

Test6Sub.defaultProps = {
  name: '아무개',
  age: 30,
  addr: '대한민국',
  tel:'010-0000-0000',
  color: 'yellow',
  done:true
}




export default Test6Sub