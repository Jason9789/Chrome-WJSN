import React, { useCallback, useEffect, useRef, useState } from 'react';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';
import TodoTemplate from './TodoTemplate';

function TodoListBlock() {
  // eslint-disable-next-line no-unused-vars
  const [todos, setTodos] = useState([]); // TodoList 배열

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('Todos'))) {
      setTodos(JSON.parse(localStorage.getItem('Todos')));
    }
  }, []);

  // Todo List 고윳값 id
  // ref를 사용하여 변수 담기
  const localIntId = localStorage.getItem('TODO_COUNT')
    ? parseInt(localStorage.getItem('TODO_COUNT'), 10) + parseInt(1, 10)
    : parseInt(0, 10);

  const nextId = useRef(localIntId);

  // INSERT
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
      // const loadTodoList = JSON.parse(localStorage.getItem('Todos'));
      // const result = loadTodoList.filter((list) => list.id !== id);
      localStorage.setItem('Todos', JSON.stringify(todos));
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
      <TodoInsert id={nextId.current} onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
}

export default TodoListBlock;
