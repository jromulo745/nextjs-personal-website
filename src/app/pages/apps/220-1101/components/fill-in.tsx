'use client';

import { useEffect, useState, useRef, use } from "react";

export default function FillIn() {

  // variables //
  const jsonQuestions: string[] = [];
  const jsonAnswers: string[] = [];
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

  async function fetchQuestions() { 
    // fetch questions
    const res = await fetch('../../fill-in.json');
    const resJSON = await res.json();
    
    for (let i in resJSON) {
      jsonQuestions.push(i);
      jsonAnswers.push(resJSON[i]);
    }
    
    setQuestions(jsonQuestions);
    setAnswers(jsonAnswers);
    setLength(jsonQuestions.length);
  }

  function startExam() { // double serves as the Next button
    if (examStarted) {
      updateCounter(counter + 1);
      (document.getElementById("answer") as HTMLInputElement).value = ''; // clear the text input field when moving to the next question
      setNextButtonDisabled(true);
      (document.getElementById("answer") as HTMLInputElement).style.backgroundColor = 'transparent';
      setSubmitDisabled(false);
    } else {
      setBeginTruthy(true);
      setButtonText('Next');
      setExamStarted(true);
      setNextButtonDisabled(true);
    }
  }

  function checkAnswer(e: any) {
    
    e.preventDefault(); // prevent the form from leaving after hitting 'submit'

    const answer = (document.getElementById("answer") as HTMLInputElement).value;
    
    if (answer.toLowerCase() === answers[counter].toLowerCase()) {
      (document.getElementById("answer") as HTMLInputElement).style.backgroundColor = 'green';
      setTimeout(() => alert("Correct"), 10);
    } else {
      (document.getElementById("answer") as HTMLInputElement).style.backgroundColor = 'red';
      setTimeout(() => alert("Not quite, the correct answer is \"" + answers[counter] + "\""), 10);
    }
    
    setSubmitDisabled(true); // once an answer has been submitted, can't resubmit for the same question
    setNextButtonDisabled(false); // once the current answer has been answer, end user can move on to the next one
  }

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center backdrop-blur-md border shadow-lg rounded-3xl p-10" style={{minWidth: '768px', maxWidth: '768px', marginTop: '80px', marginBottom: '80px'}}>
        <h1 style={{paddingLeft: '71px', paddingRight: '71px'}}  className="text-3xl mb-5">Fill-in</h1>
        <button className="border rounded-2xl p-2.5" onClick={startExam} disabled={nextButtonDisabled}>{buttonText}</button>
        {beginTruthy ? (
          <div className="flex flex-col items-center justify-center">
            <p className="mt-5 mb-5">{`(${counter + 1} of ${listLength})`}</p>
            <p>{questions[counter]}</p>
            <form>
              <input className="border rounded mr-1.5 mt-5 mb-5" type="text" name="answer" id="answer"></input>
              <button className="border rounded pl-2 pr-2" onClick={checkAnswer} disabled={submitButtonDisabled}>Submit</button>
            </form>
        </div>
        ) : null}
      </div>
    </div>
  );
}