/**
 * axios로 search 주소로 사용자가 입력한 값으로 다른 사이트의 검색결과를 가져올 수 있다.
 * 
 */



import React from 'react';
import axios from 'axios'
import { useState, useEffect } from 'react';

const Test4 = () => {

  const [data, setData] = useState([]);
  const [text, setText] = useState('css');

  useEffect(() => {
    const url = `https://hn.algolia.com/api/v1/search?query=${text}`;
    axios.get(url)
    .then(response => setData(response.data.hits))

  },[text])

  return (
    <div>
      <input type="text" onChange={event => setText(event.target.value)} value={text } />
      {
        data.map(item => <p key={item.objectID}>{item.title}</p>)
      }
    </div>
  )
}

export default Test4