/**
 * api 요청으로 다른 사이트들의 사진과 정보를 json 형식으로 받아서 카드보드 형태로 출력해주는 코드
 * 
 * - 컴포넌트
 * Gallery: 최상위 부모 컴포넌트 axios 요청으로 데이터를 가져온다.
 * GalleryItem: GalleryList에서 사용할 하나의 컴포넌트
 * GalleryList: 검색시 보여줄 리스트
 * GallerySearch: 상단에 검색 입력창과 버튼 컴포넌트
 * Global: 폰트 정보를 저장하고 있다.
 * pixabaycss: pixabay의 디자인을 표현하기 위한 css
 * 
 * 
 * 
 */


import React, { useEffect, useState } from "react";
import styled from "styled-components";
import GlobalStyle from "../styled/Global";
import axios from "axios";
import GallerySearch from "./GallerySearch";
import GalleryList from "./GalleryList";
import { Container } from '../styled/pixabaycss'

const Gallery = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    const API_KEY = "30401016-c3a5a8b4430a7163831dd165f";
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${text}&image_type=photo`;

    console.log(url);

    axios
      .get(url)
      .then((response) => {
        setData(response.data.hits);
        setIsLoading(false);
        setError("");
      })
      .catch((error) => {
        setData([]);
        setIsLoading(true);
        setError("주소가 잘못 되었습니다.");
      });
  }, [text]);

  const searchText = (txt) => {
    console.log(txt);
    setText(txt)
  }

  return (
    <div>
      <GlobalStyle />
      <Container>
        <GallerySearch searchText={searchText} />
        {isLoading && data.length === 0 && <h1>No Image Found</h1>}
        {data && !isLoading && <GalleryList data={data} />}
        <p>{error ? error : null}</p>
      </Container>
    </div>
  );
};

export default Gallery;
