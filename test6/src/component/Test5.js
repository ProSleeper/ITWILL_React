
/**
 * 사진 파일을 읽어오는 기본적인 방법
 * 1. import를 이용하는 방법
 * 2. path를 이용하는 방법(public폴더에 있는 것)
 * 
 */

import React from 'react';
import img0 from '../s_images/cat0.jpg'
import img1 from '../s_images/cat1.jpg'



const Test5 = () => {
  return (
    <div>
      {/* src를 이용해서 경로 정해준 그림 */}
      <img src={img0} alt="" />
      <img src={img1} alt="" />
      <hr />
      {/* public 폴더 경로 그림 */}
      <img src="./P_images/cat3.jpg" alt="" />

    </div>
  )
}

export default Test5