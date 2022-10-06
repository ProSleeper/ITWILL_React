import React, { useState } from 'react'
import styled from 'styled-components';
import { ImageForm } from './../styled/pixabaycss';


const GallerySearch = ({searchText}) => {

  const [text, setText] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    searchText(text);
  }

  return (
    <ImageForm onSubmit={onSubmit}>
      <input type="text" placeholder='검색어를 입력하세요.' onChange={event=>setText(event.target.value)} value={text} />
      <button type="submit">검색</button>
    </ImageForm>
  )
}

export default GallerySearch