import React, {Component} from 'react';

const Nav = () => {
	return (
		<div className="Nav">
		<table class="center">
			<tr><td>Start</td><td id="cellNot"></td><td id="cellNot"></td><td id="cellNot"></td>
				<td id="cellNot"></td><td>Score</td><td>0</td></tr>
		</table>
		<div>
			<h4><b>Message Line</b></h4>
			<h5>Optional Message Line</h5>
		</div>
		</div>
		);
};

export default Nav;