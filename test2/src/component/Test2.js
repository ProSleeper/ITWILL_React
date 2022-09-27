import React from 'react'

const Test2 = () => {

  const done1 = true;
  const done2 = false;
  const done3 = undefined;





  return (
    <div>
      {/* 삼항연산자 */}
      <p>
      {
        done1 === true?<button>로그인</button>:<button>로그아웃</button>
      }
      </p>
      <p>
      {
        done1 && <button>done1은 true</button>
      }
      </p>
      <p>
        {
          done2 === false && <button>done2는 false</button>
        }
      </p>
      <p>
        {
          done2 || <button>거짓결과1</button>
        }
      </p>
      <p>
        {
          done3 || <button>거짓결과2</button>
        }
      </p>
    </div>
  )
}

export default Test2