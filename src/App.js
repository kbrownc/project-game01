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
let newScore = 0;

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			score: 0 ,
			rollNum: 0
		}
		this.rollDice = this.rollDice.bind(this);
	};
    
	// Handles Impacts if play button was pressed
	playBtnHit = () => {
		switch1 = 0;
		switch2 = 0;
		switch3 = 0;
		if (spotOnBoard > 0) {
			squareToMark = document.getElementById("s" + spotOnBoard.toString());
			squareToMark.style.backgroundColor = "yellow";
		};
		spotOnBoard = 0;
	//  Is this 'if' still required??????????????????????
		if (spotOnBoardOld > 0) {
			squareToMarkOld = document.getElementById("s" + spotOnBoardOld.toString());
			squareToMarkOld.style.backgroundColor = "yellow";
		};
	// If spot 9a 25a 45a was landed on.....square will need to be reset yellow
		squareToMark = document.querySelector("#s9a");
		squareToMark.style.backgroundColor = "yellow";;
		squareToMark = document.querySelector("#s25a");
		squareToMark.style.backgroundColor = "yellow";;
		squareToMark = document.querySelector("#s45a");
		squareToMark.style.backgroundColor = "yellow";;

		spotOnBoardOld = 0;
		this.setState({score: 0});
		this.setState({rollNum: 0});
		message = "Roll again";
		optMessage = "Kim";
		let getRollButton = document.querySelector(".cellNot4");
		getRollButton.style.visibility = "visible";
		let getRollNo = document.querySelector("#rollNo");
		getRollNo.style.visibility = "visible";
		squareToMarkOld = document.getElementById("s55");
		squareToMarkOld.style.backgroundColor = "yellow";
		// Reset detour 1
		let extraSquares1 = document.querySelectorAll(".cellNot1");
		let i;
		for (i = 0; i < extraSquares1.length; i++) {
  		extraSquares1[i].style.visibility = "hidden";
		}
		let extraSquares1a = document.querySelector(".cellNot1a");
		extraSquares1a.style.visibility = "visible";
		// Reset detour 2
		let extraSquares2 = document.querySelectorAll(".cellNot2");
		for (i = 0; i < extraSquares2.length; i++) {
  		extraSquares2[i].style.visibility = "hidden";
		}
		let extraSquares2a = document.querySelector(".cellNot2a");
		extraSquares2a.style.visibility = "visible";
		// Reset detour 3
		let extraSquares3 = document.querySelectorAll(".cellNot3");
		for (i = 0; i < extraSquares3.length; i++) {
  		extraSquares3[i].style.visibility = "hidden";
		}
		let extraSquares3a = document.querySelector(".cellNot3a");
		extraSquares3a.style.visibility = "visible";
		
	};

	// this will roll dice, calc progress on board and update your location
	rollDice = () => {
	//	let getRandom = Math.floor((Math.random() * 6) + 1);
		let getRandom = 1;
		console.log("******* rollDice", getRandom);
		this.calcSpotOnBoard(getRandom);
		this.checkForEndOfGame();
		this.checkforSpecialSquares();
		this.updateSpotOnBoard();
		this.setState((oldState) => ({
			rollNum: getRandom,
			score: newScore + 1}))
	};

	// calc progress on board
	calcSpotOnBoard = (getRandom) => {
		spotOnBoardOld = spotOnBoard;
		spotOnBoard = spotOnBoard + getRandom;
	// Set previous square back to yellow
	// Is if required??????????????????????????
		if (spotOnBoardOld > 0) {
			squareToMarkOld = document.getElementById("s" + spotOnBoardOld.toString());
			squareToMarkOld.style.backgroundColor = "yellow";
			if ((spotOnBoardOld === 9) && (switch1 === 2)) {
				squareToMarkOld = document.getElementById("s" + spotOnBoardOld.toString() + "a");
				squareToMarkOld.style.backgroundColor = "yellow";
			}
			if ((spotOnBoardOld === 25) && (switch2 === 2)) {
				squareToMarkOld = document.getElementById("s" + spotOnBoardOld.toString() + "a");
				squareToMarkOld.style.backgroundColor = "yellow";
			}
			if ((spotOnBoardOld === 45) && (switch3 === 2)) {
				squareToMarkOld = document.getElementById("s" + spotOnBoardOld.toString() + "a");
				squareToMarkOld.style.backgroundColor = "yellow";
			} 
		};
		console.log('spotOnBoardOld pre',spotOnBoardOld);
		console.log('spotOnBoard pre',spotOnBoard);

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
		console.log('spotOnBoard post',spotOnBoard);
		console.log('switches',switch1,switch2,switch3);
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
		console.log('checkforSpecialSquares score newScore pre',this.state.score, newScore);
		newScore = this.state.score;
		optMessage = "-";
		if (spotOnBoard === 5) {
			optMessage = "Sorry....you lose a roll";
			newScore = newScore + 1;
		} else if (spotOnBoard === 8) {
			optMessage = "You have a longer journey";
			let extraSquares1 = document.querySelectorAll(".cellNot1");
			let i;
			for (i = 0; i < extraSquares1.length; i++) {
  			extraSquares1[i].style.visibility = "visible";
			}
			let extraSquares1a = document.querySelector(".cellNot1a");
			extraSquares1a.style.visibility = "hidden";
		} else if (spotOnBoard === 20) {
			optMessage = "Sorry....you lose a roll";
			newScore = newScore + 1;
		} else if (spotOnBoard === 22) {
			optMessage = "Wonderful....you get an extra roll";
			newScore = newScore - 1;
		} else if (spotOnBoard === 24) {
			optMessage = "You have a longer journey";
			let extraSquares2 = document.querySelectorAll(".cellNot2");
			let i;
			for (i = 0; i < extraSquares2.length; i++) {
  			extraSquares2[i].style.visibility = "visible";
			}
			let extraSquares2a = document.querySelector(".cellNot2a");
			extraSquares2a.style.visibility = "hidden";
		} else if (spotOnBoard === 25) {
			optMessage = "Sorry....you lose a roll";
			newScore = newScore + 1;
		} else if (spotOnBoard === 34) {
			optMessage = "Wonderful....you get an extra roll";
			newScore = newScore - 1;
		} else if (spotOnBoard === 38) {
			optMessage = "Sorry....you lose a roll";
			newScore = newScore + 1;
		} else if (spotOnBoard === 44) {
			optMessage = "You have a longer journey";
			let extraSquares3 = document.querySelectorAll(".cellNot3");
			let i;
			for (i = 0; i < extraSquares3.length; i++) {
  			extraSquares3[i].style.visibility = "visible";
			}
			let extraSquares3a = document.querySelector(".cellNot3a");
			extraSquares3a.style.visibility = "hidden";
		} else if (spotOnBoard === 45) {
			optMessage = "Sorry....you lose a roll";
			newScore = newScore + 1;
		}
		console.log('checkforSpecialSquares score newScore post',this.state.score, newScore);
	};	

	// update square on the board as the current location
	updateSpotOnBoard = () => {
		if (spotOnBoard === 0) {
			spotOnBoard = 1;
			console.log("update spotOnBoard error", spotOnBoard);
		}
		console.log("update spotOnBoard pre", spotOnBoard);
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
		console.log("update spotOnBoard post", squareToMark);
		squareToMark.style.backgroundColor = "red";
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