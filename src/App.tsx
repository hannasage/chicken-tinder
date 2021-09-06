import React from 'react';
import logo from './logo.svg';
import './App.css';
import { getUserById } from './controllers/UserController'

function App() {
  return (
    <div>
      <button onClick={() => getUserById()}>Test getUserById()</button>
    </div>
  );
}

export default App;
