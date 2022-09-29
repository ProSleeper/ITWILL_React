import React from "react";

const MoviesItem = ({ item: { no, poster, actor, director, date, title},onDelete }) => {
  return (
    <article>
      <div className="left">
        <img src={poster} alt="title" />
      </div>
      <div className="right">
        <h3>{title}</h3>
        <ul>
          <li>
            <strong>출연진: {actor}</strong>:{" "}
          </li>
          <li>감독: {director}</li>
          <li>개봉일: {date}</li>
        </ul>
        <button onClick={()=>onDelete(no)}>삭제</button>
      </div>
    </article>
  );
};

export default MoviesItem;
