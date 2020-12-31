import React from 'react';
import './App.css';
import './game01.css';
import Nav from './components/nav';
import Board from './components/board';

function App() {
  return (
  	<React.Fragment>
 	 	<div className="Nav"><Nav /></div>
        <div className="Board"><Board /></div> 
    </React.Fragment>
  );
}

export default App;