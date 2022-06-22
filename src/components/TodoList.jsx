import React from 'react';
import TodoListItem from './TodoListItem';
import '../styles/TodoList.scss';

// eslint-disable-next-line react/prop-types
function TodoList({ todos, onRemove }) {
  // const todos2 = JSON.parse(localStorage.getItem('Todos'));
  let result = [];

  if (JSON.parse(localStorage.getItem('Todos'))) {
    result = JSON.parse(localStorage.getItem('Todos'));
  } else {
    result = todos;
  }

  return (
    <div>
      <div className="TodoList">
        {
          // eslint-disable-next-line react/prop-types
          result.map((todo) => (
            <TodoListItem
              todo={todo}
              key={todo.id}
              onRemove={onRemove}
              onToggle={onRemove}
            />
          ))
        }
      </div>
    </div>
  );
}

export default TodoList;
