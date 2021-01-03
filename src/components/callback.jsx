// Add to App (Child to parent)
// Parent
class App extends React.Component {
    // setup state so that this field can be used through the component
    constructor(props) {
        super(props);
        this.state = {
            mainMessage: null
        };    
    },

    myCallback = (dataMainMessage) => { 
        this.setState({mainMessage: dataMainMessage});
    },
    otherFtn = () => { 
        code command to add mainMessage into HTML  - you now have this.state.mainMessage
    },
    render() {
        return (
            <div>
                 <Board callbackFromParent={this.myCallback}/>
            </div>
        );
    }
}

// Child
class Board extends React.Component{
    isGameOver = () => {
        let mainMessage = " ";
        if (totalCount > 54) {
            mainMessage = "Game Over";
        }
        else {
            mainMessage = "Roll Again";
        }
        this.props.callbackFromParent(mainMessage);
    },
    render() {
        [...]
    }
};