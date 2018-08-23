import React, {Component} from 'react';

class NewTask extends Component {

  constructor(props) {
    super(props);

    this.state = {
      newTask: props.task
    };

    this.deleteTask = props.delTaskCallback;

  }

  delTask(event) {
    this.deleteTask(this.state.newTask.id);
  }

  toggleDone(event) {
    let reNewTask = {
      ...this.state.newTask,
      done: !this.state.newTask.done
    };

    this.setState({newTask: reNewTask});
  }

  render() {
    return (<li onClick={this.toggleDone.bind(this)} checked={this.state.newTask.done} className={this.state.newTask.done
        ? 'newTask done'
        : 'newTask'}>{this.state.newTask.title}
      <span onClick={this.delTask.bind(this)} className="newTask-close__btn">&times;</span>
    </li>);
  }
}

export default NewTask;
