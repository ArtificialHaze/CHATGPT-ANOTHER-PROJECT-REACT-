import React from "react";
import MessageDisplay from "./MessageDisplay";

const MessagesDisplay = ({ userMesasge }) => {
  return (
    <div className="messages-display">
      {userMesasge.map((item, index) => (
        <MessageDisplay key={index} message={item} />
      ))}
    </div>
  );
};

export default MessagesDisplay;
