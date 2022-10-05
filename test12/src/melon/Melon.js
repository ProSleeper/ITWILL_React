
/**
 * 멜론 차트 ui만들기
 * 
 * - 컴포넌트
 * 0. Melon: 최상위 부모 컴포넌트(데이터와 함수를 모두 가지고 있으며, 이것들을 자식컴포넌트들에게 전달해 주는 흐름으로 만들어진다.) 
 * 1. MelonList: 데이터의 갯수만큼 보여줄 리스트
 * 2. MelonItem: MelonList에서 한줄로 보여지는 데이터를 표현하기 위한 컴포넌트
 * 3. MelonForm: 화면 상단 검색창. useEffect를 이용해서 키보드나 글자를 작성할때마다 실시간으로 검색되게 구현
 * 4. MelonModal: MovieView를 클릭했을 때 보여지는 모달창(자세한 정보보다는 모달창을 나타낼 수 있다. 를 표현하기 위한 컴포넌트)
 * 5. 
 */





import React, { useEffect, useState } from 'react';
import "./Melon.css";
import MelonForm from './MelonForm';
import MelonList from './MelonList';
import music from "../assets/api/music";
import MelonModal from './MelonModal';




const Melon = () => {

  const [musics, setMusics] = useState(music);
  const [isShow, setIsShow] = useState(false);
  const [musicNum, setMusicNum] = useState({});

  const getDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const date = now.getDate();
    const msg = `${year}. ${month}. ${date}`;

    return msg; 
  }


  const onLike = (id) => {
    setMusics(musics.map((music) => {
      return music.id === id ?
        {
          ...music,
          done: !music.done,
          like: !music.done ? music.like + 1 : music.like - 1
        }
        : music;
    }))
  }

  const onSearch = (text) => {
    // setMusics(music.filter((music) => {
    //   return music.title.toLocaleLowerCase().indexOf(text.toLocaleLowerCase()) !== -1
    // }))

    setMusics(music.filter((item) => {
      const result = new RegExp(text, 'ig');
      return item.title.match(result);
    }))
  }
  
  const onOpen = (id) => {
    setIsShow(true)
    setMusicNum(musics.find((music) => {
      return music.id === id
    }))
  }

  const onClose = () => {
    setIsShow(false)
  }

  return (
    <div className='Melon'>
      <h2>メロン　ランキング&nbsp;&nbsp; {getDate()}&nbsp;&nbsp;人気チャート</h2>
      <MelonForm onSearch={onSearch} />
      <MelonList musics={musics} onLike={onLike} onOpen={onOpen} />
      {
        isShow && <MelonModal musicNum={musicNum} onClose={onClose} />
      }
    </div>
  )
}

export default Melon