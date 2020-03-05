import React from 'react';
import './App.css';
import MainTable from "./components/MainTable"

function App() {
  return (
    <div>
      <div className="Header">
        <h1>Employee Directory</h1>
        <p>Use search box to narrow your results!</p>
      </div>
      <form>
        <div className="row">
          <div className="col-3">
            <input type="text" className="form-control" placeholder="Search">
            </input>
          </div>
          <button type="button" className="btn btn-primary">Search</button>
          <MainTable />
    
        </div>
      </form>
    </div>
  );
}

export default App;
