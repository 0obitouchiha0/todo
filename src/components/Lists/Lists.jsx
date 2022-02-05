import './Lists.scss';
import listSvg from '../../assets/images/list.svg';
import removeSvg from '../../assets/images/remove.svg';
import AddList from './AddList/AddList';
import {NavLink} from 'react-router-dom';

const Lists = (props) => {
  let lists = [];
  if(props.lists) {
    lists = props.lists.map(list => {
      return (
        <NavLink key={list.id} to={`/${list.id}`}>
          <li 
          className={list.id === props.listActive ? 'active' : ''}
          onClick={() => {
            props.setListActive(list.id)
          }}
        >
          {list.color 
          ? <div 
            className="badge" 
            style={{backgroundColor: list.color.hex}}
          ></div>
          : ''}
          {list.name}
          <img 
            src={removeSvg} 
            alt="remove"
            onClick={() => {props.dispatch(props.deleteList(list.id))}}
          />
        </li>
        </NavLink>
      )
    })
  }


  return (
    <div className="lists__container">
      <ul>
        <NavLink to="/-1">
          <li 
            key={'all'} 
            onClick={() => {
              props.setListActive(-1)
            }}
            className={props.listActive === -1 ? 'active' : ''}
          >
            <img src={listSvg} alt="list" />
            Все задачи
          </li>
        </NavLink>
        {lists}
      </ul>
      <AddList lists={props.lists} addList={props.addList} dispatch={props.dispatch}/>
    </div>
  )
}

export default Lists;