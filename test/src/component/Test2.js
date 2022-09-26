import React, {Fragment} from 'react'

function Test2() {
  return (
    //리액트 컴포넌트를 묶는 방법 3가지
    //1. div, 2.Fragment(import필요), 3.<>(빈태그) 로 묶는다.
  //   <div>
  //     <h2>JSX영역</h2>
  //     <p>return()안에 한줄이상의 코드는 div로 묶는다.</p>
  //   </div>
  //   <Fragment>
  //   <h2>JSX영역</h2>
  //   <p>return()안에 한줄이상의 코드는 div로 묶는다.</p>
  // </Fragment>
    <>
    <h2>JSX영역</h2>
    <p>외 태그는 반드시 /로 닫는다.</p>
    <img src="" alt="" />
    <input type="text" />
  </>
  )
}

export default Test2



