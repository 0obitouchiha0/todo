import './AddList.scss';
import '../Lists.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import addSvg from '../../../assets/images/add.svg';
import closeSvg from '../../../assets/images/close.svg';

const AddList = (props) => {
  const [inputValue, setInputValue] = useState('');
  const [selectedColor, setSelectedColor] = useState({hex: '#C9D1D3', id: 1, name: 'grey'});
  const [colors, setColors] = useState([]);
  let [state, setState] = useState(false)

  useEffect(() => {
    axios
      .get('http://localhost:3000/colors')
      .then(({data}) => {
        setColors(data)
      })
  }, [])

  return ( 
    <>
    <button 
      className="open-btn"
      onClick={() => {setState(true)}}
    >
      <img src={addSvg} alt="add" />
      <span>Добавить задачу</span>
    </button>
    {state && 
      <div className="add-list">
        <input
          placeholder="Название папки"
          type="text"
          value={inputValue}
          onChange={e => {setInputValue(e.target.value)}}
        />
        <div className="colors__container">
          {colors && colors.map(color => {
            return (
              <div 
                key={color.id} 
                className="badge" 
                style={{backgroundColor: color.hex}}
                onClick={() => {setSelectedColor(color)}}
              ></div>
            )
          })}
        </div>
        <button
        className="add-btn"
          onClick={() => {
            if(inputValue === '') return
            setState(false)
            props.dispatch(props.addList(
              {
                id: props.lists.length + 1, 
                name: inputValue, 
                colorId: selectedColor.id, 
                tasks: [], 
                color: selectedColor
              }
            ))
            setInputValue('')
          }}
        >Добавить</button>
        <button 
          className="close-btn"
          onClick={() => {setState(false)}}
        >
          <img src={closeSvg} alt="close" />
        </button>
      </div>
    }
    </>
  )
}

export default AddList;