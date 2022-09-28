
/**
 * Test3과 동일한 코드를 파일로 분리해서 구현한 코드
 * 동일하게 리액트에서 데이터는 아래로 흐른다! 이 개념이 제일 중요하다.
 * 
 * 리액트는 트리구조라고 보면 되고, "데이터는 기본적으로 위에서 아래로 흐른다!"
 * 하위(자식) 컴포넌트에서 데이터을 바꾸고 다른 컴포넌트에게 전달하고 싶다면
 * 해당 데이터는 상위로 끌어 올리거나, 상위(부모)에서 가진 데이터를 변경해서 다른 컴포넌트로 전달해줘야한다.
 * 
 */


import React from 'react';
import Test4Animal from './Test4Animal';
import Test4Display from './Test4Display';
import Test4Name from './Test4Name';
import { useState } from 'react';

const Test4 = () => {

  const [name, setName] = useState();
  const [animal, setAnimal] = useState();

  const onName = (event) => {
    const { value } = event.target;
    setName(value);
  }

  const onAnimal = (event) => {
    const { value } = event.target;
    setAnimal(value);
  }

  return (
    <div>
      <Test4Name name={name} onName={onName} />
      <hr />
      <Test4Animal animal={animal} onAnimal={onAnimal} />
      <hr />
      <Test4Display name={name} animal={animal} />
      
    </div>
  )
}

export default Test4;
