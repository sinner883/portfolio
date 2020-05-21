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
      <div className='container'>
        <img className='item' src={css} alt='pict'></img>
        <img className='item' src={html} alt='pict'></img>
        <img className='item' src={js} alt='pict'></img>
        <img className='item' src={github} alt='pict'></img>
      </div>
      <div>
        <h1>About Me</h1>
      </div>
    </div>
  );
}

export default App;
