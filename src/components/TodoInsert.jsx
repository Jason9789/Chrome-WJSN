import React from 'react';
// import { MdAdd } from 'react-icons/md';
import '../styles/TodoInsert.scss';

function TodoInsert() {
  return (
    <form className="TodoInsert">
      <input placeholder="할 일을 입력해주세요." />
    </form>
  );
}

export default TodoInsert;
