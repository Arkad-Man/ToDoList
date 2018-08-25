import React, {Component} from 'react';

class Footer extends Component {
  constructor(props) {
    super();
  }

  taskFilter(event) {
    this.props.tasksFilter(event.target.dataset.value);
  }

  render() {
    let {filter, tasks} = this.props;
    return (<footer className="App-footer">
      <button className={filter === 'active'
          ? "App-footer-btn active"
          : "App-footer-btn"} data-value="active" onClick={this.taskFilter.bind(this)}>Active</button>
      <button className={filter === 'all'
          ? "App-footer-btn active"
          : "App-footer-btn"} data-value="all" onClick={this.taskFilter.bind(this)}>All</button>
      <button className={filter === 'complited'
          ? "App-footer-btn active"
          : "App-footer-btn"} data-value="complited" onClick={this.taskFilter.bind(this)}>Complited</button>
    </footer>);
  }
}

export default Footer;
