
/**
 * Ajax 요청방법(비동기 http 요청)
 * 1. fetch 사용(javascript에서 지원)
 * - fetch(url, [option]);
 * 
 * - fetch(url)
 * .then(response => response.json())
 * 
 * 2. axios 사용
 *  - axios.get(url)
 *    .then(response=>response.json())
 *    .then(response=>response.json())
 * 
 * 3. async / await 사용
 *  비동기를 동기처럼 사용
 * 
 * 4. async / await + axios 사용
 *  
 */


import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";

const Test1 = () => {

  const [data, setData] = useState([]);
  
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos")
  //     .then(response => response.json())
  //   .then(response=>console.log(response))
  // }, [])

  // useEffect(() => {
  //   axios.get("https://jsonplaceholder.typicode.com/todos")
  //     // .then(response => setData(response.data))
  //     // .then(response=>console.log(response))
  // }, [])

  // useEffect(() => {
  //   const getData = async () => {
  //     const response = await fetch("https://jsonplaceholder.typicode.com/todos")
  //     const data = await response.json();
  //     setData(data);
  //   }

  //   getData();
  // }, [])

  useEffect(() => {
      const getData = async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos")
        setData(response.data);
      
      }
      getData();
    }, [])

  return (
    <div>
      {
        data && data.map(item => <p key={item.id}>{item.id} / {item.title}</p>)
      }
      
    </div>
  )
}

export default Test1;







