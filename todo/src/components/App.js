import React, {Component} from 'react';
import NewTask from './newTask';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.taskIndex = 1;

    this.state = {
      tasks: [
        {
          title: 'Hello World!',
          done: false,
          id: 0
        }
      ]
    };

  }

  createNewTask(event) {
    if (event.key === 'Enter') {
      this.setState({
        tasks: [
          ...this.state.tasks, {
            title: event.currentTarget.value,
            done: false,
            id: this.taskIndex
          }
        ]
      });
      event.currentTarget.value = '';
      this.taskIndex++;
    }
  }

  delTask(taskID) {
    let reTasks = this.state.tasks.filter((item) => {
      return item.id !== taskID;
    });
    this.setState({tasks: reTasks});
  }

  render() {
    return (<div className="App">
      <header className="App-header">
        <h1 className="App-header__title">ToDo List</h1>
        <div className="App-header__content">
          <input onKeyPress={this.createNewTask.bind(this)} className="App-content__input" placeholder="Enter a new task"/>
          <button className="App-content__button">Add Task</button>
        </div>
      </header>

      <ul className="taskList">
        {
          this.state.tasks.map((task) => {
            return <NewTask task={task} delTaskCallback={this.delTask.bind(this)} key={task.id}/>
          })
        }
      </ul>

      <footer className="App-footer"></footer>
    </div>);
  }
}

export default App;
