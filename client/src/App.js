import React from "react";
import logo from './logo.svg';
import './App.css';



function App() {

  const [data, setData] = React.useState(null);

  fetch("/api")
    .then((res) => res.json())
    .then((data) => setData(data.message));
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       <p>{!data ? "Loading..." : data}</p>
      </header>
    </div>
  );
}

export default App;
