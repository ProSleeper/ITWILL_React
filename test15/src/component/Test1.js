/**
 * useMemo는 성능상의 이유 때문에 쓴다.
 * 가령 렌더링시 2개의 함수 중 하나의 함수의 값만 바뀌었는데 두개의 함수가 모두 실행되는 경우
 * 값이 변경된 함수만 실행되도록 하는데 쓰인다.
 */


import React from 'react';
import { useState, useEffect, useMemo } from 'react';

const user = [
  {id:1, name:'배수지'},
  {id:2, name:'고마워'},
  {id:3, name:'정말'},
  {id:4, name:'진심으로'},
  {id:5, name:'지금'},
  {id:6, name:'어디에'},
  {id:7, name:'있나요'},
  {id:8, name:'대체'},
  {id:9, name:'어디서'},
  {id:10, name:'뭘하나요'},
]

const Test1 = () => {

  const [text, setText] = useState('')
  const [search, setSearch] = useState('')
  //const [data, setData] = useState(user)

  const onSearch = () => {
    setSearch(text);
  }

  // useEffect(() => {
  //   setData(user.filter((item) => {
  //     return item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  //   }))
  // }, [search])


  const data = useMemo(() => {
    try {
      console.time("시간")
      return user.filter((item) => {
        return item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      })
    } catch (error) {
      
    } finally {
      console.timeEnd("시간")
    }
  }, [search])


  return (
    <div>
      <input type="text" value={text} onChange={event => setText(event.target.value)} />
      <button onClick={onSearch}>검색</button>
      <hr />
      {
        data.map((item) => {
          return <p key={item.id}>{item.id} / {item.name}</p>
        })
      }
    </div>
  )
}

export default Test1


// [메모이제이션]
// 컴퓨터가 동일한 계산을 반복해서 할때 이전에 계산한 값을 메모리에 저장 함으로써
// 동일한 계산의 반복 수행을 제거하여 프로그램 속도를 빠르게 하는 기술이다




// - useMemo : return 값을 기억함 (잘쓰기 쉽지않다 + context)
// 3가지 방법(memo, useMemo, React.memo)



// useMemo(함수,의존성)
// useMemo(() => {}, deps)
// useMemo(() => {}, [의존변수])

// useCallback(함수,의존성)
// useCallback(() => {}, [의존변수])

// - 함수컴포넌트는 렌더링 될때마다 나의 것을 다시 계산 처리함
// 생성뿐만아니라 업데이트 될때마다 다시 만들기 때문이다
// 그래서 useCallback이 필요함
// 함수형이라서 함수가 실행 될때마다 내부의 것은 메모리가 안되서
// 다시 만들어야 쓸수있다
// 그래서 HOOKS가 등장 하고 클래스 컴포넌트처럼 사용이 가능해짐