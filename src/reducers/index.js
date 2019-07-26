import {combineReducers} from 'redux'
import tasks from './tasks'
import filters from './filters'


const mainReducer = combineReducers({
  tasks,
  filters
})

export default mainReducer


