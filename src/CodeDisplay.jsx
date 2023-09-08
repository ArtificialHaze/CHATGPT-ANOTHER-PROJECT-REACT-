import React from "react";

const CodeDisplay = ({ text }) => {
  return (
    <div className="code-display">
      <div className="btns">
        <div className="button first"></div>
        <div className="button middle"></div>
        <div className="button last"></div>
      </div>
      <div className="code-output">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default CodeDisplay;
