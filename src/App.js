import React from "react";
import "./App.css";
import Dialodues from "./components/Dialogues/Dialogues";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Profile />
        <Dialodues />
      </div>
    </div>
  );
};

export default App;
