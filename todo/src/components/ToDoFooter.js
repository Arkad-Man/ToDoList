import React, {Component} from 'react';

class Footer extends Component {

  eventTasksFilter = (event) => {
    this.props.tasksFilter(event.target.dataset.value);
  }

  render() {
    let {filter} = this.props;

    return (
      <footer className='appFooter'>
      
        <button className={filter === 'active'
                ? 'appFooter__btn_state active'
                : 'appFooter__btn_state'}
                data-value='active'
                onClick={this.eventTasksFilter}>Active</button>

        <button className={filter === 'all'
                ? 'appFooter__btn_state active'
                : 'appFooter__btn_state'}
                data-value='all'
                onClick={this.eventTasksFilter}>All</button>

        <button className={filter === 'complited'
                ? 'appFooter__btn_state active'
                : 'appFooter__btn_state'}
                data-value='complited'
                onClick={this.eventTasksFilter}>Complited</button>

      </footer>
    );
  }
}

export default Footer;
