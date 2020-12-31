import React, {Component} from 'react';

const Nav = () => {
	return (
		<div>
		<div>
		<table className="center">
		<tbody>
			<tr><td>Start</td><td className="cellNot"></td><td className="cellNot"></td>
				<td className="cellNot"></td><td className="cellNot">
				</td><td className="score">Score</td><td id="scoreNo" className="score">0</td></tr>
		</tbody>
		</table>
		</div>
		<div>
			<h4>Message Line</h4>
			<h5>Optional Message Line</h5>
		</div>
		</div>
		);
};

export default Nav;