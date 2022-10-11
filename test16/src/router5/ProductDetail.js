import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import data from './data'

const ProductDetail = () => {

  const { productID } = useParams();
  const history = useHistory();

  const thisPro = data.find((item) => {
    return item.id === productID
  })

  const onGo = () => {
    history.push('/products')
  }


  return (
    <div>
      <h1>{thisPro.name} 상세페이지</h1>
      <h2>{thisPro.name} 가격: {thisPro.price} </h2>
      <p>
        <img src={thisPro.name} alt="" width='450'/>
      </p>
      <p>상품설명: {thisPro.description}</p>
      <button onClick={onGo}>제품목록</button>
    </div>
  )
}

export default ProductDetail