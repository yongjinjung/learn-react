
import { useTodosDispatch } from '../../context/TodoContext'
function TodoItem({item}) {

  const dispatch = useTodosDispatch();

  //3] delete
  const handleDeleteTodo = (deleteId) => {
    dispatch({ type: 'deleted', deleteId })
  }

  //4] 'done'
  const handleToggleTodo = (id, done) => {
    dispatch({ type: 'done',todoId : id, done: done})
  }

  return (
    <label>
      <input type="checkbox" defaultChecked={item.done} onChange={(e) => 
      handleToggleTodo(item.id, e.target.checked)
      }/>
      <span>{item.done ? (<del>{item.text}</del>) : item.text}</span>
      <button onClick={()=> handleDeleteTodo(item.id)}>x</button>
    </label>
  );
}

export default TodoItem;