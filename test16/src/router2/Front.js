import React from "react";
import { useParams } from "react-router-dom";

const Front = ({ data }) => {
  const { name } = useParams();


  return (
    <div>
      <h1>Front Page 입니다.</h1>
      {data
        .filter((item) => item.title === name)
        .map((item, index) => {
          return (
            <div key={index}>
              <h2>{item.title}</h2>
              <h2>{item.info}</h2>
            </div>
          );
        })}
    </div>
  );
};

export default Front;
