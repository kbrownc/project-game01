import React, { Component } from 'react';

class Board extends Component {
	render() {
	  return ( 
	  	<table className="center">
	  	<tbody>
			<tr><th id="s55">End</th><th className="cellNot"></th><th className="cellNot"></th>
				<th className ="cellNot4" onClick={this.props.rollDice}>Roll</th> 
				<th className="cellNot"></th><th className="cellNot"></th><th id="s1">Start</th></tr>
			<tr><td id="s54"></td><td className="cellNot">1</td><td className="cellNot"></td>
				<td id="rollNo">{this.props.rollNum}</td><td className="cellNot"></td>
				<td className="cellNot"></td><td id="s2"></td></tr>
			<tr><td id="s53"></td><td className="cellNot">1</td><td className="cellNot"></td>
				<td className="cellNot">4</td><td className="cellNot"></td><td className="cellNot">
				</td><td id="s3"></td></tr>
			<tr><td id="s52"></td><td className="cellNot3" id="s51"></td>
				<td className="cellNot3" id="s50"></td>
				<td className="cellNot3" id="s49"></td><td className="cellNot">4</td>
				<td className="cellNot">
				</td><td id="s4"></td></tr>
			<tr><td className="cellNot3a" id="s45"></td><td className="cellNot">1</td>
				<td className="cellNot"></td>
				<td className="cellNot3" id="s48"></td><td className="cellNot">4</td>
				<td className="cellNot"></td><td id="s5"></td></tr>
			<tr><td id="s44"></td><td className="cellNot3" id="s45a"></td>
				<td className="cellNot3" id="s46"></td>
				<td className="cellNot3" id="s47"></td><td className="cellNot">4</td>
				<td className="cellNot"></td><td id="s6"></td></tr>
			<tr><td id="s43"></td><td className="cellNot">1</td><td className="cellNot"></td>
				<td className="cellNot"></td><td className="cellNot"></td>
				<td className="cellNot"></td><td id="s7"></td></tr>
			<tr><td id="s42"></td><td className="cellNot">1</td><td className="cellNot"></td>
				<td className="cellNot1" id="s11"></td><td className="cellNot1" id="s10"></td>
				<td className="cellNot1" id="s9a"></td><td id="s8"></td></tr>
			<tr><td id="s41"></td><td className="cellNot">1</td><td className="cellNot"></td>
				<td className="cellNot1" id="s12"></td><td className="cellNot"></td>
				<td className="cellNot">
				</td><td className="cellNot1a" id="s9"></td></tr>
			<tr><td id="s40"></td><td className="cellNot">1</td><td className="cellNot"></td>
				<td className="cellNot1" id="s13"></td><td className="cellNot1" id="s14"></td>
				<td className="cellNot1" id="s15"></td><td id="s16"></td></tr>
			<tr><td id="s39"></td><td className="cellNot">1</td><td className="cellNot"></td>
				<td className="cellNot"></td><td className="cellNot"></td>
				<td className="cellNot"></td><td id="s17"></td></tr>
			<tr><td id="s38"></td><td className="cellNot">1</td><td className="cellNot"></td>
				<td className="cellNot">4</td><td className="cellNot"></td>
				<td className="cellNot"></td><td id="s18"></td></tr>
			<tr><td id="s37"></td><td className="cellNot">1</td><td className="cellNot2" id="s29"></td>
				<td className="cellNot2" id="s28"></td><td className="cellNot2" id="s27"></td>
				<td className="cellNot"></td><td id="s19"></td></tr>
			<tr><td id="s36"></td><td className="cellNot">1</td><td className="cellNot2" id="s30"></td>
				<td className="cellNot"></td><td className="cellNot2" id="s26"></td>
				<td className="cellNot"></td><td id="s20"></td></tr>
			<tr><td id="s35"></td><td className="cellNot">1</td><td className="cellNot2" id="s31"></td>
				<td className="cellNot"></td><td className="cellNot2" id="s25a"></td>
				<td className="cellNot"></td><td id="s21"></td></tr>
			<tr><td id="s34"></td><td id="s33"></td><td id="s32"></td>
				<td className="cellNot2a" id="s25"></td><td id="s24"></td>
				<td id="s23"></td><td id="s22"></td></tr>
		</tbody>
		</table>
	  );
	}
}

export default Board;