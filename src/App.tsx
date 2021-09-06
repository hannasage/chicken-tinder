import React from 'react';
import logo from './logo.svg';
import './App.css';
import { getUser } from './controllers/UserController'

function App() {
  return (
    <div>
      <button onClick={() => getUser()}>Test getUser()</button>
    </div>
  );
}

export default App;
