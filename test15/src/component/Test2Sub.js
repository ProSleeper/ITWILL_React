import React, {useMemo} from 'react'


const getColor = (color) => {
  
  const colorList = [];

  switch (color) {
    case 'pink': return '분홍'
    case 'tomato': return '주황'
    case 'orange': return '오렌지'
    case 'yellow': return '노랑'
  
    default:
      return '없음';
  }



  colorList[color] = '분홍'
  colorList[color] = '주황'
  colorList[color] = '오렌지'
  colorList[color] = '노랑'
  colorList[color] = '분홍'


}

const getMovie = (movie) => {
  const colorList = [];

  console.log('getMovie');
  switch (movie) {
    case '공조': return '현빈, 유해진, 윤아'
    case '스파이더맨': return '앤드류 가필드, 톰 홀랜드'
    case '범죄도시2': return '마동석, 윤계상, 장이수'
    case '해리포터와 죽음의 성물 part2': return '해리포터, 엠마왓슨, 볼드모트'
  
    default:
      return '없음';
  }
}


const Test2Sub = ({ color, movie }) => {
  
  //const colorInfo = getColor(color);
  //const movieInfo = getMovie(movie);

  const colorInfo = useMemo(() => {
    return getColor(color)
  }, [color])

  const movieInfo = useMemo(() => {
    return getMovie(movie)
  }, [movie])

  return (
    <div>
      <h4>좋아하는 색은 {color} / {colorInfo}</h4>
      <h4>좋아하는 영화는 {movie} / {movieInfo}</h4>
    </div>
  )
}

export default Test2Sub