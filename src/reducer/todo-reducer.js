export default function todoReducer(draft, action){

  //type
  switch(action.type){
    case 'added' : {
      const {nextId, todoText} = action;
      draft.push({id: nextId, text: todoText, done: false});
      break;
    }
    case 'added_index' : {
      const {insertAt, nextId, todoText} = action;
      draft.splice(insertAt, 0, {id: nextId, text: todoText, done: false});
      break;
    }
    case 'deleted' : {
      const {deleteId} = action;
      return draft.filter(item => item.id !== deleteId);
    }
    case 'done' : {
      const {todoId, done} = action;
      const target = draft.find(item => item.id === todoId);
      target.done = done;
      break;
    }
    case 'reverse' : {
      draft.reverse();
      break;
    }
    default:{
      throw Error('알 수 없는 액션 타입 ' + action.type);
    }
  }
}