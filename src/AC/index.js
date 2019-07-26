import { TYPE } from '../constants'

export const addTodo = ( id, text, isCompleted ) => ({
    type: TYPE.ADD_TODO,
    payload: {
      id,
      text,
      isCompleted
    }
});

export const deleteTodo = ( id ) => ({
  type: TYPE.DELETE_TODO,
  payload: {
    id
  }
});

export const completedTask = ( id ) => ({
  type: TYPE.COMPLETED_TODO,
  payload: {
    id
  }
});

export const changeFilter = ( activeFilter) => ({
  type: TYPE.CHANGE_FILTER,
  payload: {
    activeFilter
  }
});