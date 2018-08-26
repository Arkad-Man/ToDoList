import React, {Component} from 'react';

class Footer extends Component {

  eventTasksFilter = (event) => {
    this.props.tasksFilter(event.target.dataset.value);
  }

  render() {
    let {filter} = this.props;

    return (
      <footer className="App-footer">
        <button className={filter === 'active'
                ? "App-footer-btn active"
                : "App-footer-btn"}
                data-value="active"
                onClick={this.eventTasksFilter}>Active</button>

        <button className={filter === 'all'
                ? "App-footer-btn active"
                : "App-footer-btn"}
                data-value="all"
                onClick={this.eventTasksFilter}>All</button>

        <button className={filter === 'complited'
                ? "App-footer-btn active"
                : "App-footer-btn"}
                data-value="complited"
                onClick={this.eventTasksFilter}>Complited</button>

      </footer>
    );
  }
}

export default Footer;
