import { useRef, useState } from "react";

/**
 * 2022-09-29
 * 구현사항
 * 1. **완료** 단어, 입력창, 입력버튼 보이기
 * 2. **완료** 입력버튼 누르면 끝말잇기 판정
 * 3. **완료** 판정된 결과를 입력창 아래에 메세지로 출력
 * 4. **완료** 정답이면 정답메세지 출력과 단어 교체
 * 5. **완료** 오답이면 오답메세지 출력과 입력창 초기화
 *
 */

const WordRelay = () => {
  const [prevWord, setPrevWord] = useState("크런키");
  const [inputBox, setInputBox] = useState("");
  const [message, setMessage] = useState("");
  const focus = useRef();

  const output = (event) => {
    event.preventDefault();
    const last = prevWord.slice(-1);
    const first = inputBox.slice(0, 1);

    setPrevWord(last === first ? inputBox : prevWord);
    setMessage(last === first ? "정답!!" : "오답ㅠㅜ");
    setInputBox("");
    focus.current.focus();
  };

  return (
    <>
      <p>{prevWord}</p>
      <form onSubmit={output}>
        <input type="text" onChange={(event) => setInputBox(event.target.value)} value={inputBox} ref={focus} />
        <button>입력</button>
      </form>
      <p>{message}</p>
    </>
  );
};

export default WordRelay;
