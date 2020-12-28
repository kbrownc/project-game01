import React, {Component} from 'react';
import './App.css';
import './game01.css';
import Nav from './components/nav';
import Roll from './components/roll';
import Board from './components/board';

function App() {
  return (
  	<React.Fragment>
  	   <div className="Nav"><Nav /></div>
        <div className="Roll"><Roll /></div> 
        <div className="Board"><Board /></div>
    </React.Fragment>
  );
}

export default App;