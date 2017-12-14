import React, {Component} from 'react';
import './App.css';
import Todo from './Components/Todo';
import AddTodo from './Components/AddTodo';


class App extends Component {

  openModal(item) {
    this.setState({
      modalOpened: !this.state.modalOpened
    });}

  render() {
    console.log(this.props)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Arrange your todos!</h1>
        </header>
        <p>{this.props.count}</p>

        <AddTodo/>
        <Todo/>

      </div>
    );
  }

}


export default App
