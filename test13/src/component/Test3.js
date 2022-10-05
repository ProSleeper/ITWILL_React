
/**
 * 일반 css와 module css의 차이
 * module css는 자동으로 무작위 문자를 뒤에 주어서 이름 중복이 나지 않게 해준다.
 * 
 */



import React from 'react';
import "./Test3.css";
import myStyle from "./Test3.module.css";

const Test3 = () => {
  return (
    <div className='wrap'>
      <div className='box'></div>
      <div className={myStyle.box}></div>
      <div className='size bg'></div>
      <div className={`${myStyle.size} ${myStyle.bg}`}></div>
      <div className={`size ${myStyle.bg}`}></div>
      
      <div className={[myStyle.size, myStyle.bg].join('')}></div>
      <div className={['size', myStyle.bg].join('') }></div>
    </div>
  )
}

export default Test3;


/**
 * module.css: css의 이름이 충돌나지 않도록 이름을 자동으로 생성
 * 
 * 1. 파일명.css
 * 2. 파일명.module.css
 * 
 * 클래스명이 중복되지 않도록 작업이 가능
 * 일반 css: className='box'
 * module.css: 파일명_클래스명_xxxxxxx
 * 
 */








