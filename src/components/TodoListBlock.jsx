/* eslint-disable no-shadow */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import TodoInsert from './TodoInsert';
import TodoListItem from './TodoListItem';

import '../styles/TodoTemplate.scss';
import '../styles/TodoList.scss';

function TodoListBlock() {
  const [todoList, setTodoList] = useState([]);
  const [id, setId] = useState(0);
  const isMount = useRef(true);

  useEffect(() => {
    if (!isMount.current) {
      localStorage.setItem('todoList', JSON.stringify(todoList));
      localStorage.setItem('id', id);
    }
  }, [todoList, id]);

  useEffect(() => {
    const localTodoList = localStorage.getItem('todoList');
    if (localTodoList) {
      setTodoList(JSON.parse(localTodoList));
    }
    const localId = localStorage.getItem('id');
    if (localId) {
      setId(parseInt(localId, 10));
    }
    isMount.current = false;
  }, []);

  const addTodo = useCallback(
    (todo) => (e) => {
      e.preventDefault();
      if (todo) {
        setTodoList((prevTodoList) => [
          ...prevTodoList,
          { id, todo, isChecked: false },
        ]);
        setId((prevId) => prevId + 1);
      }
    },
    [id],
  );

  const updateTodo = useCallback(
    (id, todo, isChecked) => {
      const index = todoList.findIndex((todoInfo) => todoInfo.id === id);
      const newTodoList = [...todoList];
      newTodoList.splice(index, 1, {
        id,
        todo,
        isChecked,
      });
      setTodoList(newTodoList);
    },
    [todoList],
  );

  const deleteTodo = useCallback(
    (id) => () => {
      const newTodoList = todoList.filter((todoInfo) => todoInfo.id !== id);
      setTodoList(newTodoList);
    },
    [todoList],
  );

  const toggleCheck = useCallback(
    (id) => () => {
      const index = todoList.findIndex((todoInfo) => todoInfo.id === id);
      const newTodoList = [...todoList];
      newTodoList[index].isChecked = !newTodoList[index].isChecked;
      setTodoList(newTodoList);
    },
    [todoList],
  );

  return (
    <div className="TodoTemplate">
      <TodoInsert addTodo={addTodo} />
      <div className="TodoList">
        {todoList.map((todoInfo) => {
          return (
            <TodoListItem
              key={todoInfo.id}
              id={todoInfo.id}
              todo={todoInfo.todo}
              isChecked={todoInfo.isChecked}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
              toggleCheck={toggleCheck}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TodoListBlock;
