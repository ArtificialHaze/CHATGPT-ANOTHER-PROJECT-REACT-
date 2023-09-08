import React from "react";
import { FaLaptopCode } from "react-icons/fa";

const MessageDisplay = ({ message }) => {
  return (
    <div className="message-display">
      <p id="icon">
        <FaLaptopCode />
      </p>
      <p>{message.role}</p>
      <p>{message.content}</p>
    </div>
  );
};

export default MessageDisplay;
