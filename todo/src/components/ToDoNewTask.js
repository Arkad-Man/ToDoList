import React, {Component} from 'react';

class NewTask extends Component {

  compliteTask = (event) => {
    let complTask = {
      ...this.props.task
    };
    complTask.done = !complTask.done;
    this.props.compliteTask(complTask);
  }

  deleteTask = (event) => {
    this.props.deleteTask(this.props.task.id);
  }

  render() {
    return (
      <li className={this.props.task.done
          ? 'appList__newTask done'
          : 'appList__newTask'}>

            <span className={this.props.task.done
                  ? 'newTask__checkSumbol done'
                  : 'newTask__checkSumbol'}></span>

            <input className='newTask__checkArea'
                   type='checkbox'
                   onClick={this.compliteTask}/>

            {this.props.task.title}

            <span className='newTask__btn_close'
                  onClick={this.deleteTask}>&times;</span>

      </li>
    );
  }
}

export default NewTask;
