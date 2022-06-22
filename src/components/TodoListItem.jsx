/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// import React from 'react';
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
} from 'react-icons/md';

import '../styles/TodoListItem.scss';

import React, { useState, useRef, useEffect, memo } from 'react';

const TodoListItem = memo(
  ({ id, todo, isChecked, deleteTodo, updateTodo, toggleCheck }) => {
    const [value, setValue] = useState(todo);
    const [isUpdate, setIsUpdate] = useState(false);
    const input = useRef(null);

    useEffect(() => {
      if (isUpdate) {
        input.current.focus();
      }
    }, [isUpdate]);

    useEffect(() => {
      setIsUpdate(false);
    }, [todo]);

    const onClickTodo = () => {
      setIsUpdate(true);
    };

    const onChangeInput = (e) => {
      setValue(e.target.value);
    };

    const onFormSubmit = (e) => {
      e.preventDefault();
      setIsUpdate(false);
      if (!value) {
        setValue(todo);
      } else if (todo !== value) {
        updateTodo(id, value, isChecked);
      }
    };

    const onBlurInput = () => {
      setIsUpdate(false);
    };

    const onKeyUpInput = (e) => {
      if (e.key === 'Escape') {
        setIsUpdate(false);
      }
    };

    return (
      <li className="TodoListItem">
        <div className="checkbox" onClick={toggleCheck(id)}>
          {isChecked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          {isUpdate || (
            <div
              className={`text ${isChecked ? 'checked' : ''}`}
              onClick={onClickTodo}
            >
              {todo}
            </div>
          )}
        </div>
        {isUpdate && (
          <form className="update-form" onSubmit={onFormSubmit}>
            <input
              ref={input}
              value={value}
              onChange={onChangeInput}
              onBlur={onBlurInput}
              onKeyUp={onKeyUpInput}
            />
          </form>
        )}
        <div className="remove" onClick={deleteTodo(id)}>
          <MdRemoveCircleOutline />
        </div>
      </li>
    );
  },
);

export default TodoListItem;
