
/**
 * useMemo는 성능상의 이유 때문에 쓴다.
 * 가령 렌더링시 2개의 함수 중 하나의 함수의 값만 바뀌었는데 두개의 함수가 모두 실행되는 경우
 * 값이 변경된 함수만 실행되도록 하는데 쓰인다.
 */





import React, { useState } from 'react';
import Test2Sub from './Test2Sub';

const Test2 = () => {

  const [color, setColor] = useState('');
  const [movie, setMovie] = useState('')

  const onColor = (event) => {
    setColor(event.target.value);
  }

  const onMovie = (event) => {
    setMovie(event.target.value);
  }



  return (
    <div>
      <h2>당신이 좋아하는 색은?</h2>
      <p>
        <input type="text" value={color} onChange={onColor} /><br />
        <span>pink, tomato, orange, yellow</span>
      </p>
      <h2>당신이 좋아하는 영화는?</h2>
      <p>
        <label htmlFor="">공조</label>
        <input type="radio" name='movie' value='공조' onChange={onMovie} />
      </p>
      <p>
        <label htmlFor="">스파이더맨</label>
        <input type="radio" name='movie' value='스파이더맨' onChange={onMovie}/>
      </p>
      <p>
        <label htmlFor="">범죄도시2</label>
        <input type="radio" name='movie' value='범죄도시2' onChange={onMovie}/>
      </p>
      <p>
        <label htmlFor="">해리포터와 죽음의 성물 part2</label>
        <input type="radio" name='movie' value='해리포터와 죽음의 성물 part2' onChange={onMovie}/>
      </p>
      <hr />
      <Test2Sub color={color} movie={movie} />
    </div>
  )
}

export default Test2