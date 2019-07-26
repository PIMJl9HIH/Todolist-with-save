import React from 'react'
import TodoItem from '../TodoItem'
import PropTypes from 'prop-types'
import './style.css'

const TodoList = ({tasks, deleteTask, completedTask}) => (
   <ul className="todo-item-list">
     {tasks.map( ({payload: {id, text, isCompleted}} ) => (
        <TodoItem key={id} id={id} text={text} isCompleted={isCompleted} deleteTask={deleteTask} completedTask={completedTask}/>
     ))}
   </ul>
)

TodoList.propTypes = {
  tasks: PropTypes.array,
  deleteTask: PropTypes.func,
  completedTask: PropTypes.func,
}

TodoList.defaultProps = {
  tasks: [],
  deleteTask: () => {},
  completedTask: () => {},
}

export default TodoList