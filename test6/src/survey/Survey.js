import React from "react";
import SurveyStep1 from "./SurveyStep1";
import "./style.css";
import SurveyStep2 from "./SurveyStep2";
import SurveyStep3 from "./SurveyStep3";
import SurveyStep4 from "./SurveyStep4";
import { useState } from "react";

const Survey = () => {
  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    name: "",
    age: "",
    addr: "",
    tel: "",
    job: "",
    email: "",
    gender: "",
    hobby: "",
  });

  const { name, age, addr, tel, job, email, gender, hobby } = form;

  const onText = (event) => {
    const { value, name } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const onNext = () => {
    setStep(step + 1);
  };

  const onPrev = () => {
    setStep(step - 1);
  };

  const onReset = () => {
    setStep(1);
  }

  return (
    <div className="wrap">
      {step === 1 && <SurveyStep1 form={form} onText={onText} onNext={onNext} />}
      {step === 2 && <SurveyStep2 form={form} onText={onText} onNext={onNext} onPrev={onPrev} />}
      {step === 3 && <SurveyStep3 form={form} onNext={onNext} onPrev={onPrev} />}
      {step === 4 && <SurveyStep4 name={name} onReset={onReset} />}
    </div>
  );
};

export default Survey;
