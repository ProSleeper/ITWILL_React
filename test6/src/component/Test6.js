import React from 'react'
import images from '../assets/api/images'
import { useState } from 'react';



const Test6 = () => {
  const [data,setData] = useState(images);




  return (
    <div>
      {
        data.map((item) => {
          return (
            <article key={item.id}>
              <h3>이름: {item.title} </h3>
              <img src={item.image} alt="" width='300' />
            </article>
          )
        })
    }    
    </div>
  )
}

export default Test6