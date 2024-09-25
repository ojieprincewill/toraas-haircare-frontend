import React from "react";
import "./faq-item.styles.scss";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

const FaqItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="question-item">
      <div className="question" onClick={onToggle}>
        {question}{" "}
        <span className="icon">
          {isOpen ? <IoRemoveCircleOutline /> : <IoAddCircleOutline />}
        </span>
      </div>
      {isOpen && <p className="answer">{answer}</p>}
    </div>
  );
};

export default FaqItem;
