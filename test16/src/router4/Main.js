import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const Main = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/users';

    fetch(url)
      .then(response => response.json())
      .then(response => setData(response));
  }, [])

  return (
    <div>
      <h1>member: {data.length}명</h1>
    </div>
  )
}

export default Main