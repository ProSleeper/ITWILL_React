import React from 'react'

const GalleryView = ({ info:{id, image, title, desc } }) => {

  return (
    <article>
        <h3>{title}</h3>
        <p>{desc}</p>
      </article>
  )
}

export default GalleryView