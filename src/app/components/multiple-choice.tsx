'use client';

import { useEffect, useState } from "react";
import styles from '../components/styles.module.css';

export default function MultipleChoice({file_path_1, file_path_2}: {file_path_1: string, file_path_2: string}) {

  //------------------------------------------------------------------
  // variables //
  const jsonQuestions: string[] = [];
  const jsonAnswers: string[] = [];
  const jsonExplanations: string[] = [];
  //------------------------------------------------------------------
  const jsonFinalQuestions: string[] = [];
  const jsonFinalAnswers: string[] = [];
  const jsonFinalExplanations: string[] = [];
  //------------------------------------------------------------------
  const [questions, setQuestions] = useState([] as string[]);
  const [answers, setAnswers] = useState([] as string[]);
  const [explanations, setExplanations] = useState([] as string[]);
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

  function random_number_generator(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }

  async function fetchQuestions() {
    // load questions data //
    const res = await fetch(file_path_1);
    const resJSON = await res.json();

    for (let i in resJSON) {
      jsonQuestions.push(i);
      jsonAnswers.push(resJSON[i]);
    }
    //-------------------------------------------------------------------------------
    const used_random_indices: number[] = [];
    for (let i = 0; i < jsonQuestions.length; i += 1) {
      let num: number = Math.floor(random_number_generator(0, jsonQuestions.length));
      while (true) {
        num = Math.floor(random_number_generator(0, jsonQuestions.length));
        if (!(used_random_indices.includes(num))) {
          used_random_indices.push(num);
          break;
        }
        else {
          continue;
        }
      }
    }

    console.log(used_random_indices);

    // load explanations data //
    const response = await fetch(file_path_2);
    const responseJSON = await response.json();

    for (let i in responseJSON) {
      jsonExplanations.push(responseJSON[i]);
    }

    for (let i = 0; i < jsonQuestions.length; i += 1) {
      jsonFinalQuestions.push(jsonQuestions[used_random_indices[i]]);
      jsonFinalAnswers.push(jsonAnswers[used_random_indices[i]]);
      jsonFinalExplanations.push(jsonExplanations[used_random_indices[i]]);
    }
    //-------------------------------------------------------------------------------
    setQuestions(jsonFinalQuestions);
    setAnswers(jsonFinalAnswers);
    //-----------------------------------
    setLength(jsonFinalQuestions.length);
    //-----------------------------------
    setExplanations(jsonFinalExplanations);
  }

  useEffect(() => {
    fetchQuestions();
  }, []);

  function startExam() {
    if (examStarted) { // 'Next' button
      console.log((counter + 1) + " | "  + listLength);
      if ((counter + 1) === listLength) {
        setChoiceDisabled(true);
        setNextButtonDisabled(true);
      }
      else {
        updateCounter(counter + 1);
        setChoiceDisabled(false); // enable the buttons for the choices after assessing
        setNextButtonDisabled(true);
        hideOverlay();
        //---------------------------------------------------
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
    }
    else { // 'Start' Button
      setBeginTruthy(true);
      setButtonText('Next Question');
      setNextButtonDisabled(true);
    }
  }

  // -------------------------------------------------
  function showExplanation() {
    alert(explanations[counter]);
    console.log('dude:' + explanations);
  }
  // -------------------------------------------------

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
    // console.log('here: ' + correctIndex);
  }

  function showOverlay() {
    (document.getElementById("overlay") as HTMLInputElement).style.display = 'block';
  }
  
  function hideOverlay() {
    (document.getElementById("overlay") as HTMLInputElement).style.display = 'none';
  }
  
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center backdrop-blur-md border shadow-lg rounded-3xl ml-20 mr-20 mt-10 p-10 multiple-choice" style={{flex: 1, maxWidth: '768px'}}>
        <h1 className="text-3xl mb-5" style={{color: 'grey'}}>Multiple Choice</h1>
        
        {/* explanations button; will show only when the exam starts */}
        <div>
          <button className="border rounded-2xl p-2.5 hover:shadow-lg" style={{borderColor: 'grey'}} onClick={startExam} disabled={nextButtonDisabled}>{buttonText}</button>
          {/* {beginTruthy ? ( */}
          { choiceDisabled ? (
            <button className="border rounded-2xl p-2.5 hover:shadow-lg" style={{borderColor: 'grey', marginLeft: '10px'}} onClick={showOverlay} disabled={nextButtonDisabled}>Explanation</button>) : null
          } 
        </div>

        {/* ------------------------------------------ */}

        <div id="overlay" className={styles.overlay}>
          <div style={{display: 'flex'}}>
            <button style={{color: 'grey', margin: '10px 10px', marginLeft: 'auto', fontSize: '17px'}} onClick={hideOverlay}>X</button>
          </div>
          <p style={{color: 'grey', margin: '5px 20px', fontSize: '15px'}}>{explanations[counter]}</p>
        </div>

        {/* ------------------------------------------ */}
        
        {beginTruthy ? (
          <div className="flex flex-col items-center justify-center" style={{zIndex: '1'}}>
            <p className="mt-5 mb-5">{`(${counter + 1} of ${listLength})`}</p>
            <p>{questions[counter]}</p>
            <button id="button1" style={{backgroundColor: buttonColor1, borderColor: 'grey'}} className="border rounded-2xl p-2.5 mt-5 hover:shadow-lg" onClick={() => checkAnswer(1)} disabled={choiceDisabled}>{answers[counter][0][0] === '*' ? answers[counter][0].substring(1): answers[counter][0]}</button>
            <button id="button2" style={{backgroundColor: buttonColor2, borderColor: 'grey'}} className="border rounded-2xl p-2.5 mt-5 hover:shadow-lg" onClick={() => checkAnswer(2)} disabled={choiceDisabled}>{answers[counter][1][0] === '*' ? answers[counter][1].substring(1): answers[counter][1]}</button>
            <button id="button3" style={{backgroundColor: buttonColor3, borderColor: 'grey'}} className="border rounded-2xl p-2.5 mt-5 hover:shadow-lg" onClick={() => checkAnswer(3)} disabled={choiceDisabled}>{answers[counter][2][0] === '*' ? answers[counter][2].substring(1): answers[counter][2]}</button>
            <button id="button4" style={{backgroundColor: buttonColor4, borderColor: 'grey'}} className="border rounded-2xl p-2.5 mt-5 hover:shadow-lg" onClick={() => checkAnswer(4)} disabled={choiceDisabled}>{answers[counter][3][0] === '*' ? answers[counter][3].substring(1): answers[counter][3]}</button>
            <button id="button5" style={{backgroundColor: buttonColor5, borderColor: 'grey'}} className="border rounded-2xl p-2.5 mt-5 hover:shadow-lg" onClick={() => checkAnswer(5)} disabled={choiceDisabled}>{answers[counter][4][0] === '*' ? answers[counter][4].substring(1): answers[counter][4]}</button>
          </div>
        ) : null}
      </div>
    </div>
  );
}