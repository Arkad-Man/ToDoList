import React from 'react';
import NewTask from './ToDoNewTask';

const List = props => (<ul className="taskList">
  {
    props.tasks.map((task, index) =>
      <NewTask task={task} delTaskCallback={props.deleteTask.bind(this)} key={task.id}/>)
  }
</ul>);

export default List;
