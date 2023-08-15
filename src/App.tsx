import React from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/styles/style.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-3xl font-bold underline">
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="p-10 min-h-screen flex items-center justify-center bg-cool-gray-700">
      <h1 className="text-9xl font-black text-white text-center">
        <span className="bg-gradient-to-r text-transparent bg-clip-text from-green-400 to-purple-500">
          React tailwind setup
        </span>
      </h1>
    </div>
    </div>
  );
}

export default App;
