import React, {Component} from 'react';

class Footer extends Component {

  filterTasksState = (event) => {
    this.props.filterTasksState(event.target.dataset.value);
  }

  render() {
    let {filter} = this.props;

    return (
      <footer className='appFooter'>

        <button className={filter === 'active'
                ? 'appFooter__btn_state active'
                : 'appFooter__btn_state'}
                data-value='active'
                onClick={this.filterTasksState}>Active</button>

        <button className={filter === 'all'
                ? 'appFooter__btn_state active'
                : 'appFooter__btn_state'}
                data-value='all'
                onClick={this.filterTasksState}>All</button>

        <button className={filter === 'complited'
                ? 'appFooter__btn_state active'
                : 'appFooter__btn_state'}
                data-value='complited'
                onClick={this.filterTasksState}>Complited</button>

      </footer>
    );
  }
}

export default Footer;
