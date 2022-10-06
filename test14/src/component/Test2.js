/**
 * axios와 promise, then을 이용해서 api로 json 데이터를 읽는 방법
 */



import React from 'react';
import axios from 'axios'
import { useState, useEffect } from 'react';


const Test2 = () => {
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos")
    .then((response) => {
      setData(response.data)
      setLoading(false);
      setError('');
    })
    .catch((error) => {
      setData([])
      setLoading(true)
      setError('데이터를 찾을 수 없습니다.')
    })
  }, [])

  // 왜 이런 작업들을 useEffect로 하는걸까??

  return (
    <div>
      {
        data && loading ? <h2>로딩중...</h2> :
        data.map((item) => {
          return <p key={item.id}>{item.id} / { item.title }</p>
        })
      }
      <p>
        {
          error ? error : null
        }
      </p>
    </div>
  )
}

export default Test2