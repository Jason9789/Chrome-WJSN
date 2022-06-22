import React from 'react';
import TodoListItem from './TodoListItem';
import '../styles/TodoList.scss';

// eslint-disable-next-line react/prop-types
function TodoList({ todos, onRemove, onToggle }) {
  return (
    <div>
      <div className="TodoList">
        {
          // eslint-disable-next-line react/prop-types
          todos.map((todo) => (
            <TodoListItem
              todo={todo}
              key={todo.id}
              onRemove={onRemove}
              onToggle={onToggle}
            />
          ))
        }
      </div>
    </div>
  );
}

export default TodoList;
