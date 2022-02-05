import {useState} from 'react';
import editSvg from '../../../assets/images/edit.svg';
import removeSvg from '../../../assets/images/remove.svg';

const TasksItem = props => {
  let [inputValue, setInputValue] = useState(props.task.text)
  return (
    <>  
      {props.list && 
      <li>
      <input
        className="checkbox"
        id={props.task.id} 
        type="checkbox"
        checked={props.task.completed}
        onChange={e => {
          props.dispatch(props.editTask({
            listId: props.list.id, 
            taskId: props.task.id, 
            text: inputValue,
            completed: e.target.checked
          }))
        }}
        />
        <label htmlFor={props.task.id}>
          <svg
            width="11"
            height="8"
            viewBox="0 0 11 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001"
              stroke="#fff"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </label>
        <input 
          type="text" 
          value={inputValue}
          onChange={e => {
            setInputValue(e.target.value);
          }}
        />
        <img 
          onClick={() => {props.dispatch(props.editTask({
            listId: props.list.id, 
            taskId: props.task.id, 
            text: inputValue,
            completed: props.task.completed
          }))}}
          className="edit" 
          src={editSvg} 
          alt="edit" 
        />
        <img
          onClick={() => {props.dispatch(props.deleteTask({
            listId: props.list.id - 1, 
            taskId: props.task.id
          }))}}
          className="remove" 
          src={removeSvg} 
          alt="remove" 
        />
      </li>
      }
    </>  
  )
}

export default TasksItem