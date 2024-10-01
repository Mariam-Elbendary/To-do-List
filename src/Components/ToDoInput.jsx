import React, { useState } from "react";

const ToDoInput = (props) => {
  const { handleAddTodo, todoValue, setTodoValue } = props;

  return (
  
      <header>
        <input
          type="text"
          placeholder="Enter todo..."
          value={todoValue}
          onChange={(e) => {
            setTodoValue(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            handleAddTodo(todoValue);
            setTodoValue("");
          }}
        >
          Add
        </button>
      </header>
  );
};

export default ToDoInput;
