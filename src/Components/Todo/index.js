import React, {Component} from 'react'
import {connect} from 'react-redux'
import CreateTask from '../createTask'
import TodoList from '../TodoList'
import Footer from '../footer'
import {addTodo, deleteTodo, completedTask, changeFilter} from '../../AC'




class Todo extends Component {

  state = {
    taskText: ''
  }

  handleInputText = ({target: {value}}) => {
    this.setState({
      taskText: value,
    })
  }

  addTask = ({ key }) => {
    const {taskText} = this.state;
    if (taskText.length > 3 && key === 'Enter') {
      const {addTodo} = this.props;
      addTodo((new Date()).getTime(), taskText, false);
      this.setState({
        taskText: ''
      })
    }
  }

  filterTasks = (tasks, filters) => {
    switch (filters) {
      case 'completed':
        return tasks.filter (task => task.payload.isCompleted);
      case 'active':
        return tasks.filter (task => !task.payload.isCompleted);
      default:
        return tasks;
    }
  }

  getActiveTasks = tasks => tasks.filter( item => !item.payload.isCompleted).length;

  render() {

    const {taskText} = this.state;
    const {tasks, deleteTodo, completedTask, filters, changeFilter} = this.props;
    const tasksExist = tasks && tasks.length > 0;
    const filteredTasks = this.filterTasks(tasks, filters);
    const activeTaskCounter = this.getActiveTasks(tasks);

    return (
      <div className="todo">
        <CreateTask
          onKeyPress={this.addTask}
          onChange={this.handleInputText}
          value={taskText}
        />
        {tasksExist && <TodoList tasks={filteredTasks} deleteTask={deleteTodo} completedTask={completedTask} />}
        {tasksExist &&<Footer amount={activeTaskCounter} filter={filters} changeFilter={changeFilter} />}
      </div>
    )
  }
}

export default connect( ({tasks, filters}) => ({
  tasks,
  filters
}), {addTodo, deleteTodo, completedTask, changeFilter})(Todo)