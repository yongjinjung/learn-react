import { useState } from 'react';
import './App.css';
import TodoList from './components/todo/TodoList';
function AppTodo(props) {

  const [todoText, setTodoText] = useState('');
  const [todos, setTodos] = useState([
    {id: 0, text: 'HTML&CSS 공부하기', done: false},
    {id: 1, text: '자바스크립트 공부하기', done: false},
  ]);

  const handleTodoTextChange = (e) =>{
    setTodoText(e.target.value);
  }

  const handleAddTodo = (e) =>{
    const nextId = crypto.randomUUID();

    setTodos([
      ...todos,
      {id: nextId, text: todoText}
    ]);
    setTodoText('');


  }

  const handleDeleteTodo = (deleteId) => {
    const newTodos = todos.filter(item => item.id !== deleteId);

    setTodos(newTodos);
  } 

  const handleKeyDown = (e) =>{
    if(e.key === 'Enter'){
      handleAddTodo();
    }
  }

  const handleTodoDone = (todoId, done) => {
      const newTodos = todos.map((item) => {
        if(item.id === todoId){
          return {...item, done}
        }
        
        return item;
        
      });

      setTodos(newTodos);
  }


  return (
    <div>
      <h2>할일목록</h2>
      <input type="text" value={todoText} onChange={handleTodoTextChange} onKeyDown={handleKeyDown}/>
      <button onClick={handleAddTodo}>추가</button>
      <div>Preview : {todoText}</div>
      <TodoList 
        todos={todos}
        onDeleteTodo={handleDeleteTodo}
        onToggleTodo={handleTodoDone}
        />
    </div>
  );
}

export default AppTodo;