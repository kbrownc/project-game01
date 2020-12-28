import React, {Component} from 'react';

let getRandonNumber = function(start, range) {
	let getRandom = Math.floor((Math.random() * range) +start);
	while (getRandom > range) {
		getRandom = Math.floor((Math.random() * range) +start);
	}
	return getRandom;
}

class Roll extends Component {
	render() {
	  return ( 
	  	<div>
	  	<p>Roll: {getRandonNumber(1,6)}</p>
		</div>
	  );
	}
}

export default Roll;