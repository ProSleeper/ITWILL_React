import React from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';


const MemberDetail = () => {

  const { memberId } = useParams();
  const history = useHistory();
  const [member, setMember] = useState({})

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${memberId}`;
    fetch(url)
    .then(response => response.json())
    .then(response => setMember(response));
  })

  const style = {
    border: '2px solid tomato',
    padding: 20,
    margin: 10,
    borderRadius:15
  }

  const onBack = () => {
    history.push('/')
  }

  const { name, email, phone, website } = member;

  return (
    <div style={style}>
      <h2>멤버 세부내용: No. {memberId} </h2>
      <h3>이름: {name}</h3>
      <h3>이메일: {email }</h3>
      <h3>전화번호: {phone }</h3>
      <h3>웹사이트: {website }</h3>
      <button onClick={onBack}>첫 페이지</button>
      
    </div>
  )
}

export default MemberDetail