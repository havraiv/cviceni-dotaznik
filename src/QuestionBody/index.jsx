import React from 'react';
import Icon from '../Icon/index';
import './style.css';
// Zařiďte, aby komponenta QuestionBody zobrazovala místo symbolQuestion nebo iconTick ikonku odpovědi, na kterou uživatel kliknul.
const QuestionBody = ({ text, iconType }) => {
  return (
    <div className="question__body">
      <p className="question__text">{text}</p>
      <Icon type={iconType} />
    </div>
  );
};

export default QuestionBody;
