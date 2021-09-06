import React from 'react';
import logo from './logo.svg';
import './App.css';
import { getUserById } from './controllers/UserController'

function App() {
  return (
    <div>
      <button onClick={() => getUserById('5e9a3c100c864f4f4cedc6ae')}>Test getUserById()</button>
    </div>
  );
}

export default App;
