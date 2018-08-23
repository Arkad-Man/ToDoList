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

// class List extends Component {
//   render() {
//     console.log('items', this.props.items);
//     return(
//     <ul>
//     {this.props.items.map((item, index) =>
//         <NewTask task={item} delTaskCallback={this.delTask.bind(this)} key={item.id}/>
//       )}
//     </ul>
//     );
//   }
// }



export default List;
