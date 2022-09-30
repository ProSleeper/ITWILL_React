
/**
 * 간단한 Todolist 프로그램
 * 
 * 
 *  - 컴포넌트(함수)
 * 0. Test1: 최상위 부모(데이터와 함수등 필요한 모든 것을 가지고 있다.)
 * 1. Form: 생성할 todolist를 입력받아서 추가
 * 2. List: 생성된 todolist를 출력, 삭제 (일렬번호가 존재한다. 1,2,3이 존재할때 1번을 삭제하더라도 번호가 다시 당겨지는 일 없이 4,5,6 처럼 계속 증가만 한다.)
 * 3. Item: List에서 보여질 하나의 todo이다. 번호(id), 내용, 삭제버튼을 가지고 있다.
 * 
 * - 설명
 * - 원래라면 컴포넌트(모듈)로 분리해야하는 부분들을 그냥 함수로 분리해서 만든 프로그램
 * - 이 다음에 만든 Todos의 마이너버전이다.
 */




import React from "react";
import { useState, useRef } from "react";

const Form = ({ onAdd }) => {
  const textRef = useRef();
  const [text, setText] = useState('');

  const changeInput = (event) => {
    const { value } = event.target;
    setText(value || '');
  };

  //추가외에 다른일
  const onAnother = (text) => {
    onAdd(text);
    setText("");
    textRef.current.focus();
  };

  return (
    <div>
      <input type="text" onChange={changeInput} value={text} ref={textRef} />
      <button onClick={()=>onAnother(text)}>추가</button>
    </div>
  );
};

const List = ({ data, onDelete }) => {
  return (
    <div>
      {data.map((item) => {
        return <Item key={item.id} item={item} onDelete={onDelete} />;
      })}
    </div>
  );
};

const Item = ({ item: { id, text }, onDelete }) => {
  return (
    <div>
      {id}. {text}
      <button onClick={() => onDelete(id)}>삭제</button>
    </div>
  );
};

const Test1 = () => {
  const number = useRef(4);

  const [data, setData] = useState([
    { id: 1, text: "저녁먹기" },
    { id: 2, text: "친구만나기" },
    { id: 3, text: "회사미팅" },
  ]);

  const onAdd = (text) => {
    setData([
      ...data,
      {
        id: number.current++,
        text,
      },
    ]);
  };

  const onDelete = (id) => {
    return (
      <div>
        {
          setData(data.filter((item) => item.id !== id))
        }
      </div>
    );
  };

  return (
    <div>
      <h1>할일 만들기</h1>
      <Form onAdd={onAdd} />
      <List data={data} onDelete={onDelete} />
    </div>
  );
};

export default Test1;