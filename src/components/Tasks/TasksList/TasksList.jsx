import './TasksList.scss';
import TasksItem from './TasksItem';
import {NavLink} from 'react-router-dom'

const TasksList = (props) => {
  console.log(props)
  return (
    <ul className="tasks__container">
      <div style={{color: props.color, marginBottom: '15px'}}>Всего задач: {props.list.tasks.length}</div>
      {props.list.tasks.map(task => (
        <TasksItem 
          dispatch={props.dispatch}
          key={task.id} 
          task={task}
          list={props.list}
          deleteTask={props.deleteTask}
          editTask={props.editTask}
        />
      ))}
    </ul>
  )
}

export default TasksList;