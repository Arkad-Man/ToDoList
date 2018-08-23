import React, {Component} from 'react';
import Header from './ToDoHeader';
import List from './ToDoList';
import Footer from './ToDoFooter';
import './App.css';

class ToDo extends Component {
  constructor(props) {
    super(props);

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

  createTask = (task) => {
    this.setState({
      tasks: [...this.state.tasks, task]
    });
  }

  deleteTask = (taskID) => {
    let reTasks = this.state.tasks.filter((item) => {
      return item.id !== taskID;
    });
    this.setState({tasks: reTasks});
  }

  render() {
    return (<div className="ToDo">

      <Header createTask={this.createTask.bind(this)} />
      <List tasks={this.state.tasks} deleteTask={this.deleteTask}/>
      <Footer />

    </div>);
  }
}

export default ToDo;
