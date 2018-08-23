import React, {Component} from 'react';

class Header extends Component {
  constructor(props) {
    super(props);

    this.taskIndex = 1;

    this.state = {
      inpVal: ''
    }
  }

  onChange = (event) => {
    this.setState({inpVal: event.target.value});
  }

  createTask = (event) => {
    event.preventDefault();
    if (this.state.inpVal === '') return;
    const protoTasks = {
      title: this.state.inpVal,
      done: false,
      id: this.taskIndex
    };
    this.state.inpVal = '';
    this.props.createTask(protoTasks);
    this.taskIndex++;
  }

  render() {
    return (<header className="App-header">
      <h1 className="App-header__title">ToDo List</h1>
      <form onSubmit={this.createTask.bind(this)} className="App-header__form">
        <input value={this.state.inpVal} onChange={this.onChange} className="App-content__input" placeholder="Enter a new task"/>
        <button className="App-content__button" type="submit">Add Task</button>
      </form>
    </header>);
  }

}

export default Header;
