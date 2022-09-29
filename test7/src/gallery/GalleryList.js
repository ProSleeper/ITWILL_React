import React from 'react'
import GalleryItem from './GalleryItem';


const GalleryList = ({gallery, img, onView}) => {

  const { image } = img;

  return (
    <article>
    <img src={image} alt="" />
      <ul>
        {
          gallery.map((item) => {
            return <GalleryItem key={item.id} item={item} onView={onView} />
          })

        }
    </ul>
  </article>
  )
}

export default GalleryList