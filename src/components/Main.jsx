import '../App.css';
import React from 'react';
import TodoListBlock from './TodoListBlock';
import User from './User';
import Weather from './Weather';

function Main() {
  return (
    <div className="background">
      <div>
        <Weather />
        <User />
        <TodoListBlock />
      </div>
    </div>
  );
}

export default Main;
