// Add to App (Child to parent)
class App extends React.Component {
    myCallback = (messageGameOver) => { 
        code command to add message into HTML
    },
    render() {
        return (
            <div>
                 <ToDoItem callbackFromParent={this.myCallback}/>
            </div>
        );
    }
}

// And add as a prop in App


// Add to Board
class Board extends React.Component{
    someFn = () => {
        let listInfo = "xxxxxxx";
        this.props.callbackFromParent(listInfo);
    },
    render() {
        [...]
    }
};

// Add to App (Parent to Child)
class App extends React.Component {
    render() {
        let listName = "xxxxxxx";             
        return (
            <div>
                 <InputBar/>
                 <ToDoList listNameFromParent={listName}/>
            </div>
        );
    }
}