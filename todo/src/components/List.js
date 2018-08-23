import React from 'react';
import NewTask from './newTask';

const List = props => (
  <ul className="taskList">
    {
      props.tasks.map((task, index) =>
          <NewTask task={task} delTaskCallback={props.delTask.bind(this)} key={task.id}/>
        )
    }
  </ul>

);

export default List;
