// Add to App (Child to parent)
// Parent
class App extends React.Component {
    // setup state so that this field can be used through the component
    constructor(props) {
        super(props);
        this.state = {
            message: null
        };    
    },

    myCallback = (dataMainMessage) => { 
        this.setState({mainMessage: dataMainMessage});
    },
    otherFtn = () => { 
        code command to add mainMessage into HTML  - you now have this.state.message
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
    this.props.callbackFromParent(message);
    },
    render() {
        [...]
    }
};