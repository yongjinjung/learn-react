
import TodoItem from './TodoItem'
import {useTodos, useTodosDispatch } from '../../context/TodoContext';
import { useState, 
  useEffect,
  Fragment,
  useMemo} from 'react';
function TodoList(props) {
  
  //const todos = useContext(TodoContext);
  const [isDoneShow, setIsDoneShow] = useState(false)
  const todos =  useTodos();
  const dispatch = useTodosDispatch();


  const getFilteredTodos = () => {
    if( !isDoneShow ){
      return todos;
    }
    return todos.filter((todo) => todo.done);
  }

  const filteredTodos = getFilteredTodos();

  const getStatsCount = () => {
    console.log('getStatsCount 함수 실행!');
    
    const totalCount = todos.length;
    const doneCount = todos.filter((item) => item.done).length;

    return {
      totalCount,
      doneCount
    }
  }
  const {totalCount, doneCount} = useMemo(() => getStatsCount() ,[todos]);
  
  return (
    <>
    <div>
      <input id="isDone" type="checkBox" defaultChecked={isDoneShow} onChange={(e => setIsDoneShow(e.target.checked))}/>
      <label htmlFor="isDone">완료된 항목 보기({doneCount}/{totalCount})</label>
    </div>
    <ul>
      {filteredTodos.map( item =>
                      <li key={item.id}>
                        <TodoItem 
                          item={item} 
                          />
                      </li>
      )}
    </ul>
    </>
  );
}

export default TodoList;