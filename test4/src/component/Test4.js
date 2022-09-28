import React, {useRef} from 'react'

const Test4 = () => {

  const idRef = useRef()
  const pwRef = useRef()



  const click = () => {
    const data = {
      id: idRef.current.value,
      pw: pwRef.current.value,
    }
    console.log(data);
    const json = JSON.stringify(data, null, 2);
    console.log(json);
  }

  return (
    <div>
      <h3>useRef 설명</h3>
      id: <input type="text" ref={idRef} />
      pwd: <input type="text" ref={pwRef}/>
      <button onClick={click}>확인</button>
    </div>
  )
}

export default Test4