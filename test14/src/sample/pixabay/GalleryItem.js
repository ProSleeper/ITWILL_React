import React from "react";
import styled from "styled-components";
import { ImageItem } from './../styled/pixabaycss';


const GalleryItem = ({ item: { views, downloads, likes, user, webformatURL, tags } }) => {
  const tagList = tags.split(",");

  return (
    <ImageItem>
      <img src={webformatURL} alt={user} />
      <h3>{user}</h3>
      <ul>
        <li>
          <em>조회수: {views}</em>
        </li>
        <li>
          <em>다운로드: {downloads}</em>
        </li>
        <li>
          <em>좋아요: {likes}</em>
        </li>
      </ul>
      <p>
        태그:
        {tagList.map((tag, index) => {
          return <span key={index}>#{tag}</span>;
        })}
      </p>
    </ImageItem>
  );
};

export default GalleryItem;
