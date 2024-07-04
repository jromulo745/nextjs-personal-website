'use client';

import { useEffect, useState, useRef } from "react";

export default function MultipleChoice() {

  //------------------------------------------------------------------
  // variables //
  const jsonQuestions: string[] = [];
  const jsonAnswers: string[] = [];
  const [questions, setQuestions] = useState([] as string[]);
  const [answers, setAnswers] = useState([] as string[]);
  //------------------------------------------------------------------
  const [listLength, setLength] = useState(0);
  const [choiceDisabled, setChoiceDisabled] = useState(false);
  //------------------------------------------------------------------
  const [buttonColor1, setButtonColor1] = useState('');
  const [buttonColor2, setButtonColor2] = useState('');
  const [buttonColor3, setButtonColor3] = useState('');
  const [buttonColor4, setButtonColor4] = useState('');
  const [buttonColor5, setButtonColor5] = useState('');
  //------------------------------------------------------------------
  const [nextButtonDisabled, setNextButtonDisabled] = useState(false);
  //------------------------------------------------------------------
  const [buttonText, setButtonText] = useState('Start');
  const [beginTruthy, setBeginTruthy] = useState(false);
  const [examStarted, setExamStarted] = useState(false);
  //------------------------------------------------------------------
  const [counter, updateCounter] = useState(0);
  //------------------------------------------------------------------

  async function fetchQuestions() {
    // load questions data //
    const res = await fetch('../../multiple-choice.json');
    const resJSON = await res.json();

    for (let i in resJSON) {
      jsonQuestions.push(i);
      jsonAnswers.push(resJSON[i]);
    }
    setQuestions(jsonQuestions);
    setAnswers(jsonAnswers);
    //------------------------------
    setLength(jsonQuestions.length);
    //------------------------------
  }

  useEffect(() => {
    fetchQuestions();
  }, []);

  function startExam() {
    if (examStarted) {
      updateCounter(counter + 1);
      setChoiceDisabled(false); // enable the buttons for the choices after assessing
      setNextButtonDisabled(true);
      //-----------------------------
      setButtonColor1('transparent'); // reset button color
      setButtonColor2('transparent'); // reset button color
      setButtonColor3('transparent'); // reset button color
      setButtonColor4('transparent'); // reset button color
      setButtonColor5('transparent'); // reset button color
      (document.getElementById("button1") as HTMLInputElement).style.color = '#6E717A'; // reset text color
      (document.getElementById("button2") as HTMLInputElement).style.color = '#6E717A'; // reset text color
      (document.getElementById("button3") as HTMLInputElement).style.color = '#6E717A'; // reset text color
      (document.getElementById("button4") as HTMLInputElement).style.color = '#6E717A'; // reset text color
      (document.getElementById("button5") as HTMLInputElement).style.color = '#6E717A'; // reset text color
    }
    else {
      setBeginTruthy(true);
      setButtonText('Next Question');
      setNextButtonDisabled(true);
    }
  }

  function checkAnswer(selectedChoice: number): void {
    setChoiceDisabled(true); // disable the buttons for the choices while assessing
    setNextButtonDisabled(false);
    setExamStarted(true);

    let correctIndex = 0;

    for (let i = 0; i < 5; i++) {
      if (answers[counter][i][0] === "*") {
        correctIndex = i;
        break;
      }
    }
    
    switch (selectedChoice) {
      case 1:
        answers[counter][selectedChoice - 1][0] === '*' ? setButtonColor1('green') : setButtonColor1('red');
        break;
      case 2:
        answers[counter][selectedChoice - 1][0] === '*' ? setButtonColor2('green') : setButtonColor2('red');
        break;
      case 3:
        answers[counter][selectedChoice - 1][0] === '*' ? setButtonColor3('green') : setButtonColor3('red');
        break;
      case 4:
        answers[counter][selectedChoice - 1][0] === '*' ? setButtonColor4('green') : setButtonColor4('red');
        break;
      case 5:
        answers[counter][selectedChoice - 1][0] === '*' ? setButtonColor5('green') : setButtonColor5('red');
        break;
      default:
        break;
    }

    switch (correctIndex) {
      case 0:
        setButtonColor1('green');
        (document.getElementById("button1") as HTMLInputElement).style.color = 'white';
        break;
      case 1:
        setButtonColor2('green');
        (document.getElementById("button2") as HTMLInputElement).style.color = 'white';
        break;
      case 2:
        setButtonColor3('green');
        (document.getElementById("button3") as HTMLInputElement).style.color = 'white';
        break;
      case 3:
        setButtonColor4('green');
        (document.getElementById("button4") as HTMLInputElement).style.color = 'white';
        break;
      case 4:
        setButtonColor5('green');
        (document.getElementById("button5") as HTMLInputElement).style.color = 'white';
        break;
      default:
        break;
    }
    console.log('here: ' + correctIndex);
  }

  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center backdrop-blur-md sha1w-lg border rounded-3xl p-10" style={{minWidth: '768px', maxWidth: '768px', marginTop: '80px'}}>
        <h1 className="text-3xl mb-5">Multiple Choice</h1>
        <button id="myButton" className="border rounded-2xl p-2.5" style={{borderColor: 'rgb(255, 255, 255)'}} onClick={startExam} disabled={nextButtonDisabled}>{buttonText}</button>
        {beginTruthy ? (
          <div className="flex flex-col items-center justify-center">
            <p className="mt-5 mb-5">{`(${counter + 1} of ${listLength})`}</p>
            <p>{questions[counter]}</p>
            <button id="button1" style={{backgroundColor: buttonColor1, borderColor: 'rgb(255, 255, 255)'}} className="border rounded-2xl p-2.5 mt-5" onClick={() => checkAnswer(1)} disabled={choiceDisabled}>{answers[counter][0][0] === '*' ? answers[counter][0].substring(1): answers[counter][0]}</button>
            <button id="button2" style={{backgroundColor: buttonColor2, borderColor: 'rgb(255, 255, 255)'}} className="border rounded-2xl p-2.5 mt-5" onClick={() => checkAnswer(2)} disabled={choiceDisabled}>{answers[counter][1][0] === '*' ? answers[counter][1].substring(1): answers[counter][1]}</button>
            <button id="button3" style={{backgroundColor: buttonColor3, borderColor: 'rgb(255, 255, 255)'}} className="border rounded-2xl p-2.5 mt-5" onClick={() => checkAnswer(3)} disabled={choiceDisabled}>{answers[counter][2][0] === '*' ? answers[counter][2].substring(1): answers[counter][2]}</button>
            <button id="button4" style={{backgroundColor: buttonColor4, borderColor: 'rgb(255, 255, 255)'}} className="border rounded-2xl p-2.5 mt-5" onClick={() => checkAnswer(4)} disabled={choiceDisabled}>{answers[counter][3][0] === '*' ? answers[counter][3].substring(1): answers[counter][3]}</button>
            <button id="button5" style={{backgroundColor: buttonColor5, borderColor: 'rgb(255, 255, 255)'}} className="border rounded-2xl p-2.5 mt-5" onClick={() => checkAnswer(5)} disabled={choiceDisabled}>{answers[counter][4][0] === '*' ? answers[counter][4].substring(1): answers[counter][4]}</button>
          </div>
        ) : null}
      </div>
    </div>
  );
}