import React from 'react'
import { CategoryBlock, CategoryLink, categories } from '../styled/newscss'



const NewsCategory = ({category, selectText}) => {
  return (
    <CategoryBlock>
      {
        categories.map((item) => {
          <CategoryLink key={item.name} active={category === item.name} onClick={()=>selectText(item.name)}> {item.text}</CategoryLink>
        })
      }
    </CategoryBlock>
  )
}

export default NewsCategory