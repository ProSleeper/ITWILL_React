
/**
 * 회원가입 약관동의 ui만들기
 * 
 * - 전체 선택을 하면 3개의 약관이 모두 클릭이 되게 하고, 개별적으로 클릭해서 3개가 모두 클릭 됐을 때 전체선택도 체크가 되도록 구현
 * 
 * 
 * 
 */




import React, { useState, useEffect } from "react";


const dataList = [
  {
    id: 1,
    name: "chk1",
    text: "이용약관(필수)",
    isChecked:false
  },
  {
    id: 2,
    name: "chk2",
    text: "개인정보보호 동의(필수)",
    isChecked:false
  },
  {
    id: 3,
    name: "chk3",
    text: "쿠폰, 이벤트, 프로모션 수신동의(선택)",
    isChecked:false
  },
];


const Test1 = () => {
  
  // const [data, setData] = useState(dataList)
  const [data, setData] = useState([])

  
  useEffect(() => {
    setData(dataList);
  }, [dataList])
  
  const changeCheck = (event) => {
    const {name, checked} = event.target;
    if (name === 'all') {
      const tempChk = data.map((item) => {
        return {
          ...item,
          isChecked: checked
        };
      });
      setData(tempChk);
    }
    else {
      const tempChk = data.map((item) => {
        return (item.name === name ? {
          ...item, isChecked: checked
        } : item)
    })
      setData(tempChk)
          
    }
  }

  return <div style={{margin:30}}>
    <h2>동의 설정</h2>
    {/* {
      data.filter((item) => {
        return item.isChecked !== true
      }).length
    } */}
    <p>
      <input type="checkbox" name='all' onChange={changeCheck}
        checked={data.filter((item) => {
          return item.isChecked !== true;
        }).length < 1}/>
      전체동의
    </p>
    <hr />
    {
      data.map((item) => {
        return <p key={item.id}><input type="checkbox" checked={item.isChecked} name={item.name} onChange={changeCheck} />{item.text}</p>
      })
    }
  </div>;
};

export default Test1;
