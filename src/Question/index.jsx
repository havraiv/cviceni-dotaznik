import React, { useState } from 'react';
import QuestionBody from '../QuestionBody/index';
import Option from '../Option/index';
import './style.css';
// Nyní budeme potřebovat, aby nám komponenta Option skrze callback předala typ ikonky, na kterou uživatel kliknul. Komponenta Option tedy musí callbacku onSelected předat typ ikony, kterou zobrazuje.
// Funkce handleSelect v komponentě Question bude pak mít jeden parametr, který nazveme iconType. Jakmile se tato funkce zavolá, nastavíme náš stav answer na hodnotu získanou v tomto parametru.Funkce handleSelect v komponentě Question bude pak mít jeden parametr, který nazveme iconType. Jakmile se tato funkce zavolá, nastavíme náš stav answer na hodnotu získanou v tomto parametru.
const Question = ({ text }) => {
  const handleSelect = (iconType) => {
    setAnswer(iconType);
  };
  const [answer, setAnswer] = useState('symbolQuestion');
  return (
    <div className="question">
      <QuestionBody iconType={answer} text={text} />
      <div className="question__options">
        <Option
          type="smileyStrongYes"
          text="Souhlasím"
          onSelected={handleSelect}
        />
        <Option
          type="smileyYes"
          text="Spíše souhlasím"
          onSelected={handleSelect}
        />
        <Option type="smileyNeutral" text="Nevím" onSelected={handleSelect} />
        <Option
          type="smileyNo"
          text="Spíše nesouhlasím"
          onSelected={handleSelect}
        />
        <Option
          type="smileyStrongNo"
          text="Nesouhlasím"
          onSelected={handleSelect}
        />
      </div>
    </div>
  );
};

export default Question;
