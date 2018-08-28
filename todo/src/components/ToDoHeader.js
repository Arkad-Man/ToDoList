import React, {Component} from 'react';

class Header extends Component {
  constructor(props) {
    super();
  }

  inputMaker = (event) => {
    this.props.inputTextReceiver(event.target.value);
  }

  createTask = (event) => {
    event.preventDefault();
    const protoTask = {
      title: this.props.inputVal,
      done: false,
      id: Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
    };
    this.props.createTask(protoTask);
  }

  render() {
    return (
      <header className="App-header">

        <h1 className="App-header__title">ToDo List</h1>

        <form onSubmit={this.createTask}
              className="App-header__form">

          <input value={this.props.inputVal}
                 onChange={this.inputMaker}
                 className="App-content__input"
                 placeholder="Enter a new task"/>

          <button className="App-content__button" type="submit">Add Task</button>

        </form>
      </header>
    );
  }

}

export default Header;
