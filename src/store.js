import {createStore, compose, applyMiddleware } from 'redux'
import {save} from 'redux-localstorage-simple'
import mainReducer from './reducers'

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const configureStore = preloadedState => (
  createStore(
    mainReducer,
    preloadedState,
    composeEnhancers(
      applyMiddleware(save({ namespace: 'todo-list' }))
    ),
  )
);

const store = configureStore({});

export default store;