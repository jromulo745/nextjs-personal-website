'use client';

import { useEffect, useState } from "react";
import styles from '../components/styles.module.css';

export default function MultipleChoice({ file_path_1, file_path_2 }: { file_path_1: string, file_path_2: string }) {

  const [questions, setQuestions] = useState<string[]>([]);
  const [answers, setAnswers] = useState<string[][]>([]);
  const [explanations, setExplanations] = useState<string[]>([]);
  const [listLength, setLength] = useState(0);

  const [selectedChoices, setSelectedChoices] = useState<number[]>([]);
  const [choiceDisabled, setChoiceDisabled] = useState(false);
  const [nextButtonDisabled, setNextButtonDisabled] = useState(false);
  const [buttonText, setButtonText] = useState('Start');
  const [beginTruthy, setBeginTruthy] = useState(false);
  const [examStarted, setExamStarted] = useState(false);
  const [counter, updateCounter] = useState(0);

  async function fetchQuestions() {
    const res = await fetch(file_path_1);
    const resJSON = await res.json();

    const jsonQuestions: string[] = [];
    const jsonAnswers: string[][] = [];
    for (let i in resJSON) {
      jsonQuestions.push(i);
      jsonAnswers.push(resJSON[i]);
    }

    const response = await fetch(file_path_2);
    const responseJSON = await response.json();
    const jsonExplanations: string[] = Object.values(responseJSON);

    setQuestions(jsonQuestions);
    setAnswers(jsonAnswers);
    setExplanations(jsonExplanations);
    setLength(jsonQuestions.length);
  }

  useEffect(() => {
    fetchQuestions();
  }, []);

  function startExam() {
    if (examStarted) { // Next
      if ((counter + 1) === listLength) {
        setChoiceDisabled(true);
        setNextButtonDisabled(true);
      } else {
        updateCounter(counter + 1);
        setChoiceDisabled(false);
        setNextButtonDisabled(true);
        setSelectedChoices([]);
        hideOverlay();
      }
    } else { // Start
      setBeginTruthy(true);
      setButtonText('Next Question');
      setNextButtonDisabled(true);
    }
  }

  function toggleChoice(index: number) {
    if (choiceDisabled) return;
    setSelectedChoices(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  }

  function checkAnswer(): void {
    setChoiceDisabled(true);
    setNextButtonDisabled(false);
    setExamStarted(true);
  }

  function isCorrect(index: number): boolean {
    return answers[counter][index].startsWith('*');
  }

  function showOverlay() {
    (document.getElementById("overlay") as HTMLDivElement).style.display = 'block';
  }

  function hideOverlay() {
    (document.getElementById("overlay") as HTMLDivElement).style.display = 'none';
  }

  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center backdrop-blur-md border shadow-lg rounded-3xl ml-20 mr-20 mt-10 p-10 multiple-choice" style={{ flex: 1, maxWidth: '768px', position: 'relative' }}>
        <h1 className="text-3xl mb-5" style={{ color: 'grey' }}>Multiple Choice</h1>

        <div>
          <button className="border rounded-2xl p-2.5 hover:shadow-lg"
            style={{ borderColor: 'grey' }}
            onClick={startExam}
            disabled={nextButtonDisabled}>
            {buttonText}
          </button>

          {choiceDisabled ? (
            <button className="border rounded-2xl p-2.5 hover:shadow-lg"
              style={{ borderColor: 'grey', marginLeft: '10px' }}
              onClick={showOverlay}>
              Explanation
            </button>
          ) : null}
        </div>

        <div id="overlay" className={styles.overlay}>
          <div style={{ display: 'flex' }}>
            <button style={{ color: 'grey', margin: '10px 10px', marginLeft: 'auto', marginRight: '20px', fontSize: '17px' }} onClick={hideOverlay}>X</button>
          </div>
          <p style={{ color: 'grey', margin: '5px 20px', fontSize: '15px' }}>{explanations[counter]}</p>
        </div>

        {beginTruthy ? (
          <div className="flex flex-col items-center justify-center w-full" style={{ zIndex: '1' }}>
            <p className="mt-5 mb-5">{`(${counter + 1} of ${listLength})`}</p>
            <p>{questions[counter]}</p>

            {/* Centered answers */}
            <div className="flex flex-col items-center w-full mt-4">
              {answers[counter].map((ans, i) => {
                const cleanAns = ans.startsWith('*') ? ans.substring(1) : ans;
                const isSelected = selectedChoices.includes(i);
                const correct = choiceDisabled && isCorrect(i);
                const wrong = choiceDisabled && isSelected && !isCorrect(i);

                return (
                  <label
                    key={i}
                    className="flex items-center cursor-pointer mb-3"
                    style={{ alignItems: "center", width: "60%" }}
                  >
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => toggleChoice(i)}
                      disabled={choiceDisabled}
                      className="mr-3"
                      style={{ minWidth: "18px", minHeight: "18px" }}
                    />
                    <span
                      style={{
                        flex: 1,
                        padding: "6px 12px",
                        border: "1px solid grey",
                        borderRadius: "10px",
                        backgroundColor: correct ? "green" : wrong ? "red" : "transparent",
                        color: correct || wrong ? "white" : "#6E717A",
                        textAlign: "left"
                      }}
                    >
                      {cleanAns}
                    </span>
                  </label>
                );
              })}
            </div>

            {!choiceDisabled && (
              <button
                className="border rounded-2xl p-2.5 mt-5 hover:shadow-lg"
                style={{ borderColor: 'grey' }}
                onClick={checkAnswer}
              >
                Submit Answer
              </button>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
}
