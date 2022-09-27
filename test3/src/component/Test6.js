import React, { useState } from "react";
import "./Test6.css";

const Test6 = () => {
  const [data, setData] = useState([
    { id: 1, name: "배수지", age: 27, addr: "서울", done: true },
    { id: 2, name: "유인나", age: 27, addr: "경기", done: true },
    { id: 3, name: "정인선", age: 27, addr: "강원", done: true },
    { id: 4, name: "박신혜", age: 27, addr: "제주", done: true },
    { id: 5, name: "손예진", age: 27, addr: "울산", done: true },
    { id: 6, name: "한예슬", age: 27, addr: "광주", done: true },
  ]);

  return (
    <div className="wrap">
      <h2>내맘대로 뽑은 연예인들</h2>
      <table>
        <colgroup>
          <col className="w1" />
          <col className="w2" />
          <col className="w3" />
          <col className="w4" />
          <col className="w5" />
        </colgroup>
        <thead>
          <tr>
            <th>번호</th>
            <th>이름</th>
            <th>나이</th>
            <th>주소</th>
            <th>참여여부</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item, index) => 
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.addr}</td>
              <td>{item.done ? "참여" : "미참여"}</td>
            </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
};

export default Test6;
