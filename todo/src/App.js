import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-header__title">ToDo List</h1>
          <div className="App-header__content">
            <input className="App-content__input" placeholder="Enter a new task" />
            <button className="App-content__button">Add Task</button>
          </div>
        </header>
        <footer className="App-footer">
        
        </footer>
      </div>
    );
  }
}

export default App;
