
import React from "react";

import "./HelpOptions.css";

const HelpOptions = (props) => {
  const options = [

    { text: "Mobile Justice",
    handler:  props.actionProvider.handledidIHelp,
    id: 1 },

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

export default HelpOptions