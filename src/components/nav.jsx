import React, { Component } from 'react';

class Nav extends Component {
	constructor(props) {
		super(props)
		this.state = {
			score: 0
			message: null
		}
	}
	render() {
	  return ( 
  		<div>
			<div>
				<table className="center">
				<tbody>
				<tr><td className = "cellNot4" onClick={() => this.props.playBtnHit()}>Play</td>
					<td className="cellNot"></td><td className="cellNot"></td>
					<td className="cellNot"></td><td className="cellNot">
					</td><td className="score">Score</td>
						<td id="scoreNo" className="score">{this.props.score}</td></tr>
				</tbody>
				</table>
			</div>
			<div>
				<h4 className="message">{this.props.message}</h4>
				<h5 className="optMessage">{this.props.optMessage}</h5>
			</div>
		</div>
  		);
	}
}

export default Nav;