/* eslint-disable react/prop-types */
// import React, { useCallback, useState } from 'react';
// import { MdAdd } from 'react-icons/md';
import React, { useState, useRef, useEffect, memo } from 'react';
import '../styles/TodoInsert.scss';

const TodoInsert = memo(({ addTodo }) => {
  const [value, setValue] = useState('');
  const input = useRef(null);

  useEffect(() => {
    input.current.focus();
    setValue('');
  }, [addTodo]);

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <form className="TodoInsert" onSubmit={addTodo(value)}>
      <input
        ref={input}
        value={value}
        onChange={onChangeInput}
        placeholder="할 일을 입력해주세요."
      />
    </form>
  );
});

export default TodoInsert;
