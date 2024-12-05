// src/App.js
import React from "react";
import CurlForm from "./components/CurlForm";
import TelnetForm from "./components/TelnetForm";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Kubernetes Pod Interaction</h1>
      <CurlForm />
      <TelnetForm />
    </div>
  );
}

export default App;
