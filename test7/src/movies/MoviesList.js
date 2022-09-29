import React from "react";
import MoviesItem from './MoviesItem';

const MoviesList = ({data, onDelete}) => {
  return (
    <div className="movie">
      {
        data.map((item) => {
          return <MoviesItem key={item.no} item={item} onDelete={onDelete} />
        })
      }
      
    </div>
  );
};

export default MoviesList;
