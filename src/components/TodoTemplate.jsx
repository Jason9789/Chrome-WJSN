import React from 'react';
import '../styles/TodoTemplate.scss';

// eslint-disable-next-line react/prop-types
function TodoTemplate({ children }) {
  return (
    <div className="TodoTemplate">
      <div className="content">{children}</div>
    </div>
  );
}

export default TodoTemplate;
