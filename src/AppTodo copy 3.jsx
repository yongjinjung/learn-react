import { useState, useReducer } from 'react';
import './App.css';
import TodoList from './components/todo/TodoList';
import todoReducer from './reducer/todo-reducer.js';
import { useImmerReducer } from 'use-immer';

function AppTodo(props) {
  const [todoText, setTodoText] = useState('');
  const [todos, dispatch] = useImmerReducer(todoReducer, [
    { id: 0, text: 'HTML&CSS 공부하기', done: false },
    { id: 1, text: '자바스크립트 공부하기', done: false },
  ]);

  const [insertAt, setInsertAt] = useState(todos.length - 1);

  //
  const handleTodoTextChange = e => {
    setTodoText(e.target.value);
  };

  //1] added
  const handleAddTodo = e => {
    const nextId = crypto.randomUUID();
    dispatch({ type: 'added', nextId, todoText });
    setTodoText('');
  };

  //2] added_index
  const handleInsertTodo = e => {
    const nextId = crypto.randomUUID();
    dispatch({ type: 'added_index', insertAt, nextId, todoText });
  };

  //3] deleted
  const handleDeleteTodo = deleteId => {
    dispatch({ type: 'deleted', deleteId });
  };

  //
  const handleKeyDown = e => {
    console.log(e.nativeEvent.isComposing);
    if (e.key === 'Enter' && e.nativeEvent.isComposing === false) {
      handleAddTodo();
    }
  };

  //4] done
  const handleTodoDone = (todoId, done) => {
    dispatch({ type: 'done', todoId, done });
  };

  //5] reverse
  const handleReverseTodo = e => {
    dispatch({ type: 'reverse' });
  };

  return (
    <div>
      <h2>할일목록</h2>
      <div>
        <input
          type="text"
          value={todoText}
          onChange={handleTodoTextChange}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleAddTodo}>추가</button>
      </div>
      <div>
        <select value={insertAt} onChange={e => setInsertAt(e.target.value)}>
          {todos.map((item, index) => {
            return (
              <option value={index} key={item.id}>
                {index} 번째
              </option>
            );
          })}
        </select>
        <button onClick={handleInsertTodo}>추가</button>
      </div>
      <div>Preview : {todoText}</div>
      <button onClick={handleReverseTodo}>Reverse</button>
      <TodoList
        todos={todos}
        onDeleteTodo={handleDeleteTodo}
        onToggleTodo={handleTodoDone}
      />
    </div>
  );
}

export default AppTodo;
