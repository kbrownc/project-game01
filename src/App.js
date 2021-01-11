import React from 'react';
import './App.css';
import './game01.css';
import Nav from './components/nav';
import Board from './components/board';

function App() {
	constructor(props) {
        super(props);
        this.state = {
            message: null
        };    
      myCallback = (dataMainMessage) => { 
        this.setState({message: message});
    },
  return (
  	<React.Fragment>
 	 	<div className="Nav"><Nav message={message} 
 	 		optMessage={optMessage} score={score}/></div>
        <div className="Board"><Board playBtn={playBtn} /></div> 
    </React.Fragment>
  );
}

export default App;