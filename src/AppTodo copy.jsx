import { useState } from 'react';
import './App.css';
import TodoList from './components/todo/TodoList';

function AppTodo(props) {
  const [todoText, setTodoText] = useState('');
  const [todos, setTodos] = useState([
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
    setTodos([...todos, { id: nextId, text: todoText, done: false }]);
    setTodoText('');
  };

  //2] added_index
  const handleInsertTodo = e => {
    const nextId = crypto.randomUUID();
    const newTodos = [
      ...todos.slice(0, insertAt),
      { id: nextId, text: todoText, done: false },
      ...todos.slice(insertAt),
    ];
    setTodos(newTodos);

    // let insertTodos = [...todos];
    // insertTodos.splice(insertAt, 0, {id: nextId, text: todoText, done: false})
    // setTodos(insertTodos);
  };

  //3] deleted
  const handleDeleteTodo = deleteId => {
    const newTodos = todos.filter(item => item.id !== deleteId);
    setTodos(newTodos);
  };

  //
  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  //4] done
  const handleTodoDone = (todoId, done) => {
    const newTodos = todos.map(item => {
      if (item.id === todoId) {
        return { ...item, done };
      }
      return item;
    });
    setTodos(newTodos);
  };

  //5] reverse
  const handleReverseTodo = e => {
    const nextTodos = [...todos];
    setTodos(nextTodos.reverse());
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
