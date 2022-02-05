import './TasksTitle.scss';
import editSvg from '../../../assets/images/edit.svg'
import {useState} from 'react';

const TasksTitle = (props) => {
  let [inputValue, setInputValue] = useState(props.title)
  return (
    <div className="title__container">
      <input 
        style={{color: props.color}} 
        value={inputValue}
        onChange={e => {
          setInputValue(e.target.value);
        }}
      />
      <img 
        src={editSvg} 
        alt="edit"
        onClick={() => {
          props.dispatch(props.editTitle({listId: props.listId, name: inputValue}))
        }}
      />
    </div>
  )
}

export default TasksTitle;