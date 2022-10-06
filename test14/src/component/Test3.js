/**
 * api를 이용해서 사용자에게 입력받아서 get요청 하는 방법
 * 
 * 
 */

 import React from 'react';
 import axios from 'axios'
 import { useState, useEffect } from 'react';
 
 
 const Test3 = () => {
   
   const [num, setNum] = useState(1);
   const [data, setData] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState('');
   const [valueId, setValueId] = useState(1);
 
   useEffect(() => {
     axios.get(`https://jsonplaceholder.typicode.com/posts/${num}`)
     .then((response) => {
       setData(response.data)
       setLoading(false);
       setError('');
     })
     .catch((error) => {
       setData([data])  //왜 에러가 아닐까?
       setLoading(true)
       setError('데이터를 찾을 수 없습니다.')
     })
   }, [num])
 
   const changeInput = (event) => {
     setValueId(event.target.value)
   }

   const click1 = () => {
     setNum(valueId);
   }
 
   return (
     <div>
       <input type="text" value={valueId} onChange={changeInput} />
         {
           data && loading ? <h2>로딩중...</h2> : <h3> 출력: {data.title} </h3>
         }
         <p>
           {
             error ? error : null
           }
         </p>
       <button onClick={click1}>リクエスト</button>
     </div>
   )
 }
 
 export default Test3