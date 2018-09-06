import React, {Component} from 'react';
import Header from './ToDoHeader';
import List from './ToDoList';
import Footer from './ToDoFooter';
import './App.css';

class ToDo extends Component {
  constructor() {
    super();

    this.state = {
      tasks: JSON.parse(localStorage.getItem('Tasks')) || [],
      inputVal: '',
      filter: 'all'
    };
  }

  updateLocalStorage = (update) => {
    localStorage.setItem('Tasks', JSON.stringify(update));
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
      let updateTasks = [...this.state.tasks, task];
    this.setState({
      tasks: updateTasks,
      inputVal: ''
    });
    this.updateLocalStorage(updateTasks);
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
    this.updateLocalStorage(tasksIsDone);
  };

  deleteTask = (taskID) => {
    let removeTask = this.state.tasks.filter((item) => {
      return item.id !== taskID;
    });
    this.setState({tasks: removeTask});
    this.updateLocalStorage(removeTask);
  };

  render() {
    let {filter, tasks} = this.state;
    let filteredTasks = [];

    if (filter === 'all') filteredTasks = tasks;

    if (filter === 'active') filteredTasks = tasks.filter(task => !task.done);

    if (filter === 'complited') filteredTasks = tasks.filter(task => task.done);

    return (
      <div className='ToDo'>

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
