import React, { useState} from 'react';
import { useTodosDispatch } from '../../context/TodoContext';

function AddTodo(props) {

  const [todoText, setTodoText] = useState('');
  const dispatch = useTodosDispatch();
  
  const handleAddTodo = (text) => {
    dispatch({
      type: 'added', 
      nextId: crypto.randomUUID(), 
      todoText: text
    });
  }

  return (
    <div>
    <input
      type="text" 
      value={todoText} 
      onChange={(e) => setTodoText(e.target.value)} 
      onKeyDown={(e) => {
        if(e.key === 'Enter' && e.nativeEvent.isComposing === false){
          handleAddTodo(e.target.value);
          setTodoText('');
        }
      }}/>
    <button onClick={() => {
      //저장
      handleAddTodo(todoText);
      setTodoText('')
    }}>추가</button>
    </div>
  );
}

export default AddTodo;