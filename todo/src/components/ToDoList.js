import React from 'react';
import NewTask from './ToDoNewTask';

const List = (props) => (
  <ul className='appList'>

    {props.tasks.map((task, index) =>
      <NewTask task={task}
               compliteTask={props.compliteTask}
               deleteTask={props.deleteTask}
               key={task.id}/>)
    }

  </ul>
);

export default List;
