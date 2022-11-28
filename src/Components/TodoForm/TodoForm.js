import React, { useState } from "react";
import styled from "styled-components";

let TodoFormWrapper = styled.form`
  width: 85%;
  height: 8%;
  border: 0.3px solid black;
  border-radius: 50px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
  position: relative;
  display: flex;
  padding: 10px 45px 10px 10px;
  margin-bottom: 10px;
`;

let TodoInput = styled.input`
  width: 100%;
  font-size: 1.2rem;
  border: none;
  outline: none;
  padding-left: 10px;
`;

let TodoButton = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  position: absolute;
  background-color: black;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 50%;
  cursor: pointer;
  &::after {
    content: "+";
    font-size: 30px;
    color: white;
  }
`;

const TodoForm = (props) => {
  const [todos, setTodos] = useState("");
  const todoInputHandler = (event) => {
    setTodos(event.target.value);
  };

  const todoSubmitHandler = (event) => {
    event.preventDefault();
    props.todosCatcher(todos);
    setTodos("");
  };
  return (
    <TodoFormWrapper onSubmit={todoSubmitHandler}>
      <TodoInput
        type="text"
        maxLength="100"
        value={todos}
        onChange={todoInputHandler}
      ></TodoInput>
      <TodoButton type="submit"></TodoButton>
    </TodoFormWrapper>
  );
};

export default TodoForm;
