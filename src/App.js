import React from "react";
import { Route, Routes } from "react-router-dom";

import { Login, Welcome } from "./Pages";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/main" element={<Welcome />} />
        <Route exact path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
