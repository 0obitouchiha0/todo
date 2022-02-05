import './Tasks.scss';
import AddTask from './AddTask/AddTask';
import TasksTitle from './TasksTitle/TasksTitle';
import TasksList from './TasksList/TasksList';
import db from '../../assets/db.json'

const Tasks = (props) => {

  let maxId = 0
  if(db.tasks.length) maxId = db.tasks[db.tasks.length - 1].id
  return (
    <div className="todo__tasks">
      <TasksTitle
        dispatch={props.dispatch}
        key={props.list.id}
        color={props.list.color.hex} 
        title={props.list.name}
        listId={props.list.id}
        editTitle={props.editTitle}
      />
      <TasksList
        dispatch={props.dispatch}
        color={props.list.color.hex} 
        list={props.list}
        deleteTask={props.deleteTask}
        editTask={props.editTask}
      />
      <AddTask
        maxId={maxId}
        dispatch={props.dispatch}
        list={props.list}
        addTask={props.addTask}
      />
    </div>
    

  )
}

export default Tasks;