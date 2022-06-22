import React, { useCallback, useRef, useState } from 'react';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';
import TodoTemplate from './TodoTemplate';

function TodoListBlock() {
  // eslint-disable-next-line no-unused-vars
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Todo 만들기',
      checked: true,
    },
    {
      id: 2,
      text: 'UI 꾸미기',
      checked: false,
    },
    {
      id: 3,
      text: 'Open weather API 붙이기',
      checked: false,
    },
  ]);

  // Todo List 고윳값 id
  // ref를 사용하여 변수 담기
  const nextId = useRef(4);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };

      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos],
  );

  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id
            ? {
                ...todo,
                checked: !todo.checked,
              }
            : todo,
        ),
      );
    },
    [todos],
  );

  return (
    <TodoTemplate>
      Todo 만들기
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
}

export default TodoListBlock;
