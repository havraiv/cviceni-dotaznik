import React, { useState } from 'react';
import QuestionBody from '../QuestionBody/index';
import Option from '../Option/index';
import './style.css';
// Zařiďte následující: pokud je ve stavu answered hodnota false, chceme, aby componenta QuestionBody měla ikonku symbolQuestion. Pokud je stav true, chceme, aby typ ikonky byl symbolTick.
const Question = ({ text }) => {
  const [answer, setAnswer] = useState(false);
  return (
    <div className="question">
      <QuestionBody
        iconType={answer ? 'symbolTick' : 'symbolQuestion'}
        text={text}
      />
      <div className="question__options">
        <Option type="smileyStrongYes" text="Souhlasím" />
        <Option type="smileyYes" text="Spíše souhlasím" />
        <Option type="smileyNeutral" text="Nevím" />
        <Option type="smileyNo" text="Spíše nesouhlasím" />
        <Option type="smileyStrongNo" text="Nesouhlasím" />
      </div>
    </div>
  );
};

export default Question;
