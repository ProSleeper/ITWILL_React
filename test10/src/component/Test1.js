
/*
  useEffect는 버튼을 클릭할때마다 계속적으로 실행되고
  useLayoutEffect는 딱 한번만 실행되고 버튼을 눌러도 실행되지 않는다.
*/


import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

const Test1 = () => {
  const [count, setCount] = useState(1);
  const ref1 = useRef();
  const ref2 = useRef();


  const onColor = () => {
    ref1.current.style.color = "pink";
    ref2.current.style.color = "green";
    setCount(count + 1);
  };

  //계속해서 바뀜
  useEffect(() => {
    ref1.current.style.color = "tomato";
  });

  //한번만 바뀜
  useLayoutEffect(() => {
    ref2.current.style.color = "skyblue";
  });

  return (
    <div style={{ margin: 30 }}>
      <h1>출력: {count}</h1>
      <h1 ref={ref1}>useEffect</h1>
      <h1 ref={ref2}>useLayoutEffect</h1>
      <button onClick={onColor}>확인</button>
    </div>
  );

};

export default Test1;

/**
 * 1. 
 * 특정 작업이 실행된 후에 자동으로 실행되는 함수를 만들 때 사용
 * useEffect(콜백함수, [의존변수])
 * 2개의 인수를 받는데 첫번째는 function으로써 effect이고
 * 두번째 인수는 상태가 바뀔때마다 첫번째 인수가 다시 실행된다.
 * 
 * 2.
 * useEffect가 실행되는 시점
 * -- 처음 화면이 표시될때
 * -- 업데이터 할때(props가 변경될때, state가 변경될때)
 * -- 화면이 사라질 때
 * 
 * 3. 
 * mount: 리액트에서 특정 컴포넌트를 끼워넣는 것을 말함
 * 
 * 문법1: mount/update
 * useEffect(() => {
     To Do
 })
 * 
 * 문법 2: mount할때만 사용
 * useEffect(() => {
     To Do
 }, []) []는 한번만 실행 됨(초기값)
 * 
 * 문법 3: mount / 특정 변수가 바뀔때마다 실행()
 * 사용빈도: props(80%), state
 * useEffect(() => {
     To Do
 }, [의존 변수])
 * 
 * 문법 4: 메모리 누수를 방지하기 위해 사용
 * useEffect(() => {
     Todo

     //effect의 뒷처리
     return () => {
       
     }
 }. [의존 변수, 의존 변수])
 * 
 * 사용범위
 * 1. props로 받은 값을 처리할때
 * 2. 외부 API (axios,fetch) - 외부 json 호출 할때
 * 3. setInterval, setTimeout
 * 4. 외부 라이브러리 사용 할때
 * 
 */
