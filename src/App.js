import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";
import TodoForm from "./Components/TodoForm/TodoForm";
import TodoList from "./Components/TodoList/TodoList";

let BackGround = styled.div`
  width: 1000px;
  height: calc(500 * 1.6px);
  border: 0.3px solid black;
  border-radius: 12px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
`;

let LogoWrapper = styled.div`
  width: 85%;
  padding-left: 10px;
`;

let LogoH1 = styled.h1`
  margin-bottom: 10px;
`;

function App() {
  const DUMMY_DATA = [];
  const [todos, setTodos] = useState(DUMMY_DATA);
  const todosCatcherHandler = (todos) => {
    let todo = {
      completed: true,
      todoContents: todos,
    };
    setTodos((prev) => {
      return [...prev, todo];
    });
  };
  return (
    <BackGround>
      <LogoWrapper>
        <LogoH1>TodoList</LogoH1>
      </LogoWrapper>
      <TodoForm todosCatcher={todosCatcherHandler} />
      <TodoList todosContents={todos} />          
    </BackGround>
  );
}

export default App;
