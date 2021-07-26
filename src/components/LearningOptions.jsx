
import React from "react";

import "./LearningOptions.css";

const LearningOptions = (props) => {
  const options = [

    { text: "Mobile Justice", handler:  props.actionProvider.handleOurWorkLinks, id: 1 },
    { text: "Migracam", handler: () => {}, id: 2 },
    { text: "WorkIt", handler: () => {}, id: 3 },
    { text: "Prompt", handler: () => {}, id: 4 },
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