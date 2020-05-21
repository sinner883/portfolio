import React from 'react';
import './App.css';
import css from './img/css.svg';
import html from './img/html.svg';
import js from './img/js.svg';
import github from './img/git.svg';


function App() {
  return (
    <div className="App">
      <h1>Max Tech Portfolio</h1>
      <img src={css} alt='pict'></img>
      <img src={html} alt='pict'></img>
      <img src={js} alt='pict'></img>
      <img src={github} alt='pict'></img>
    </div>
  );
}

export default App;
