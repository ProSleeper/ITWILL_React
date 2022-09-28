/**
 * 1. 계속해서 useState를 이용해서 데이터를 변경하고 렌더링 해주는 연습
 * 2. changeInput 방식처럼 코드를 사용해야 최대한 중복을 줄이는 것도 가능하고 가독성도 높아질듯
 * 3. 일정 입력 이상이 되어야 button이 활성화 되게 하는 코드
 * 
 */



import React from 'react';
import { useState } from 'react';

const Test2 = () => {

  const [form, setForm] = useState({
    userId: '',
    userPwd: '',
    
  });

  const { userId, userPwd } = form;

  //이런 방식하고 콜백방식하고 다 익혀두는 게 좋을 듯
  const changeInput = (event) => {
    const { value, name } = event.target;
    setForm({
      ...form,
      [name]: value,
      
    })
  }

  return (
    <div>
      <input type="text" value={userId} name='userId' onChange={changeInput} />
      <input type="password" value={userPwd} name='userPwd' onChange={changeInput} />
      <button disabled={userPwd.length < 7}>확인</button>
      {
        userPwd.length > 6 ? <button>확인</button>:<button disabled>확인</button>
      }
    </div>
  )
}

export default Test2