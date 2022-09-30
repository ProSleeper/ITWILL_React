/**
 * https://kobis.or.kr/kobis/business/main/main.do#none 영화관 입장권 통합 전산망 스타일의 ui만들기
 *
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
