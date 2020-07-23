import React from 'react';
import './App.css';
import api from './api';
import CardContainer from './components/CardContainer';
import GithubLink from './components/GithubLink';

function App() {
  return (
    <div className="App">
      <GithubLink />
      <CardContainer recipes={api} />
    </div>
  );
}

export default App;
