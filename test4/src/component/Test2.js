import React from 'react'

const Test2 = () => {

  const click = (event) => {
    console.log(event.target);  //내가 클릭한 대상
    console.log(event.currentTarget); //클릭한 요소의 부모 + 모든 자식요소
  }

  const onChange = (event) => {
    console.log(event.target);
    console.log(event.target.value);
  }

  return (
    <div>
      <h2 onClick={click}>
        <span>확인</span>
        <em>클릭</em>
        <strong>누르기</strong>
      </h2>
      <hr />
      <input type="text" onChange={onChange} />
    </div>
  )
}

export default Test2