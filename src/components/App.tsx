import React, {Component} from 'react';
import {ToDoAdd} from "./ToDoAdd";
import {ToDoList} from "./ToDoList";

class App extends Component<any,any>{
    render() {
        return (
            <div>
                <h1>My Tasks</h1>
                <hr/>
                <ToDoAdd/>
                <ToDoList/>
            </div>
        );
    }
}
export default App;
