import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Static React App</h1>
        <p>
          This is a simple static web app built with React.js.
        </p>
        <button onClick={() => alert('Hello!')}>Click Me!</button>
      </header>
    </div>
  );
}

export default App;
