import React from 'react';
import logo from './android-logo.png'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Android
        </p>
        <a
          className="App-link"
          href="https://www.android.com/what-is-android/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Android
        </a>
      </header>
    </div>
  );
}

export default App;
