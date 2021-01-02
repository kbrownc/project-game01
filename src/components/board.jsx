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