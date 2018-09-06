import React from 'react';
import NewTask from './ToDoNewTask';

const List = (props) => (
  <ul className='appList'>

    {props.tasks.map((task, index) =>
      <NewTask task={task}
               compliteTaskCallback={props.compliteTask}
               deleteTaskCallback={props.deleteTask}
               key={task.id}/>)
    }

  </ul>
);

export default List;
