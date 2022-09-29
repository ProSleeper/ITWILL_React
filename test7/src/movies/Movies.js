

/**
 * 파일을 읽어와서 1개의 컴포넌트로 만들고 그것을 list로 만들어서
 * 최종적으로 Movies에서는 list를 보여주는 방식
 * 그리고 onDelete 함수를 이용해서 삭제하는 방식을 보여준다.
 * 리액트를 사용하는 이유를 보여주고 코드의 중복을 꽤 많이 제거해주고, 데이터의 흐름을 보여준다.
 * 
 * 제일 중요한 개념은 계속해서 나오는 props, 즉 데이터는 위에서 아래로 흐른다. 이 개념이 제일 중요하다.
 */

import React, { useState } from "react";
import "./style.css";
import MoviesList from './MoviesList';
import movieData from "../assets/api/movie";


const Movies = () => {

  const [data, setData] = useState(movieData);


  const onDelete = (number) => {
    console.log('삭제');
    setData(data.filter((item) => {
      return item.no !== number
    }))
  }

  return (
    <div className="wrap">
      <h2>최신 개봉작</h2>
      <MoviesList data={data} onDelete={onDelete} />
    </div>
  );
};

export default Movies;
