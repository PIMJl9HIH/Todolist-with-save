import React from 'react';

import Todo from './Todo';
import Title from './title';
import './style.css';

const App = () => (
  <div className="App">
    <Title title="My Todo App"/>
    <Todo />
  </div>
);




export default App;
