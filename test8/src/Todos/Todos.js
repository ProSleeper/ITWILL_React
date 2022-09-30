/**
 * Todolist 프로그램
 * 
 * 
 *  - 컴포넌트 
 * 0. Todos: 최상위 부모(데이터와 함수등 필요한 모든 것을 가지고 있다.)
 * 1. TodoInput: 생성할 todolist를 입력받아서 추가
 * 2. TodoList: 생성된 todolist를 출력, 활성/비활성, 삭제
 * 3. TodoItem: TodoList에서 보여질 하나의 Todo를 나타내는 컴포넌트(활성/비활성화, 내용, 삭제버튼을 가지고 있다.)
 * 
 * 
 * - 설명
 * 1. 프로그램의 구조는 지금까지와 동일하다. 부모가 데이터 + 함수를 모두 가지고 있고 이것을 자식(컴포넌트)에게 주어서 조작이 가능하게 하는 방식
 * 2. 처음에는 이런 구조가 조금 복잡했는데 익숙해지니까 구조는 익숙해지고 있다. 다만 지금이야 depth가 작아서 이렇게 하는 게 이해되는데 나중에는 이런 방식으로만 개발하면 끝도 펼쳐지는 코딩애플에서 본 그 동영상처럼 트리구조가 될 것 같다.
 * 3. 얼른 redux를 배우고 싶다. 배우겠지??
 */



import React from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import "./Todos.css"
import { useState, useRef } from 'react';


const Todos = () => {

  const number = useRef(1);
  const [todos, setTodos] = useState([
    //{id:1, text:'점심먹기', done:false},
  ]);

  const onAdd = (text) => {
    setTodos([
      ...todos,
      {
        id: number.current++,
        text,
        done:false
      }
    ])
  }

  const onDelete = (id) => {
    setTodos(todos.filter((item) => {
      return item.id !== id
    }))
  }

  const onToggle = (id) => {
    setTodos(todos.map((item) =>(item.id === id) ? {...item, done:!item.done} : item))
  }

  return (
    <div className='Todos'>
      <h1>Todo List</h1>
      <TodoInput onAdd={onAdd } />
      <TodoList todos={todos} onDelete={onDelete} onToggle={onToggle} />
    </div>
  )
}

export default Todos