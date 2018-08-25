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
      filter: 'all'
    };

  }

  tasksFilter = (filterVal) => {
    this.setState({filter: filterVal});
  };

  createTask = (task) => {
    this.setState({
      tasks: [
        ...this.state.tasks,
        task
      ]
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
    // debugger;
    let removeTask = this.state.tasks.filter((item) => {
      return item.id !== taskID;
    });

    // Прблема с setState! Если просто this.setState({tasks : removeTask}) то
    //не рендерится новое состояние!!!

    // console.log(removeTask);

    this.setState(() => this.setState({tasks: removeTask}));

    // console.log(this.state);
  };

  render() {
    let {filter, tasks} = this.state;
    let filteredTasks = [];

    if (filter === 'all')
      filteredTasks = tasks;
    if (filter === 'active')
      filteredTasks = tasks.filter(task => !task.done);
    if (filter === 'complited')
      filteredTasks = tasks.filter(task => task.done);

    console.log(filteredTasks);
    return (<div className="ToDo">

      <Header createTask={this.createTask}/>
      <List tasks={filteredTasks} compliteTask={this.compliteTask} deleteTask={this.deleteTask}/>
      <Footer tasks={tasks} filter={filter} tasksFilter={this.tasksFilter}/>

    </div>);
  }
}

export default ToDo;
