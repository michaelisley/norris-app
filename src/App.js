import React from 'react';
import Joke from './components/Joke';
import CategoryButton from './components/CategoryButton';
import './App.css';

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <CategoryButton />
          <Joke />
        </li>
      </ul>
    </div>
  );
}

export default App;
