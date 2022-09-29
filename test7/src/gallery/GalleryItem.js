import React from "react";

const GalleryItem = ({item:{id, image, title}, onView}) => {
  return (
    <>
      <li onClick={()=>onView(id)} >
        <img src={image} alt={title} />
      </li>
    </>
  );
};

export default GalleryItem;
