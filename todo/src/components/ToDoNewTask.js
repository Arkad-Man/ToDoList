import React, {Component} from 'react';

class NewTask extends Component {
  constructor(props) {
    super(props);

    this.checkTask = props.compliteTaskCallback;
    this.removeTask = props.deleteTaskCallback;
  }

  compliteTask(event) {
    let complTask = {
      ...this.props.task
    };
    complTask.done = !complTask.done;
    this.checkTask(complTask);
  }

  deleteTask(event) {
    this.removeTask(this.props.task.id);
    console.log(this.props.task.id);
  }

  render() {
    return (<li onClick={this.compliteTask.bind(this)} className={this.props.task.done
        ? 'newTask done'
        : 'newTask'}>{this.props.task.title}
      <span onClick={this.deleteTask.bind(this)} className="newTask-close__btn">&times;</span>
    </li>);
  }
}

export default NewTask;


// this.state = {
//   newTask: props.task
// };

// compliteTask(event) {
//   let complTask = {
//     ...this.props.task,
//     done: !this.props.task.done
//   };
//   this.checkTask(complTask);
// }

// render() {
//   return (<li onClick={this.compliteTask.bind(this)} checked={this.state.newTask.done} className={this.state.newTask.done
//       ? 'newTask done'
//       : 'newTask'}>{this.state.newTask.title}
//     <span onClick={this.deleteTask.bind(this)} className="newTask-close__btn">&times;</span>
//   </li>);
// }
