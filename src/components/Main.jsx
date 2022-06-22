import React from 'react';
import TodoList from './TodoList';
import User from './User';
import Weather from './Weather';

function Main() {
  return (
    <div>
      <Weather />
      <User />
      <TodoList />
    </div>
  );
}

export default Main;
