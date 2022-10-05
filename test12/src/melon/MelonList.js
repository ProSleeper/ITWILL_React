import React from 'react'
import MelonItem from './MelonItem';
import "./MelonList.css";


const MelonList = ({musics, onLike, onOpen}) => {
  return (
    <div className='MelonList'>
      <table>
        <colgroup>
          <col className='w1'/>
          <col className='w2'/>
          <col className='w3'/>
          <col className='w4'/>
          <col className='w5'/>
          <col className='w6'/>
        </colgroup>
        <thead>
          <tr>
            <td>ランキング</td>
            <td>曲(歌手)</td>
            <td>アルバム</td>
            <td>ライク</td>
            <td>動画</td>
            <td>上・下</td>
          </tr>
        </thead>
        <tbody>
          {
            musics.map((music) => {
              return <MelonItem key={music.id} music={music} onLike={onLike} onOpen={onOpen} />
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default MelonList