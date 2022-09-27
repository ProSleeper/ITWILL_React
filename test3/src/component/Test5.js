import React, {useState} from 'react'
import "./Test5.css"





const Test5 = () => {
  
  const [isActive, setIsActive] = useState(false)

  const onAdd = () => setIsActive(true)
  const onRemove = () => setIsActive(false)

  return (
    <div className="wrap">
      <div className="on">오늘은 화요일입니다.</div>
      <div className="test">오늘은 화요일입니다.</div>
      <div className={isActive ? "on" : ""}>오늘은 화요일입니다.</div>
      <div className={`${isActive ? "on test" : ""} ${isActive ? "on" : ""}`}>오늘은 화요일입니다.</div>
      <p>
        <button onClick={onAdd}>addClass</button>
        <button onClick={onRemove}>removeClass</button>
        <button onClick={() => setIsActive(!isActive)}>toggleClass</button>
      </p>
    </div>
  );
}

export default Test5