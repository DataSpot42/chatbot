import React from "react";

import "./LearningOptions.css";

const LearningOptions = (props) => {
  const options = [
    {
      text: "About Us",
      handler: props.actionProvider.handleAboutUs,
      id: 1,
    },
    { text: "What we do", handler: props.actionProvider.handleWhatWeDo, 
      id: 2 },
    { text: "Work with us", handler: props.actionProvider.handleWork, id: 3 },
    { text: "GC Careers", handler: props.actionProvider.handleCareer, id: 4 },
    { text: "News", handler: props.actionProvider.handleNews, id: 5 },
    { text: "Contact us", handler: props.actionProvider.handleContact, id: 6 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default LearningOptions;

