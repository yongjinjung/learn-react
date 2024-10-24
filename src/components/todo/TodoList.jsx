
import TodoItem from './TodoItem'
import {useTodos } from '../../context/TodoContext';
function TodoList(props) {
  
  //const todos = useContext(TodoContext);
  const todos =  useTodos();
  
  return (
    <ul>
      {todos.map( item => (
          <li key={item.id}>
            <TodoItem 
              item={item} />
          </li>
      ))}
    </ul>
  );
}

export default TodoList;