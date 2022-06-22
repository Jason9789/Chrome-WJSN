import React from 'react';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';
import TodoTemplate from './TodoTemplate';

function TodoListBlock() {
  return (
    <TodoTemplate>
      Todo 만들기
      <TodoInsert />
      <TodoList />
    </TodoTemplate>
  );
}

export default TodoListBlock;
