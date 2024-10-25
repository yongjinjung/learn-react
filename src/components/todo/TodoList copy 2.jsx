
import TodoItem from './TodoItem'
import {useTodos, useTodosDispatch } from '../../context/TodoContext';
import { useState, 
  useEffect,
  Fragment} from 'react';
function TodoList(props) {
  
  //const todos = useContext(TodoContext);
  const [isDoneShow, setIsDoneShow] = useState(false)
  const todos =  useTodos();
  const dispatch = useTodosDispatch();

console.log(isDoneShow);

  return (
    <>
    <div>
      <input id="isDone" type="checkBox" defaultChecked={isDoneShow} onChange={(e => setIsDoneShow(e.target.checked))}/>
      <label htmlFor="isDone">완료된 항목 보기({todos.filter((item) => item.done).length}/{todos.length})</label>
    </div>
    <ul>
      {todos.map( item =>{
        
        if(isDoneShow){
          console.log('1');
          
          return (  <Fragment key={item.id}>   
                    { item.done &&
                      <li>
                        <TodoItem 
                          item={item} 
                          />
                      </li>
                    }
                      </Fragment>
                  )
        }else{
          console.log('2');
          return (
                      <li key={item.id}>
                        <TodoItem 
                          item={item} 
                          />
                      </li>
                  )

        }
    }
      
      )}
    </ul>
    </>
  );
}

export default TodoList;