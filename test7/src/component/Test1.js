/**
 * onClick 사용 시 onClick ={method()} 이렇게 사용하면 안된다.
 * 안되는 이유는 js강의를 들으면 알겠지만 method()를 직접적으로 넣으면 method()를 실행한 값이 onClick의 값으로 들어간다.
 * 즉 클릭해서 실행되는 게 아니고 바로 실행된다.
 * 
 */


import React from 'react';
const Test1 = () => {

  const onAdd1 = () => {
    alert('확인1 버튼 클릭함')
  }

  const onAdd2 = (text) => {
    alert(text)
    
  }

  return (
    <div>
      <button onClick={onAdd1}>확인1</button>
      {/* <button onClick={onAdd2('버튼2')}>확인2</button> */}
      <button onClick={() => onAdd2('버튼2')}>확인2</button>
    </div>
  )
}

export default Test1