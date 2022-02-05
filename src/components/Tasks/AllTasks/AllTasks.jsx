import TasksItem from '../TasksList/TasksItem';
import TasksTitle from '../TasksTitle/TasksTitle';
import './AllTasks.scss';
import '../TasksList/TasksList.scss'

const AllTasks = (props) => {
  return (
    <div className="todo__tasks">
      {props.lists.map(list => {
        if(list.tasks.length === 0) return null
        return <div className="all-tasks" key={list.id}>
          <TasksTitle 
            title={list.name} 
            color={list.color.hex} 
            isAll={true} 
            editTitle={props.editTitle}
            listId={list.id}
          />
          <ul className="tasks__container">
            {list.tasks.map(task => (
              <TasksItem 
                key={task.id} 
                task={task}
                list={list}
                editTask={props.editTask}
                deleteTask={props.deleteTask}
              />
            ))}
          </ul>
        </div>
      })}
    </div>
  )
}

export default AllTasks;