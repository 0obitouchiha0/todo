import './AddTask.scss';
import { useState } from 'react';
import addSvg from '../../../assets/images/add.svg';

const AddTask = props => {
  let [inputValue, setInputValue] = useState('');
  let [state, setState] = useState(false)
  return (
    <div className="add-task">
      {!state &&
        <button 
          className="open-btn"
          onClick={() => {
            setState(true)
          }}
        >
          <img src={addSvg} alt="add" />
          <span>Новая задача</span>
        </button>
      }
      {state && 
        <>
          <input
            placeholder="Текст задачи"
            type="text"
            value={inputValue}
            onChange={e => {
              setInputValue(e.target.value)
            }}
          />
          <div className="btn-container">
            <button
              className="add-btn" 
              onClick={() => {
                props.dispatch(props.addTask({
                  listId: props.list.id, 
                  text: inputValue, 
                  id: props.maxId + 1,
                  completed: false
                }))
                setState(false)
                setInputValue('')
              }}
            >Добавить задачу</button>
            <button
              className="close-btn" 
              onClick={() => {
                setState(false)
              }}
            >Отмена</button>
          </div>
        </>
      }
      </div>
  )
}

export default AddTask;