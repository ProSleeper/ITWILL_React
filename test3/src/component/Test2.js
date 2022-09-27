import React, { useState } from "react";

const Test2 = () => {

  const [bgColor, setBgColor] = useState('pink')
  
const onColor = () => {
  setBgColor(bgColor === 'pink'? 'tomato': 'pink')
}

  return (
    <div>
      <p>h2 클릭하면 배경색이 pink / tomato</p>
      
      <h2 style={{width:400, padding:50, border:'1px solid #000', background:bgColor, cursor:"pointer"}} onClick={() => {setBgColor(bgColor === 'pink'? 'tomato' : 'pink')}}>
        배경색 : {bgColor} 
        </h2>
        
    </div>
  )
}

export default Test2