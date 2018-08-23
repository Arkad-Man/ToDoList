import React, {Component} from 'react';
import List from './List';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.taskIndex = 1;

    this.state = {
      inpVal: '',
      tasks: [
        {
          title: 'Hello World!',
          done: false,
          id: 0
        }
      ]
    };

  }

  onChange = (event) => {
    this.setState({inpVal: event.target.value});
  }

  onSubmit = (event) => {
    event.preventDefault();
    if(this.state.inpVal === '') return;
    this.setState({
      inpVal: '',
      tasks: [
        ...this.state.tasks, {
          title: this.state.inpVal,
          done: false,
          id: this.taskIndex
        }
      ]
    });
    this.taskIndex++;
  }

  delTask = (taskID) => {
    let reTasks = this.state.tasks.filter((item) => {
      return item.id !== taskID;
    });
    this.setState({tasks: reTasks});
  }

  render() {
    return (<div className="App">
      <header className="App-header">
        <h1 className="App-header__title">ToDo List</h1>
        <form onSubmit={this.onSubmit} className="App-header__content">
          <input value={this.state.inpVal} onChange={this.onChange} className="App-content__input" placeholder="Enter a new task"/>
          <button className="App-content__button" type="submit">Add Task</button>
        </form>
      </header>

      <List tasks={this.state.tasks} delTask={this.delTask}/>

      <footer className="App-footer"></footer>
    </div>);
  }
}

export default App;
