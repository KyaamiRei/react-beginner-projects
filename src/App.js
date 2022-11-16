import { useState } from 'react';

import './index.scss';

const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
];

function Result({ correctAnswer, restart }) {
  return (
    <div className='result'>
      <img src='https://cdn-icons-png.flaticon.com/512/2278/2278992.png' />
      <h2>
        Вы отгадали {correctAnswer} ответа из {questions.length}
      </h2>
      <button onClick={restart}>Попробовать снова</button>
    </div>
  );
}

function Game({ step, question, onClickAnswer }) {
  const progress = Math.round((step / questions.length) * 100);

  return (
    <>
      <div className='progress'>
        <div
          style={{ width: `${progress}%` }}
          className='progress__inner'></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index) => (
          <li
            key={index}
            onClick={() => onClickAnswer(index)}>
            {text}
          </li>
        ))}
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const question = questions[step];

  const onClickAnswer = (idSelectedAnswer) => {
    if (question.correct === idSelectedAnswer) {
      setCorrectAnswer(correctAnswer + 1);
    }
    setStep(step + 1);
  };

  const restartGame = () => {
    setStep(0);
    setCorrectAnswer(0);
  };

  return (
    <div className='App'>
      {step !== questions.length ? (
        <Game
          step={step}
          question={question}
          onClickAnswer={(id) => onClickAnswer(id)}
        />
      ) : (
        <Result
          restart={restartGame}
          correctAnswer={correctAnswer}
        />
      )}
    </div>
  );
}

export default App;
