

/**
 * 각각의 속성의 기본값이 존재하면 기본값을 사용하고 없으면 styled의 값을 사용한다.
 */


import React from 'react';
import styled, { css } from "styled-components";

const Container = styled.div`
  border: 1px solid #000;
  padding: 20px;
  margin: 20px;
  background: ${props => props.bg ? props.bg : 'yellow'}; //속성 적용
  width: ${props => props.w ? props.w : '100px'};
`;
const Box = styled.button`
  width: ${props => props.width ? props.width : '100px'};
  background: ${props => props.bg ? props.bg : 'skyblue'};

  //내부에서 이렇게 하면 따로 안만들어도 css가 적용이 된다.
  ${props => props.good && css`
    background: 'green';
    width: 300px;
    color: #fff;
    height: 50px;
    border: none;
    transition: 1s;
    &:hover {
      background: hotpink;
      color:#000;
    }
  `}
`;

const Test7 = () => {
  return (
    <div>
      <Container w='500px'>
        <Box width='200px' bg='green'>Test</Box>
        <Box width='100px' bg='yellow'>Test</Box>
        <Box width='500px'>Test</Box>
        <Box width='300px' bg='tomato'>Test</Box>
        <Box width='400px'>Test</Box>
        <Box good>Test</Box>
        <Box>Test</Box>
      </Container>

    </div>
  )
}

export default Test7