import React, {useContext} from 'react'
import { ColorContext } from '../../contexts/ColorContext';

const Color = () => {

  //Provider의 value 가져오기
  const {color, onTomato, onPink, onSkyblue, onYellow} = useContext(ColorContext)

  return (
    <div>
      <h1 style={{color:color}}>컬러</h1>
      <p>
        <button onClick={()=>onTomato()}>tomato</button>
        <button onClick={()=>onPink()}>pink</button>
        <button onClick={()=>onSkyblue()}>skyblue</button>
        <button onClick={()=>onYellow()}>yellow</button>
      </p>
    </div>
  )
}

export default Color