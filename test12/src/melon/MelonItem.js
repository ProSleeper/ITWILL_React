import React from "react";
import { FcLikePlaceholder, FcVideoCall, FcLike } from "react-icons/fc";
import { AiOutlineArrowDown, AiOutlineArrowUp, AiOutlineEllipsis } from "react-icons/ai";
import Numeral from "numeral";


const MelonItem = ({ music: { id, rank, title, singer, poster, like, done, state, album }, onLike, onOpen}) => {
  return (
    <tr>
      <td>{rank}</td>
      <td className="img">
        <img src={poster} width="60" alt="" />
        <p>
          <span>{title}</span>
          {singer}
        </p>
      </td>
      <td>{album}</td>
      <td className="like">
        <i onClick={() => onLike(id)}>
          {
            done ? <FcLike/> : <FcLikePlaceholder />
          }
          </i>
        {Numeral(like).format(0,0)}
      </td>
      <td>
        <i onClick={() => {onOpen(id)}}>
          <FcVideoCall />
        </i>
      </td>
      <td>
        {
          state==='상승' && <i><AiOutlineArrowUp color="red"/></i>
        }
        {
          state==='하강' && <i><AiOutlineArrowDown color="blue"/></i>
        }
        {
          state==='유지' && <i><AiOutlineEllipsis color="red"/></i>
        }
        <span style={{ marginLeft: 10 }}>{state}</span>
      </td>
    </tr>
  );
};

export default MelonItem;
