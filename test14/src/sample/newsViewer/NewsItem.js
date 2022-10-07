import React from 'react'
import { NewsItemBlock } from "../styled/newscss";



const NewsItem = ({item:{title, description, url, urlToImage}}) => {


  return (
    <NewsItemBlock>
      {
        urlToImage && (
          <div className='thumbnail'>
            <a href={url}>
              <img src={urlToImage} alt="thumbnail" />
            </a>
          </div>
        )
      }
      <div className='contents'>
        <h2>
          <a href={url}>
            {title}
          </a>
        </h2>
        <p>{description}</p>
      </div>
    </NewsItemBlock>
  )
}

export default NewsItem