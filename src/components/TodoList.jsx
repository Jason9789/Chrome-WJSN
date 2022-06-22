import React from 'react';
import TodoListItem from './TodoListItem';
import '../styles/TodoList.scss';

function TodoList() {
  return (
    <div>
      <div className="TodoList">
        <TodoListItem />
        <TodoListItem />
        <TodoListItem />
      </div>
    </div>
  );
}

export default TodoList;
