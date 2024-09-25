import React, { useState } from "react";
import "./faq.styles.scss";
import { FAQ_DATA } from "../../../data/faq-data/faq.data";
import FaqItem from "../faq-item/faq-item.component";

const Faq = () => {
  const [questions, setQuestions] = useState(FAQ_DATA);

  const toggleQuestionItem = (index) => {
    const updatedItems = [...questions];
    updatedItems[index].isOpen = !updatedItems[index].isOpen;
    updatedItems[index].isActive = !updatedItems[index].isActive;
    setQuestions(updatedItems);
  };

  return (
    <div className="questions-container">
      <p className="questions-title">frequently asked questions</p>
      {questions.map((item, index) => (
        <FaqItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={item.isOpen}
          onToggle={() => toggleQuestionItem(index)}
        />
      ))}
    </div>
  );
};

export default Faq;
