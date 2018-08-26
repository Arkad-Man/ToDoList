import React, {Component} from 'react';
import Header from './ToDoHeader';
import List from './ToDoList';
import Footer from './ToDoFooter';
import './App.css';

class ToDo extends Component {
  constructor() {
    super();

    this.state = {
      tasks: [
        {
          title: 'Hello World!',
          done: false,
          id: 0
        }
      ],
      inputVal: '',
      filter: 'all'
    };
  }

  inputTextReceiver = (inputText) => {
    this.setState({inputVal: inputText});
  }

  tasksFilter = (filterVal) => {
    this.setState({filter: filterVal});
  };

  createTask = (task) => {
    if (this.state.inputVal === '')
      return;
    this.setState({
      tasks: [...this.state.tasks, task],
      inputVal: ''
    });
  };

  compliteTask = (task) => {
    let tasksIsDone = [...this.state.tasks];
    tasksIsDone.forEach((taskDone) => {
      if (taskDone.id === task.id) {
        taskDone.done = task.done;
        return;
      }
    });
    this.setState({tasks: tasksIsDone});
  };

  deleteTask = (taskID) => {
    let removeTask = this.state.tasks.filter((item) => {
      return item.id !== taskID;
    });
    this.setState({tasks: removeTask});
  };

  render() {
    let {filter, tasks} = this.state;
    let filteredTasks = [];

    if (filter === 'all') filteredTasks = tasks;

    if (filter === 'active') filteredTasks = tasks.filter(task => !task.done);

    if (filter === 'complited') filteredTasks = tasks.filter(task => task.done);

    return (
      <div className="ToDo">

        <Header tasks={tasks}
                inputVal={this.state.inputVal}
                inputTextReceiver={this.inputTextReceiver}
                createTask={this.createTask}/>

        <List tasks={filteredTasks}
              compliteTask={this.compliteTask}
              deleteTask={this.deleteTask}/>

        <Footer tasks={tasks}
                filter={filter}
                tasksFilter={this.tasksFilter}/>

      </div>
    );
  }
}

export default ToDo;
