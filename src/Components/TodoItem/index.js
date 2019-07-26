import React from 'react'
import PropTypes from 'prop-types'
import './style.css'


function TodoItem({id, text, isCompleted, deleteTask, completedTask}) {

  return (
    <li className="todo-item">
      <span
        className={isCompleted ? 'todo-icon completed' : 'todo-icon '}
        onClick={ () => completedTask(id)}
      >
        <span className="circle"></span>
      </span>
      <div className={isCompleted ? 'todo-item-text completed' : 'todo-item-text'}>{text}</div>
      <span className="todo-icon-close" onClick={ () => deleteTask(id) }>x</span>
    </li>
  )
}

TodoItem.propTypes = {
  text: PropTypes.string,
  isCompleted: PropTypes.bool,
  deleteTask: PropTypes.func,
  id: PropTypes.number,
}

TodoItem.defaultProps = {
  text: '',
  isCompleted: false,
  deleteTask: () => {},
  id: '',
}

export default TodoItem