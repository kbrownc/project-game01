import React, { Component } from 'react';
import './App.css';
import './game01.css';
import Nav from './components/nav';
import Board from './components/board';


let switch1 = 0;
let switch2 = 0;
let switch3 = 0;
let message = "Roll";
let optMessage = "Kim";
let spotOnBoard = 0;
let spotOnBoardOld = 0;
let squareToMark = "";
let squareToMarkOld = "";

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			score: 5 ,
			rollNum: 0
		}
		this.rollDice = this.rollDice.bind(this);
	};
    
	// Handles Impacts if play button was pressed
	playBtnHit = () => {
		switch1 = 0;
		switch2 = 0;
		switch3 = 0;
		spotOnBoard = 0;
		spotOnBoardOld = 0;
		this.setState({score: 0});
		message = "Roll again";
		optMessage = "Kim";
		let getRollButton = document.querySelector(".cellNot4");
		getRollButton.style.visibility = "visible";
		let getRollNo = document.querySelector("#rollNo");
		getRollNo.style.visibility = "visible";
	};

	// this will roll dice, calc progress on board and update your location
	rollDice = () => {
		let getRandom = Math.floor((Math.random() * 6) + 1);
		this.calcSpotOnBoard();
		this.checkForEndOfGame();
		this.checkforSpecialSquares();
		this.updateSpotOnBoard();
		this.setState((oldstate) => ({
			rollNum: getRandom,
			score: this.newScore + 1}))
	};

	// calc progress on board
	calcSpotOnBoard = () => {
		spotOnBoardOld = spotOnBoard;
		spotOnBoard = spotOnBoard + this.state.rollNum;

		if ((switch1 === 0) && (spotOnBoard > 8)) {
			spotOnBoard = spotOnBoard + 6;
			switch1 = 1;
		} else if ((switch1 === 0) && (spotOnBoard === 8)) {
			switch1 = 2;
		} else if ((switch2 === 0) && (spotOnBoard > 24)) {
			spotOnBoard = spotOnBoard + 6;
			switch2 = 1;
		} else if ((switch2 === 0) && (spotOnBoard === 24)) {
			switch2 = 2;
		} else if ((switch3 === 0) && (spotOnBoard > 44)) {
			spotOnBoard = spotOnBoard + 6;
			switch3 = 1;
		} else if ((switch3 === 0) && (spotOnBoard === 44)) {
			switch3 = 2;
		}
	};

	// Check for end of game
	checkForEndOfGame = () => {
		if (spotOnBoard > 54) {
			spotOnBoard = 55;
			message = "Game Complete";
			optMessage = "Kim";
			let getRollButton = document.querySelector(".cellNot4");
			getRollButton.style.visibility = "hidden";
			let getRollNo = document.querySelector("#rollNo");
			getRollNo.style.visibility = "hidden";
		}
		else {

			message = "Role Again";
		}
	};

	// Check for special squares
	checkforSpecialSquares = () => {
		this.newScore = this.state.score;
		if (spotOnBoard === 5) {
			optMessage = "Sorry....you lose a roll";
			this.newScore = this.newScore + 1;
		} else if (spotOnBoard === 8) {
			optMessage = "You have a longer journey";
			let extraSquares1 = document.querySelectorAll(".cellNot1");
			let i;
			for (i = 0; i < extraSquares1.length; i++) {
  			extraSquares1[i].style.visibility = "visible";
			}
			let extraSquares1a = document.querySelector(".cellNot1a");
			extraSquares1a.style.visibility = "hidden";
			this.newScore = this.newScore + 1;
		} else if (spotOnBoard === 20) {
			optMessage = "Sorry....you lose a roll";
			this.newScore = this.newScore + 1;
		} else if (spotOnBoard === 22) {
			optMessage = "Wonderful....you get an extra roll";
			this.newScore = this.newScore - 1;
		} else if (spotOnBoard === 24) {
			optMessage = "You have a longer journey";
			let extraSquares2 = document.querySelectorAll(".cellNot2");
			let i;
			for (i = 0; i < extraSquares2.length; i++) {
  			extraSquares2[i].style.visibility = "visible";
			}
			let extraSquares2a = document.querySelector(".cellNot2a");
			extraSquares2a.style.visibility = "hidden";
			this.newScore = this.newScore + 1;
		} else if (spotOnBoard === 25) {
			optMessage = "Sorry....you lose a roll";
			this.newScore = this.newScore + 1;
		} else if (spotOnBoard === 34) {
			optMessage = "Wonderful....you get an extra roll";
			this.newScore = this.newScore - 1;
		} else if (spotOnBoard === 38) {
			optMessage = "Sorry....you lose a roll";
			this.newScore = this.newScore + 1;
		} else if (spotOnBoard === 44) {
			optMessage = "You have a longer journey";
			let extraSquares3 = document.querySelectorAll(".cellNot3");
			let i;
			for (i = 0; i < extraSquares3.length; i++) {
  			extraSquares3[i].style.visibility = "visible";
			}
			let extraSquares3a = document.querySelector(".cellNot3a");
			extraSquares3a.style.visibility = "hidden";
			this.newScore = this.newScore + 1;
		} else if (spotOnBoard === 45) {
			optMessage = "Sorry....you lose a roll";
			this.newScore = this.newScore + 1;
		}
	};	

	// update square on the board as the current location
	updateSpotOnBoard = () => {
		if (spotOnBoard === 0) spotOnBoard = 4;
		if ((switch1 === 2) && (spotOnBoard === 9)) {
			squareToMark = document.querySelector("#s9a");
		}
		else if ((switch2 === 2) && (spotOnBoard === 25)) {
			squareToMark = document.querySelector("#s25a");
		}
		else if ((switch3 === 2) && (spotOnBoard === 45)) {
			squareToMark = document.querySelector("#s45a");
		}
		else {
			squareToMark = document.getElementById("s" + spotOnBoard.toString());
		}
		if (spotOnBoardOld > 0) {
			squareToMarkOld = document.getElementById("s" + spotOnBoardOld.toString());
			squareToMarkOld.style.backgroundColor = "yellow";;
		};
		squareToMark.style.backgroundColor = "red";;
		return squareToMark;
	};

	render() {
	  return ( 
  		<React.Fragment>
 	 	<div className="Nav"><Nav 	message={message} 
 	 								optMessage={optMessage} 
 	 								score={this.state.score} 
 	 								playBtnHit={this.playBtnHit}/>
 	 	</div>
        <div className="Board"><Board rollDice={this.rollDice}
        							rollNum={this.state.rollNum} />
        </div> 
    	</React.Fragment>
  		);
	}
};

export default App;