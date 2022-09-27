import React from "react";

const Test8 = () => {
  const title = "연예인";
  const arr = ["배수지", "유인나", "정인선", "김태희", "이영애"];
  const data = [
    {
      id: 1,
      name: "홍길동",
      age: 21,
    },
    {
      id: 2,
      name: "고길동",
      age: 33,
    },
    {
      id: 3,
      name: "이사조",
      age: 11,
    },
    {
      id: 4,
      name: "손흥민",
      age: 46,
    },
    {
      id: 5,
      name: "류현진",
      age: 67,
    },
  ];

  return (
    <div>
      <h2>{title}</h2>
      <p>{arr[0]}</p>
      <p>{arr[1]}</p>
      <hr />
      {arr.map((item, index) => {
        return (
          <p key={index}>
            {index}/{item}
          </p>
        );
      })}
      <hr />
      {arr.map((item, index) => (
        <p key={index}>
          {index}/{item}
        </p>
      ))}
      <hr />
      {
        data.map((item, index) => {
          return (<p key={index}>{item.id}/{item.name}/{item.age}</p>)
        })
      }
      <hr />
      {
        data.map((item, index) => 
          <p key={index}>{item.id}/{item.name}/{item.age}</p>
        )
      }
    </div>
  );
};

export default Test8;
