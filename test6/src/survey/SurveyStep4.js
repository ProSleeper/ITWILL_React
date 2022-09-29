import React from "react";

const SurveyStep4 = ({name, onReset }) => {
  return (
    <div>
      <h2>{name}님 설문조사 감사합니다.</h2>
      <p>
        <button onClick={onReset}>홈화면</button>
      </p>
    </div>
  );
};

export default SurveyStep4;