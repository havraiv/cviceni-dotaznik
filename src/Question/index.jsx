import React, { useState } from 'react';
import QuestionBody from '../QuestionBody/index';
import Option from '../Option/index';
import './style.css';

const Question = ({ text }) => {
  const onSelectedOriginal = () => {
    console.log('Spíše souhlasím.');
  };
  const [answer, setAnswer] = useState(false);
  return (
    <div className="question">
      <QuestionBody
        iconType={answer ? 'symbolTick' : 'symbolQuestion'}
        text={text}
      />
      <div className="question__options">
        <Option
          type="smileyStrongYes"
          text="Souhlasím"
          onSelected={onSelectedOriginal}
        />
        <Option
          type="smileyYes"
          text="Spíše souhlasím"
          onSelected={onSelectedOriginal}
        />
        <Option
          type="smileyNeutral"
          text="Nevím"
          onSelected={onSelectedOriginal}
        />
        <Option
          type="smileyNo"
          text="Spíše nesouhlasím"
          onSelected={onSelectedOriginal}
        />
        <Option
          type="smileyStrongNo"
          text="Nesouhlasím"
          onSelected={onSelectedOriginal}
        />
      </div>
    </div>
  );
};

export default Question;
