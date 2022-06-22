import '../App.css';
import React from 'react';
import TodoListBlock from './TodoListBlock';
import User from './User';
import Weather from './Weather';

function Main() {
  return (
    <>
      <div className="App">
        <Weather />
        <User />
      </div>
      <div>
        <TodoListBlock />
      </div>
    </>
  );
}

export default Main;
