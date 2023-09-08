import { useState } from "react";
import "./App.css";
import CodeDisplay from "./CodeDisplay";
import MessagesDisplay from "./MessagesDisplay";

const API_KEY = "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";

const App = () => {
  const [chat, setChat] = useState([]);
  const [value, setValue] = useState("");

  const getQuery = async () => {
    try {
      const response = await fetch("https://openapi.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: value,
        }),
      });

      const data = await response.json();
      const userMessage = {
        role: "user",
        content: value,
      };

      setChat((prev) => [...prev, data, userMessage]);
    } catch (err) {
      console.log(err);
    }
  };

  const clearQuery = () => {
    setChat([]);
    setValue("");
  };

  const filteredMessage = chat.filter((message) => message.role === "user");
  const latestCode = chat
    .filter((message) => message.role === "assistant")
    .pop();

  return (
    <div className="App">
      <MessagesDisplay userMesasge={filteredMessage} />
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <CodeDisplay text={latestCode?.content || ""} />
      <div className="buttons">
        <button id="getQuery" onClick={getQuery}>
          Get Query
        </button>
        <button id="clearQuery" onClick={clearQuery}>
          Clear Query
        </button>
      </div>
    </div>
  );
};

export default App;
