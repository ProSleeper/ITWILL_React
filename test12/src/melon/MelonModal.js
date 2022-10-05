import React from 'react'
import "./MelonModal.css";
import { AiOutlineClose } from 'react-icons/ai';


const MelonModal = ({ musicNum: { title, singer, key }, onClose }) => {
  return (
    <div className='Modal'>
      <div className='bg'></div>
      <div className='popup'>
        <h2>제목: xxx</h2>
        <div>
          <iframe src={`https://www.youtube.com/embed/${key}`} frameBorder="0"></iframe>
        </div>
        <p>가수:{singer}</p>
        <span onClick={onClose}>
          <i><AiOutlineClose/></i>
        </span>
      </div>

    </div>
  )
}

export default MelonModal