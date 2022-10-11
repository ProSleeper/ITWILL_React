import React from 'react'
import data from './data'
import { Link } from 'react-router-dom';



const Products = () => {
  return (
    <div>
      <h1>운동화 리스트 목록</h1>
      {
        data.map((item) => {
          return <div key={item.id}>
            <h3>
              <Link to={`/products/${item.id}`}>
                {item.name}
              </Link>
              - 가격: ${item.price}
            </h3>
            <p>
              <Link to={`/products/${item.id}`}>
                <img src={item.photo} width='150' alt="" />
              </Link>
            </p>
          </div>
        })
      }
    </div>
  )
}

export default Products;





