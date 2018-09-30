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

  filterTasksState = (filterVal) => {
    this.setState({filter: filterVal});
  };

  filteredTasks = () => {
    let filteredTasks = [];

    if (this.state.filter === 'all')
      filteredTasks = this.state.tasks;

    if (this.state.filter === 'active')
      filteredTasks = this.state.tasks.filter(task => !task.done);

    if (this.state.filter === 'complited')
      filteredTasks = this.state.tasks.filter(task => task.done);

    return filteredTasks;
  }

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
    let tasksFiltered = this.filteredTasks();

    return (
      <div className='ToDo'>

        <Header tasks={tasks}
                inputVal={this.state.inputVal}
                inputTextReceiver={this.inputTextReceiver}
                createTask={this.createTask}/>

        <List tasks={tasksFiltered}
              compliteTask={this.compliteTask}
              deleteTask={this.deleteTask}/>

        <Footer tasks={tasks}
                filter={filter}
                filterTasksState={this.filterTasksState}/>

      </div>
    );
  }
}

export default ToDo;
