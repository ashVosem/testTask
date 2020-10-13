import React from 'react';
import ReactDOM from 'react-dom';

import "./assets/styles/styles.scss"
import "normalize.css"

import MainPage from './components/MainPage/MainPage'
import Menu from './components/Menu/Menu'

ReactDOM.render(
  <React.StrictMode>
    <Menu/>
    <MainPage/>
    <div className="scroll">
      <p>Scroll down</p>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

