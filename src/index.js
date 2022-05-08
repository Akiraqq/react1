import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const DialogueData = [
  { name: "Roma", id: 1 },
  { name: "Asya", id: 2 },
  { name: "Seroja", id: 3 },
];

const MessageData = [
  { message: "Hello my friends!", id: 1 },
  { message: "Hay!", id: 2 },
  { message: "Hello", id: 3 },
];

const PostData = [
  { id: 1, message: "First post", likeCount: 12 },
  { id: 2, message: "Second post", likeCount: 16 },
  { id: 3, message: "Third post", likeCount: 19 },
];
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
export { DialogueData, MessageData, PostData };
