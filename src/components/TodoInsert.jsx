/* eslint-disable react/prop-types */
import React, { useCallback, useState } from 'react';
// import { MdAdd } from 'react-icons/md';
import '../styles/TodoInsert.scss';

function TodoInsert({ id, onInsert }) {
  // LocalStorage
  const TODO_LIST = 'Todos';

  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      // 아무 것도 입력되지 않았을 때, 예외 처리
      if (value === '') {
        e.preventDefault();
      } else {
        onInsert(value);
        let todoObj = [];
        let listCount = 0;
        const loadTodoList = JSON.parse(localStorage.getItem(TODO_LIST));

        if (loadTodoList !== null) {
          todoObj = loadTodoList;
          todoObj.push({ id, text: value, checked: false });
          listCount = id;
        } else {
          todoObj.push({ id, text: value, checked: false });
          listCount = id;
        }
        localStorage.setItem(TODO_LIST, JSON.stringify(todoObj));
        localStorage.setItem('TODO_COUNT', listCount);

        setValue('');
        e.preventDefault();
      }
    },
    [onInsert, value],
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력해주세요."
        value={value}
        onChange={onChange}
      />
    </form>
  );
}

export default TodoInsert;
