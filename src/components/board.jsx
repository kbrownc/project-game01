import React, { Component } from 'react';

class Board extends Component {
	render() {
	  return ( 
	  	<table className="center">
	  	<tbody>
			<tr><th>Start</th><th className="cellNot"></th><th className="cellNot"></th><th>Roll</th>
				<th className="cellNot"></th><th className="cellNot"></th><th>End</th></tr>
			<tr><td></td><td className="cellNot">1</td><td className="cellNot"></td>
				<td id="rollNo">0</td><td className="cellNot"></td><td className="cellNot"></td><td></td></tr>
			<tr><td></td><td className="cellNot">1</td><td className="cellNot"></td>
				<td className="cellNot">4</td><td className="cellNot"></td><td className="cellNot"></td><td></td></tr>
			<tr><td></td><td className="cellNot3">1</td><td className="cellNot3"></td>
				<td className="cellNot3">4</td><td className="cellNot"></td><td className="cellNot"></td><td></td></tr>
			<tr><td className="cellNot3a">9</td><td className="cellNot">1</td><td className="cellNot"></td>
				<td className="cellNot3">4</td><td className="cellNot"></td><td className="cellNot"></td><td></td></tr>
			<tr><td></td><td className="cellNot3">1</td><td className="cellNot3"></td>
				<td className="cellNot3">4</td><td className="cellNot"></td><td className="cellNot"></td><td></td></tr>
			<tr><td></td><td className="cellNot">1</td><td className="cellNot"></td>
				<td className="cellNot">4</td><td className="cellNot"></td><td className="cellNot"></td><td></td></tr>
			<tr><td></td><td className="cellNot">1</td><td className="cellNot"></td>
				<td className="cellNot1">4</td><td className="cellNot1">1</td><td className="cellNot1">1</td><td></td></tr>
			<tr><td></td><td className="cellNot">1</td><td className="cellNot"></td>
				<td className="cellNot1">4</td><td className="cellNot"></td><td className="cellNot">
				</td><td className="cellNot1a">9</td></tr>
			<tr><td></td><td className="cellNot">1</td><td className="cellNot"></td>
				<td className="cellNot1">4</td><td className="cellNot1"></td><td className="cellNot1"></td><td></td></tr>
			<tr><td></td><td className="cellNot">1</td><td className="cellNot"></td>
				<td className="cellNot">4</td><td className="cellNot"></td><td className="cellNot"></td><td></td></tr>
			<tr><td></td><td className="cellNot">1</td><td className="cellNot"></td>
				<td className="cellNot">4</td><td className="cellNot"></td><td className="cellNot"></td><td></td></tr>
			<tr><td></td><td className="cellNot">1</td><td className="cellNot2"></td>
				<td className="cellNot2">4</td><td className="cellNot2"></td><td className="cellNot"></td><td></td></tr>
			<tr><td></td><td className="cellNot">1</td><td className="cellNot2"></td>
				<td className="cellNot"></td><td className="cellNot2"></td><td className="cellNot"></td><td></td></tr>
			<tr><td></td><td className="cellNot">1</td><td className="cellNot2"></td>
				<td className="cellNot"></td><td className="cellNot2"></td><td className="cellNot"></td><td></td></tr>
			<tr><td>*</td><td></td><td></td><td className="cellNot2a">9</td><td></td><td></td><td>*</td></tr>
		</tbody>
		</table>
	  );
	}
}

export default Board;