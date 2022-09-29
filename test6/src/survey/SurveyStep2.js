import React from "react";

const SurveyStep2 = ({ form: { job, email, gender, hobby }, onText, onNext, onPrev }) => {
  return (
    <div>
      <p>
        <label htmlFor="">직업</label>
        <input type="text" value={job} name = 'job' onChange={onText} />
      </p>
      <p>
        <label htmlFor="">이메일</label>
        <input type="text" value={email} name = 'email' onChange={onText} />
      </p>
      <p>
        <label htmlFor="">성별</label>
        <input type="text" value={gender} name = 'gender' onChange={onText} />
      </p>
      <p>
        <label htmlFor="">취미</label>
        <input type="text" value={hobby} name = 'hobby' onChange={onText} />
      </p>
      <p>
        <button onClick={onPrev}>이전</button>
        <button onClick={onNext}>다음</button>
      </p>
    </div>
  );
};

export default SurveyStep2;
