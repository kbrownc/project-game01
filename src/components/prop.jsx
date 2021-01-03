// Prop

class App extends React.Component {
    render() {
    	playBtnHit = false;
        return (
            <div>
                 <InputBar/>
                 <Board playBtnHitFromParent={playBtnHit}/>
            </div>
        );
    }
}

// child
class Board extends Component {
	isPlayBtnHit() {
			if this.props.playBtnHitFromParent = true
			then
				reset board
		})
	}

	render() {
	  return ( 
	  	<table className="center">
	  		table
		</table>
	  );
	}
}