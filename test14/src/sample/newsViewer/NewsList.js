import React from 'react'
import { NewsItemBlock } from '../styled/newscss';
import NewsItem from './NewsItem';

const NewsList = ({ data }) => {
  

  return (
    <NewsItemBlock>
      {
        data.map((item) => {
          return <NewsItem key={item.url} item={item } />
        })
      }
    </NewsItemBlock>
  )
}

export default NewsList