import React from 'react'
import Test6Sub from './Test6Sub';

const Test6 = () => {
  return (
    <div>
      < Test6Sub
        title='배수지 신상정보'
        name='배수지'
        age={26}
        addr='서울'
        tel='010-2342-2311'
        color='tomato'
        done={true}
      />
      < Test6Sub
        title='유인나 신상정보'
        addr='제주'
        color='blue'
      />
    </div>
  );
}
  

  export default Test6;