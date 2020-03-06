import React from "react";
import "./App.css";
import MainTable from "./components/MainTable";

function App() {
  return (
    <div className="container">
      <div className="Header">
        <h1>Employee Directory</h1>
        <p>Use search box to narrow your results!</p>
      </div>
      <MainTable />
    </div>
  );
}

export default App;
