import React, { Fragment } from 'react'
import "./Test1.css";

const Test1 = () => {

  const title = '제목입니다.'

  //카멜 표기법
  const style1 = {
    fontSize: 40,
    backgroundColor: 'pink',
    padding:10
  }


  return (
    <Fragment>
      <h2 style={style1}>{title}</h2>
      <div className="con-box">
        <article>test</article>
        <article>test</article>
        <article>test</article>
        <article>test</article>

      </div>
    </Fragment>
  )
}

export default Test1