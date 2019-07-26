import { TYPE } from '../constants'
import { load } from 'redux-localstorage-simple'

let taskList = load({ namespace: 'todo-list' });

if (!taskList || !taskList.tasks || !!taskList.tasks.length) {
  taskList = {
    tasks: [],
  }
}



const tasks = (state = taskList.tasks, action) => {
  const {type, payload} = action;

  switch (type) {

    case TYPE.ADD_TODO:
      return [
        ...state, {
          payload: Object.assign({}, state.payload, {id: payload.id, text: payload.text, isCompleted: payload.isCompleted})
        }
      ];

    case TYPE.DELETE_TODO:
      return [
        ...state.filter( item => item.payload.id !== payload.id)
      ];

    case TYPE.COMPLETED_TODO:
      return [
        ...state.map( item => {
          if(item.payload.id === payload.id) {
            item.payload.isCompleted = !item.payload.isCompleted
          }
          return item;
        })
      ];

    default:
      return state
  }
}

export default tasks;