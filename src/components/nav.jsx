import React from 'react';

const Nav = () => {
	playBtn() {
		optMessage = "";
	}
	return (
		<div>
		<div>
		<table className="center">
		<tbody>
			<tr><td className = "cellNot4" onClick={() => this.playBtn()}>Play</td>
				<td className="cellNot"></td><td className="cellNot"></td>
				<td className="cellNot"></td><td className="cellNot">
				</td><td className="score">Score</td>
					<td id="scoreNo" className="score">{score}</td></tr>
		</tbody>
		</table>
		</div>
		<div>
			<h4 className="message">{message}</h4>
			<h5 className="optMessage">{optMessage}</h5>
		</div>
		</div>
		);
};

export default Nav;