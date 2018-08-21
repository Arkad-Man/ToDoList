import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
      super();

      this.state = {
        tasks: [
          {
            title: 'Hello World',
            done: false
          }
        ]
      };

    }

    createNewTask(event) {
      if(event.key === 'Enter') {
        this.setState({
          tasks: [...this.state.tasks, {title: event.currentTarget.value, done: false}]
        });
        event.currentTarget.value = '';
      }
    }

    delTask(task, event) {
      this.setState({
        tasks: this.state.tasks.filter((item) => {
          return item !== task;
        })
      });
    }

    toggleDone(task, event) {
      task.done = !task.done;
      this.setState({
        tasks: this.state.tasks
      });
    }

    render() {
      return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-header__title">ToDo List</h1>
            <div className="App-header__content">
              <input onKeyPress={this.createNewTask.bind(this)} className="App-content__input" placeholder="Enter a new task" />
              <button className="App-content__button">Add Task</button>
            </div>
          </header>

          <ul>
            {
                this.state.tasks.map((task) => {
                  return <li className={task.done ? 'newTask done' : 'newTask'} >
                    <input onClick={this.toggleDone.bind(this, task)} type="checkbox" />
                    {task.title}
                    <span onClick={this.delTask.bind(this, task)} className="close-btn">x</span></li>
                })
            }
          </ul>

          <footer className="App-footer">

          </footer>
        </div>
      );
    }
}

export default App;
