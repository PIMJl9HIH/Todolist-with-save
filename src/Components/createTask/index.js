import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

const CreateTask = ({ value, onChange, onKeyPress }) => (

  <div className="create-task">
    <span className="create-task-add">+</span>
    <input
      className="create-task-input"
      type="text"
      placeholder="Click to add task"
      onChange={onChange}
      value={value}
      onKeyPress={onKeyPress}
    />
  </div>

);

CreateTask.propTypes = {
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func
};

CreateTask.defaultProps = {
  onChange: () => {},
  onKeyPress: () => {}
};


export default CreateTask;
