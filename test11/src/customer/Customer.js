/**
 * 모범택시 고객 리스트 ui만들기
 * 
 * - 컴포넌트
 * 0. Customer: 최상위 부모 컴포넌트(데이터와 함수를 모두 가지고 있으며, 이것들을 자식컴포넌트들에게 전달해 주는 흐름으로 만들어진다.) 
 * 1. AddUser: 모범택시 고객 추가 ui 컴포넌트
 * 2. EditUser: 
 * 3. ItemUser: MovieList에서 마우스를 올리면 보여지는 영화의 포스터와 정보를 나타내는 컴포넌트
 * 4. ListUser: MovieView를 클릭했을 때 보여지는 모달창(자세한 정보보다는 모달창을 나타낼 수 있다. 를 표현하기 위한 컴포넌트)
 * 5. Message: 추가, 삭제, 수정 등 어떤 이벤트가 발생했을 때 그것을 상단에서 보여주는 역할
 */


import React, { useState, useRef } from "react";
import "./style.css";
import AddUser from "./AddUser";
import ListUser from "./ListUser";
import EditUser from "./EditUser";
import Message from './Message';

const Customer = () => {

  const number = useRef(5);

  //수정 데이터를 input으로 보내기 전에 담고 있을 임시 저장 공간
  const [current, setCurrent] = useState({});

  //수정버튼 클릭 시 추가/수정 버튼 교체용
  const [isEdit, setIsEdit] = useState(false);
  const [msg, setMsg] = useState();
  const [isShow, setIsShow] = useState(false);


  const userData = [
    {
      id: 1,
      name: "유인나",
      job: "연예인",
    },
    {
      id: 2,
      name: "정인선",
      job: "자영업",
    },
    {
      id: 3,
      name: "김진원",
      job: "축구선수",
    },
    {
      id: 4,
      name: "배수지",
      job: "회사원",
    },
  ];

  const [users, setUsers] = useState(userData)
  const onAdd = (user) => {
    user.id = number.current++;
    setUsers([
      ...users,
      user
    ])
    onShow('명단을 추가합니다.');
  }

  const onDelete = (id) => {
    setUsers(
      users.filter((item) => {
        return item.id !== id
      })
    )
    onShow('명단을 삭제합니다.')
  }

  const onEdit = (user) => {
    setCurrent(user);
    setIsEdit(true);
    onShow('명단을 수정합니다.')
  }

  const onUpdate = (data) => {
    setUsers(
      users.map((user) => {
        return user.id === data.id ? data : user;
      })
    )
    setIsEdit(false);
    onShow('명단을 수정 완료했습니다.')
  }

  const onShow = (text) => {
    setMsg(text);
    setIsShow(true);
  }

  return (
    <div className="Customer">
      {
        isEdit ? <EditUser setIsEdit={setIsEdit } current={current} onUpdate={onUpdate} /> : <AddUser onAdd={onAdd} />
      }

      <ListUser users={users} onDelete={onDelete} onEdit={onEdit} />
      {/* <Message msg={msg} isShow={isShow} /> */}
      {
        isShow && <Message msg={msg} isShow={isShow} setIsShow={setIsShow} /> 
      }
    </div>
  );
};

export default Customer;
