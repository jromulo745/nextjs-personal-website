'use client';

import { useEffect, useState, useRef, use } from "react";

export default function ExamAlerts({file_path}: {file_path: string}) {

  // variables //
  const jsonQuestions: string[] = [];
  const jsonAlerts: string[] = [];
  const [questions, setQuestions] = useState([] as string[]);
  const [answers, setAnswers] = useState([] as string[]);
  //------------------------------------------------------------------
  const [listLength, setLength] = useState(0);
  //------------------------------------------------------------------
  const [nextButtonDisabled, setNextButtonDisabled] = useState(false);
  const [submitButtonDisabled, setSubmitDisabled] = useState(false);
  //------------------------------------------------------------------
  const [buttonText, setButtonText] = useState('Start');
  const [beginTruthy, setBeginTruthy] = useState(false);
  const [examStarted, setExamStarted] = useState(false);
  //------------------------------------------------------------------
  const [counter, updateCounter] = useState(0);
  //------------------------------------------------------------------

  async function fetchAlerts() { 
    // fetch questions
    const res = await fetch(file_path);
    const resJSON = await res.json();
    
    for (let i in resJSON) {
      jsonAlerts.push(resJSON[i]);
    }
    
    setAnswers(jsonAlerts);
    setLength(jsonAlerts.length);
  }

  function startExam() { // double serves as the Next button
    if (examStarted) { // 'Next' button
      updateCounter(counter + 1);
    } else { // 'Start' Button
      setBeginTruthy(true);
      setButtonText('Next');
      setExamStarted(true);
    }
  }

  useEffect(() => {
    fetchAlerts();
  }, []);

  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center backdrop-blur-md border shadow-lg rounded-3xl ml-20 mr-20 mt-10 p-10 fill-in" style={{flex: 1, maxWidth: '768px'}}>
        <h1 style={{paddingLeft: '71px', paddingRight: '71px', color: "grey"}}  className="text-3xl mb-5">Exam Alerts</h1>
        <button className="border rounded-2xl p-2.5 hover:shadow-lg" style={{borderColor: 'grey'}} onClick={startExam} disabled={nextButtonDisabled}>{buttonText}</button>
        {beginTruthy ? (
          <div className="flex flex-col items-center justify-center">
            <p className="mt-5 mb-5">{`(${counter + 1} of ${listLength})`}</p>
            <p>{answers[counter]}</p>
        </div>
        ) : null}
      </div>
    </div>
  );
}