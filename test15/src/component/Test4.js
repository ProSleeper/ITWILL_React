/**
 * memo를 만드는 방법 1번째
 */

import React, { useState, useCallback } from 'react';
import Test4Sub from './Test4Sub';
import Test4Title from './Test4Title';

const Test4 = () => {

  const [age, setAge] = useState(20);
  const [money, setMoney] = useState(200)

  const onAge = useCallback(() => {
    setAge(age + 1)
  }, [age])
  
  const onMoney = useCallback(() => {
    setMoney(money + 10)
  }, [money])

  return (
    <div>
      <Test4Title/>
      <Test4Sub text='나이' count={age} />
      <button onClick={onAge}>나이증가</button>
      <hr />
      <Test4Sub text='급여' count={money} />
      <button onClick={onMoney}>급여증가</button>
    </div>
  )
}

export default Test4