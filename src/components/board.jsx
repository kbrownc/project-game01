import React, { Component } from 'react';

class Board extends Component {
	constructor() {
		super()
		this.state = {
			rollNum: 0
		}
	}
	rollDice() {
		this.setState({
			rollNum: this.getRandonNumber(1,6)
		})
	}

// calculatr which square on the board should be marked as the current location
	calcSpotOnBoard() {
		if (switch1 = 2 && spotOnBoard = 9) {
			squareToMark = document.querySelector(".square9a");
		}
		else if (switch2 = 2 && spotOnBoard = 25) {
			squareToMark = document.querySelector(".square25a");
		}
		else if (switch3 = 2 && spotOnBoard = 45) {
			squareToMark = document.querySelector(".square45a");
		}
		else {
			squareToMark = document.querySelector(".square"+ spotOnBoard);
		}
		squareToMark.style.background-color = red;
	}

	render() {
	  return ( 
	  	<table className="center">
	  	<tbody>
			<tr><th>End</th><th className="cellNot"></th><th className="cellNot"></th>
				<th className = "cellNot4" onClick={() => this.rollDice()}>Roll</th> 
				<th className="cellNot"></th><th className="cellNot"></th><th>Start</th></tr>
			<tr><td></td><td className="cellNot">1</td><td className="cellNot"></td>
				<td id="rollNo">{this.state.rollNum}</td><td className="cellNot"></td><td className="cellNot"></td><td></td></tr>
			<tr><td></td><td className="cellNot">1</td><td className="cellNot"></td>
				<td className="cellNot">4</td><td className="cellNot"></td><td className="cellNot"></td><td></td></tr>
			<tr><td></td><td className="cellNot3"></td><td className="cellNot3"></td>
				<td className="cellNot3"></td><td className="cellNot">4</td><td className="cellNot"></td><td></td></tr>
			<tr><td className="cellNot3a">9</td><td className="cellNot">1</td><td className="cellNot"></td>
				<td className="cellNot3"></td><td className="cellNot">4</td><td className="cellNot"></td><td></td></tr>
			<tr><td></td><td className="cellNot3"></td><td className="cellNot3"></td>
				<td className="cellNot3"></td><td className="cellNot">4</td><td className="cellNot"></td><td></td></tr>
			<tr><td></td><td className="cellNot">1</td><td className="cellNot"></td>
				<td className="cellNot"></td><td className="cellNot"></td><td className="cellNot"></td><td></td></tr>
			<tr><td></td><td className="cellNot">1</td><td className="cellNot"></td>
				<td className="cellNot1"></td><td className="cellNot1"></td><td className="cellNot1"></td><td></td></tr>
			<tr><td></td><td className="cellNot">1</td><td className="cellNot"></td>
				<td className="cellNot1"></td><td className="cellNot"></td><td className="cellNot">
				</td><td className="cellNot1a">9</td></tr>
			<tr><td></td><td className="cellNot">1</td><td className="cellNot"></td>
				<td className="cellNot1"></td><td className="cellNot1"></td><td className="cellNot1"></td><td></td></tr>
			<tr><td></td><td className="cellNot">1</td><td className="cellNot"></td>
				<td className="cellNot"></td><td className="cellNot"></td><td className="cellNot"></td><td></td></tr>
			<tr><td></td><td className="cellNot">1</td><td className="cellNot"></td>
				<td className="cellNot">4</td><td className="cellNot"></td><td className="cellNot"></td><td></td></tr>
			<tr><td></td><td className="cellNot">1</td><td className="cellNot2"></td>
				<td className="cellNot2"></td><td className="cellNot2"></td><td className="cellNot"></td><td></td></tr>
			<tr><td></td><td className="cellNot">1</td><td className="cellNot2"></td>
				<td className="cellNot"></td><td className="cellNot2"></td><td className="cellNot"></td><td></td></tr>
			<tr><td></td><td className="cellNot">1</td><td className="cellNot2"></td>
				<td className="cellNot"></td><td className="cellNot2"></td><td className="cellNot"></td><td></td></tr>
			<tr><td></td><td></td><td></td><td className="cellNot2a">9</td><td></td>
				<td></td><td></td></tr>
		</tbody>
		</table>
	  );
	}
	getRandonNumber = (start, range) => {
		let getRandom = Math.floor((Math.random() * range) +start);
		while (getRandom > range) {
			getRandom = Math.floor((Math.random() * range) +start);
		}
		return getRandom;
	};
}

export default Board;