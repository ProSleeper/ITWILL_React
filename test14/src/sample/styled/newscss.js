import styled from 'styled-components';


export const NewsListBox = styled.div`
  box-sizing: border-box;
  padding-bottom: 30px;
  width: 768px;
  margin: 0 auto;
  margin-top: 30px;
  @media screen and (max-width:768px){
    width: 100%;
    padding-left: 5px;
    padding-right: 5px;
  }
  
`;


export const NewsItemBlock = styled.div`

  display: flex;

  .thumbnail {
    margin-right: 20px;
    img {
      display: block;
      width: 160px;
      height: 100px;
      object-fit: cover;
    }
  }
  .contents {
    h2 {
      margin: 0;
      a {
        color: black;
      }
    }
    p {
      margin: 0%;
      line-height: 1.5;
      margin-top: 5px;
      white-space: normal;

    }

    & + & {
      margin-top: 30px;
    }
  }

`;