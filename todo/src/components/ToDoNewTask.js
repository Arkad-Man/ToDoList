import React, {Component} from 'react';

class NewTask extends Component {

  compliteTask = (event) => {
    let complTask = {
      ...this.props.task
    };
    complTask.done = !complTask.done;
    this.props.compliteTaskCallback(complTask);
  }

  deleteTask = (event) => {
    this.props.deleteTaskCallback(this.props.task.id);
  }

  render() {
    return (
      <li className={this.props.task.done
          ? 'newTask done'
          : 'newTask'}>

            <span className={this.props.task.done
                  ? 'taskCheckSumbol done'
                  : 'taskCheckSumbol'}></span>

            <input className="taskCheckArea"
                   type='checkbox'
                   onClick={this.compliteTask}/>

            {this.props.task.title}

            <span className="newTask-close__btn"
                  onClick={this.deleteTask}>&times;</span>

      </li>
    );
  }
}

export default NewTask;
