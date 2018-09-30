import React, {Component} from 'react';
import idGenerator from './idGenerator';

class Header extends Component {

  inputMaker = (event) => {
    this.props.inputTextReceiver(event.target.value);
  }

  createTask = (event) => {
    event.preventDefault();
    const protoTask = {
      title: this.props.inputVal,
      done: false,
      id: idGenerator()
    };
    this.props.createTask(protoTask);
  }

  render() {
    return (
      <header className='appHeader'>

        <h1 className='appHeader__headerTitle'>ToDo List</h1>

        <form onSubmit={this.createTask}
              className='appHeader__headerForm'>

          <input value={this.props.inputVal}
                 onChange={this.inputMaker}
                 className='headerForm__input'
                 placeholder='Enter a new task'/>

          <button className='headerForm__btn_add' type='submit'>Add Task</button>

        </form>

      </header>
    );
  }

}

export default Header;
