

/**
 * 1. Array.filter로 검색하는 방법과 대소문자 구분 없이 검색하는 코드
 * 2. useEffect를 이용해서 값의 변화가 있으면 자동으로 검색하도록 구현
 * 
 */




import React, { useState, useEffect } from 'react'


const dataList = [
  {id:1, name:'영운'},
  {id:2, name:'동우'},
  {id:3, name:'sniker'},
  {id:4, name:'bomb'},
  {id:5, name:'slice'},
  {id:6, name:'바보수정'},
  {id:7, name:'노스카나'},
  {id:8, name:'never'},
  {id:9, name:'BORIBORI'},
  {id:10, name:'neptune'},
  {id:11, name:'monitor'},
]


const Test2 = () => {

  const [data, setData] = useState(dataList)
  const [text, setText] = useState()

  const changeInput = (event) => {
    const { value } = event.target;
    setText(value);
  }

  const click1 = () => {
    //대소문자 구분하는 검색방식
    // setData(dataList.filter((item) => {
    //   return item.name.indexOf(text) !== -1
    // }))

    //입력과 단어 모두 소문자로 변환해서 대소문자 구분없이 검색하는 방법
    // setData(dataList.filter((item) => {
    //   return item.name.toLocaleLowerCase().indexOf(text.toLocaleLowerCase()) !== -1
    // }))

    //정규표현식으로 대소문자 구분없이 검색
    setData(dataList.filter((item) => {
      const result = new RegExp(text, 'ig') //i가 대소문자 구분 없이 정규표현식 검사를 해주는 조건
      return item.name.match(result);
    }))


  }

  //text가 변할때마다 렌더링이 끝난 후에 검사해서 실시간 검색해줌.
  useEffect(() => {
    setData(dataList.filter((item) => {
      const result = new RegExp(text, 'ig') //i가 대소문자 구분 없이 정규표현식 검사를 해주는 조건
      return item.name.match(result);
    }))
  }, [text])
  
  
  return (
    <div>
      <p>
        <input type="text" placeholder='검색어를 입력하세요.' value={text} onChange={changeInput} />
        <button onClick={click1}>검색</button>
        <hr />
        <ul>
          {
            data.map((item) => {
              return <li key={item.id}>{item.id} / {item.name}</li>
            })
          }
        </ul>
      </p>
    </div>
  )
}

export default Test2