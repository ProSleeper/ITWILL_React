import React from 'react'
import { useState } from 'react';

const SurveyStep1 = ({form: { name, age, addr, tel }, onText, onNext}) => {
  
  return (
    <div>
      <p>
        <label htmlFor="">이름</label>
        <input type="text" value={name} name = 'name' onChange={onText}/>
      </p>
      <p>
        <label htmlFor="">나이</label>
        <input type="text" value={age} name = 'age' onChange={onText}/>
      </p>
      <p>
        <label htmlFor="">주소</label>
        <input type="text" value={addr} name = 'addr' onChange={onText}/>
      </p>
      <p>
        <label htmlFor="">연락처</label>
        <input type="text" value={tel} name = 'tel' onChange={onText}/>
      </p>
      <p>
        <button onClick={onNext}>다음</button>
      </p>
    </div>
  )
}

export default SurveyStep1