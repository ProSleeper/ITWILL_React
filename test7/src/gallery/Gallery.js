
/**
 * /**
 * 파일을 읽어와서 GalleryItem 컴포넌트와 GalleryView 컴포넌트를 만들고 
 * GalleryItem은 list로 만들어서 클릭하면 해당 item을 클릭하면 사진이 바뀌도록 만든 코드
 * 계속해서 말하지만 제일 중요한건 props! 데이터의 흐름이고 공유해야하거나 같이 사용해야하는 데이터는
 * 거의 보통 제일 상위의 부모 컴포넌트가 가지고 있고 그걸 자식에게 보내주어서 데이터를 변경 할 수 있게 해준다.
 * 
 */


import React from "react";
import "./style.css";
import "../assets/css/reset.css";
import GalleryView from "./GalleryView";
import GalleryList from "./GalleryList";
import data from "../assets/api/image";
import { useState } from "react";

const Gallery = () => {
  const [gallery, setGallery] = useState(data);
  const [image, setImage] = useState(gallery[0]);

  const onView = (id) => {
    setImage(gallery.find(item=>item.id === id))
  }

  return (
    <div className="con-box">
      <GalleryList gallery={gallery} img={image} onView={onView}></GalleryList>

      <GalleryView info={image} />
    </div>
  );
};

export default Gallery;
