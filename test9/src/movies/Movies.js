/**
 * https://kobis.or.kr/kobis/business/main/main.do#none 영화관 입장권 통합 전산망 스타일의 ui만들기
 * 
 * - 컴포넌트
 * 0. Movies: 최상위 부모 컴포넌트(데이터와 함수를 모두 가지고 있으며, 이것들을 자식컴포넌트들에게 전달해 주는 흐름으로 만들어진다.) 
 * 1. MovieList: 1위부터 10위까지의 영화 목록을 보여줄 리스트
 * 2. MovieItem: MovieList에서 하나의 영화 목록을 나타내는 컴포넌트
 * 3. MovieView: MovieList에서 마우스를 올리면 보여지는 영화의 포스터와 정보를 나타내는 컴포넌트
 * 4. Modal: MovieView를 클릭했을 때 보여지는 모달창(자세한 정보보다는 모달창을 나타낼 수 있다. 를 표현하기 위한 컴포넌트)
 * 
 * 
 */


import React from "react";
import "./style.css";
import movie from "../assets/api/movie.json";
import { useState } from "react";
import MovieView from "./MovieView";
import MovieList from "./MovieList";
import Modal from "./Modal";

const Movies = () => {
  const [data, setData] = useState(movie);
  const [movieInfo, setMovieInfo] = useState(data[0]);
  const [isShow, setIsShow] = useState(false);


  const onOver = (id) => {
    const number = data.findIndex((item) => {
      return item.rank === id;
    });
    setMovieInfo(data[number]);
  };

  const onOpen = () => {
    console.log('adfafda');
    setIsShow(true);
  }
  
  const onClose = () => {
    setIsShow(false);  
  }



  return (
    <>
      <div className="gallery">
        <MovieView movieInfo={movieInfo} onOpen={onOpen} />
        <MovieList data={data} onOver={onOver} />
      </div>
      {
        isShow && <Modal onClose={onClose} movieInfo={movieInfo} />
      }
    </>
  );
};

export default Movies;
