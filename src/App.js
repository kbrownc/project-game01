import React, { Component } from 'react';
import './App.css';
import './game01.css';
import Nav from './components/nav';
import Board from './components/board';


let switch1 = 0;
let switch2 = 0;
let switch3 = 0;
let score = 0;
let message = "temp1";
let optMessage = "temp2";
let spotOnBoard = 0;
let rollNum = 0;

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			score: 0 ,
			rollNum: 0
		}
	}
    
	// Handles Impacts if play button was pressed
	playBtnHit = () => {
		switch1 = 0;
		switch2 = 0;
		switch3 = 0;
		score = 0;
		message = "temp1";
		optMessage = "temp2";
		let getRollButton = document.querySelector(".cellNot4");
		console.log(getRollButton);
		getRollButton.style.visibility = "visible";
		let getRollNo = document.querySelector(".rollNo");
		getRollNo.style.visibility = "visible";
	}

	getRandonNumber = (start, range) => {
		let getRandom = Math.floor((Math.random() * range) +start);
		while (getRandom > range) {
			getRandom = Math.floor((Math.random() * range) +start);
		}
		return getRandom;
	}
	// this will roll dice, calc progress on board and update your location
	rollDice = () => {
		this.setState({rollNum: this.getRandonNumber(1,6)});
		this.calcSpotOnboard();
		this.updateSpotOnBoard().style.backgroundColor = "red";;
		this.checkForEndOfGame();
		this.checkforSpecialSquares();
		this.setState(this.state.score = this.state.score + 1);
	}

	// calc progress on board
	calcSpotOnBoard = () => {
		spotOnBoard = spotOnBoard + rollNum;

		if ((switch1 = 0) && (spotOnBoard > 8)) {
			spotOnBoard = spotOnBoard + 6;
			switch1 = 1;
		} else if ((switch1 = 0) && (spotOnBoard = 8)) {
			switch1 = 2;
		}

		if (switch2 = 0 && spotOnBoard > 24) {
			spotOnBoard = spotOnBoard + 6;
			switch2 = 1;
		} else if ((switch2 = 0) && (spotOnBoard = 24)) {
			switch2 = 2;
		}

		if ((switch3 = 0) && (spotOnBoard > 44)) {
			spotOnBoard = spotOnBoard + 6;
			switch3 = 1;
		} else if ((switch3 = 0) && (spotOnBoard = 44)) {
			switch3 = 2;
		}
	}

	// Check for end of game
	checkForEndOfGame = () => {
		if (spotOnBoard > 54) {
			spotOnBoard = 55;
			message = "Game Complete";
			let getRollButton = document.querySelector(".cellNot4");
			getRollButton.style.visibility = "hidden";
			let getRollNo = document.querySelector(".rollNo");
			getRollNo.style.visibility = "hidden";
		}
		else {

			message = "Role Again";
		}
	}

	// Check for special squares
	checkforSpecialSquares = () => {
		if (spotOnBoard = 5) {
			optMessage = "Sorry....you lose a roll";
			score = score + 1;
		} else if (spotOnBoard = 8) {
			optMessage = "You have a longer journey";
			let extrasquares1 = document.querySelectorAll(".cellNot1");
			extrasquares1.style.visibility = "visible";
			let extrasquare1a = document.querySelectorAll(".cellNot1a");
			extrasquare1a.style.visibility = "hidden";
			score = score + 1;
		} else if (spotOnBoard = 20) {
			optMessage = "Sorry....you lose a roll";
			score = score + 1;
		} else if (spotOnBoard = 22) {
			optMessage = "Wonderful....you get an extra roll";
			score = score - 1;
		} else if (spotOnBoard = 24) {
			optMessage = "You have a longer journey";
			let extrasquares2 = document.querySelectorAll(".cellNot2");
			extrasquares2.style.visibility = "visible";
			let extrasquare2a = document.querySelectorAll(".cellNot2a");
			extrasquare2a.style.visibility = "hidden";
			score = score + 1;
		} else if (spotOnBoard = 25) {
			optMessage = "Sorry....you lose a roll";
			score = score + 1;
		} else if (spotOnBoard = 34) {
			optMessage = "Wonderful....you get an extra roll";
			score = score - 1;
		} else if (spotOnBoard = 38) {
			optMessage = "Sorry....you lose a roll";
			score = score + 1;
		} else if (spotOnBoard = 44) {
			optMessage = "You have a longer journey";
			let extrasquares3 = document.querySelectorAll(".cellNot3");
			extrasquares3.style.visibility = "visible";
			let extrasquare3a = document.querySelectorAll(".cellNot3a");
			extrasquare3a.style.visibility = "hidden";
			score = score + 1;
		} else if (spotOnBoard = 45) {
			optMessage = "Sorry....you lose a roll";
			score = score + 1;
		}
	}	

	// update square on the board as the current location
	updateSpotOnBoard = () => {
		let squareToMark = "";
		if ((switch1 = 2) && (spotOnBoard = 9)) {
			squareToMark = document.querySelector(".s9a");
		}
		else if ((switch2 = 2) && (spotOnBoard = 25)) {
			squareToMark = document.querySelector(".s25a");
		}
		else if ((switch3 = 2) && (spotOnBoard = 45)) {
			squareToMark = document.querySelector(".s45a");
		}
		else {
			squareToMark = document.querySelector(".s" + spotOnBoard.toString());
		}
		return squareToMark;
	}

	render() {
	  return ( 
  		<React.Fragment>
 	 	<div className="Nav"><Nav 	message={message} 
 	 								optMessage={optMessage} 
 	 								score={this.state.score} 
 	 								playBtnHit={this.playBtnHit()}/>
 	 	</div>
        <div className="Board"><Board rollDice={this.rollDice()} />
        </div> 
    	</React.Fragment>
  		);
	}
}

export default App;