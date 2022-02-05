import './App.css';
import Lists from './components/Lists/Lists';
import Tasks from './components/Tasks/Tasks';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AllTasks from './components/Tasks/AllTasks/AllTasks';
import { useSelector, useDispatch } from 'react-redux';

import { setLists, addList, deleteList, editList, addTask, deleteTask, editTask } from './redux/reducers/lists'

function App() {

  const dispatch = useDispatch()
  const location = useLocation()
  const [listActive, setListActive] = useState(+location.pathname.slice(1));

  const lists = useSelector(state => state.lists)
  useEffect(() => {
    dispatch(setLists())
  }, [listActive])

  return (
    <div className="todo">
      <Lists
        dispatch={dispatch}
        lists={lists}
        addList={addList}
        deleteList={deleteList}
        listActive={listActive}
        setListActive={setListActive}
      />
      {lists[listActive - 1] && listActive != -1 &&
        <Tasks
          dispatch={dispatch}
          editTitle={editList}
          list={lists[listActive - 1]}
          addTask={addTask}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      }
      {lists && listActive == -1 &&
        <AllTasks
          dispatch={dispatch}
          lists={lists}
          editTask={editTask}
          deleteTask={deleteTask}
          editTitle={editList}
        />
      }

    </div>
  );
}

export default App;
