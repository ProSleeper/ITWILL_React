import React from "react";
import "./TodoInput.css";
import { MdAddCircle } from "react-icons/md";
import { useRef } from "react";
import { useState } from "react";

const TodoInput = ({ onAdd }) => {
  const textRef = useRef();
  const [text, setText] = useState('');

  const changeInput = (event) => {
    const { value } = event.target;
    setText(value || '');
  };

  const onSubmit = (event) => {
    console.log('실행?');
    event.preventDefault();
    if (!text) return;
    onAdd(text || '');
    setText('');
    textRef.current.focus();
  }

  return (
    <form className="TodoInput" onSubmit={onSubmit}>
      <input type="text" onChange={changeInput} value={text} ref={textRef} />
      <button>
        <MdAddCircle className="icon" size="50" />
      </button>
    </form>
  );
};

export default TodoInput;
