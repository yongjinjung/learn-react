// import './App.css';
import TodoList from './components/todo/TodoList';
import AddTodo from './components/todo/AddTodo.jsx';

import { TodoProvider } from './context/TodoContext.jsx';

function AppTodo(props) {
  return (
    <TodoProvider>
      <h2>할일목록</h2>
      <AddTodo />
      <TodoList />
    </TodoProvider>
  );
}

export default AppTodo;
