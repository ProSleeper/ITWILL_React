import React, {createContext, useMemo} from 'react'
import { useState } from 'react';

export const ColorContext = createContext();

const ColorProvider = (props) => {

  const [color, setColor] = useState('blue');

  //이벤트 함수
  const onTomato = () => {
    return setColor('tomato')
  }
  const onPink = () => {
    return setColor('pink')
  }
  const onSkyblue = () => {
    return setColor('skyblue')
  }
  const onYellow = () => {
    return setColor('yellow')
  }

  //useMeMO 전달값 (()=>({전달 값}). [전달 값])
  const value = useMemo(() =>({
    color, onTomato, onPink, onSkyblue, onYellow
  }), [color, onTomato, onPink, onSkyblue, onYellow])

  return (
   
      // <ColorContext.Provider value={{color, onTomato, onPink, onSkyblue, onYellow}}>
    <ColorContext.Provider value={value }>
        {props.children}
      </ColorContext.Provider>
   
  )
}

export default ColorProvider