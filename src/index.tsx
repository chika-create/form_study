import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

function App () {
  return (
    <div className="App">
      <h1>Hello, React with TypeScript</h1>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);