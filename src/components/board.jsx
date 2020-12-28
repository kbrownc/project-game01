import React, { Component } from 'react';

class Board extends Component {
	render() {
	  return ( 
	  	<div>
	  	<table class="center">
			<tr><th>Start</th><th id="cellNot"></th><th id="cellNot"></th><th>Roll</th>
				<th id="cellNot"></th><th id="cellNot"></th><th>End</th></tr>
			<tr><td></td><td id="cellNot">1</td><td id="cellNot"></td>
				<td id="rollNo">0</td><td id="cellNot"></td><td id="cellNot"></td><td></td></tr>
			<tr><td></td><td id="cellNot">1</td><td id="cellNot"></td>
				<td id="cellNot">4</td><td id="cellNot"></td><td id="cellNot"></td><td></td></tr>
			<tr><td></td><td id="cellNot3">1</td><td id="cellNot3"></td>
				<td id="cellNot3">4</td><td id="cellNot"></td><td id="cellNot"></td><td></td></tr>
			<tr><td id="cellNot3a">9</td><td id="cellNot">1</td><td id="cellNot"></td>
				<td id="cellNot3">4</td><td id="cellNot"></td><td id="cellNot"></td><td></td></tr>
			<tr><td></td><td id="cellNot3">1</td><td id="cellNot3"></td>
				<td id="cellNot3">4</td><td id="cellNot"></td><td id="cellNot"></td><td></td></tr>
			<tr><td></td><td id="cellNot">1</td><td id="cellNot"></td>
				<td id="cellNot">4</td><td id="cellNot"></td><td id="cellNot"></td><td></td></tr>
			<tr><td></td><td id="cellNot">1</td><td id="cellNot"></td>
				<td id="cellNot1">4</td><td id="cellNot1">1</td><td id="cellNot1">1</td><td></td></tr>
			<tr><td></td><td id="cellNot">1</td><td id="cellNot"></td>
				<td id="cellNot1">4</td><td id="cellNot"></td><td id="cellNot">
				</td><td id="cellNot1a">9</td></tr>
			<tr><td></td><td id="cellNot">1</td><td id="cellNot"></td>
				<td id="cellNot1">4</td><td id="cellNot1"></td><td id="cellNot1"></td><td></td></tr>
			<tr><td></td><td id="cellNot">1</td><td id="cellNot"></td>
				<td id="cellNot">4</td><td id="cellNot"></td><td id="cellNot"></td><td></td></tr>
			<tr><td></td><td id="cellNot">1</td><td id="cellNot"></td>
				<td id="cellNot">4</td><td id="cellNot"></td><td id="cellNot"></td><td></td></tr>
			<tr><td></td><td id="cellNot">1</td><td id="cellNot2"></td>
				<td id="cellNot2">4</td><td id="cellNot2"></td><td id="cellNot"></td><td></td></tr>
			<tr><td></td><td id="cellNot">1</td><td id="cellNot2"></td>
				<td id="cellNot"></td><td id="cellNot2"></td><td id="cellNot"></td><td></td></tr>
			<tr><td></td><td id="cellNot">1</td><td id="cellNot2"></td>
				<td id="cellNot"></td><td id="cellNot2"></td><td id="cellNot"></td><td></td></tr>
			<tr><td>*</td><td></td><td></td><td id="cellNot2a">9</td><td></td><td></td><td>*</td></tr>
		</table>
		</div>
	  );
	}
}

export default Board;