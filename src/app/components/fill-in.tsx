'use client';

import { useEffect, useState, useRef, use } from "react";

export default function FillIn({file_path}: {file_path: string}) {

  // variables //
  const jsonQuestions: string[] = [];
  const jsonAnswers: string[] = [];
  //------------------------------------------------------------------
  const randomizedJsonQuestions: string[] = [];
  const randomizedJsonAnswers: string[] = [];
  //------------------------------------------------------------------
  const [questions, setQuestions] = useState([] as string[]);
  const [answers, setAnswers] = useState([] as string[]);
  //------------------------------------------------------------------
  const used_random_numbers: number[] = [];
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
    const res = await fetch(file_path);
    const resJSON = await res.json();
    
    for (let i in resJSON) {
      jsonQuestions.push(i);
      jsonAnswers.push(resJSON[i]);
    }

    //------------------------------------------------------------------
    let random_index;
    for (let x = 0; x < jsonQuestions.length; x++) {
      random_index = Math.floor(Math.random() * jsonQuestions.length);
      if (used_random_numbers.includes(random_index)) {
        while (true) {
          random_index = Math.floor(Math.random() * jsonQuestions.length);
          if (!(used_random_numbers.includes(random_index))) {
            used_random_numbers.push(random_index);
            break;
          }
        }
      }
      else {
        used_random_numbers.push(random_index);
      }
    }    

    //------------------------------------------------------------
    //debugging duplicates
    console.log(used_random_numbers);
    for (let i = 0; i < used_random_numbers.length; i++) {
      for (let y = 0; y < used_random_numbers.length; y++) {
        if ((y != i) && (used_random_numbers[y] == used_random_numbers[i])) {
          console.log('duplicate found: number #' + y + '. Indices #' + y + ' and #' + i);
        }
      }
    }
    //------------------------------------------------------------

    for (let x = 0; x < used_random_numbers.length; x++){
      randomizedJsonQuestions.push(jsonQuestions[used_random_numbers[x]]);
      randomizedJsonAnswers.push(jsonAnswers[used_random_numbers[x]]);
    }
    // console.log(used_random_numbers);
    //------------------------------------------------------------------
    
    // setQuestions(jsonQuestions);
    // setAnswers(jsonAnswers);
    setQuestions(randomizedJsonQuestions);
    setAnswers(randomizedJsonAnswers);
    setLength(jsonQuestions.length);
  }

  function startExam() { // double serves as the Next button
    if (examStarted) { // 'Next' button
      updateCounter(counter + 1);
      (document.getElementById("answer") as HTMLInputElement).value = ''; // clear the text input field when moving to the next question
      setNextButtonDisabled(true);
      (document.getElementById("answer") as HTMLInputElement).style.backgroundColor = 'transparent';
      setSubmitDisabled(false);
      (document.getElementById("answer") as HTMLInputElement).disabled = false;
    } else { // 'Start' Button
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
      setTimeout(() => alert("Not quite, the correct answer is \"" + answers[counter] + "\"\nYou entered \"" + answer + "\"."), 10);
      console.log('correct answer: ' + answers[counter]);
    }

    (document.getElementById("answer") as HTMLInputElement).disabled = true;
    
    setSubmitDisabled(true); // once an answer has been submitted, can't resubmit for the same question
    setNextButtonDisabled(false); // once the current answer has been answer, end user can move on to the next one

    if ((counter + 1) == listLength) {
      setNextButtonDisabled(true);
    }
  }

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center backdrop-blur-md border shadow-lg rounded-3xl ml-20 mr-20 mt-10 p-10 fill-in" style={{flex: 1, maxWidth: '768px'}}>
        <h1 style={{paddingLeft: '71px', paddingRight: '71px', color: "grey"}}  className="text-3xl mb-5">Fill-in</h1>
        <button className="border rounded-2xl p-2.5 hover:shadow-lg" style={{borderColor: 'grey'}} onClick={startExam} disabled={nextButtonDisabled}>{buttonText}</button>
        {beginTruthy ? (
          <div className="flex flex-col items-center justify-center">
            <p className="mt-5 mb-5">{`(${counter + 1} of ${listLength})`}</p>
            <p>{questions[counter]}</p>
            <form>
              <input className="border rounded mr-1.5 mt-5 mb-5" type="text" name="answer" id="answer" style={{borderColor: 'grey'}}></input>
              <button className="border rounded pl-2 pr-2" onClick={checkAnswer} disabled={submitButtonDisabled} style={{borderColor: 'grey'}}>Submit</button>
            </form>
        </div>
        ) : null}
      </div>
    </div>
  );
}