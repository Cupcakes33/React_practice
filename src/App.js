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
  const [counter, setCounter] = useState(0);

  const todosCatcherHandler = (todos) => {
    let todo = {
      id: counter,
      completed: true,
      todoContents: todos,
    };
    setTodos((prev) => {
      return [...prev, todo];
    });
    setCounter((prev) => {
      return prev + 1;
    });
  };

  const todoDeleteHandler = (todo) => {
    setTodos(todos.filter((e) => e.id !== todo));
  };

  const todoSwitchHandler = (todo) => {
    console.log(todo)
    console.log(todo)
    setTodos(
      todos.map((e) => (e.id === todo ? { ...e, completed: !e.completed } : e))
    );
  };

  return (
    <BackGround>
      <LogoWrapper>
        <LogoH1>TodoList</LogoH1>
      </LogoWrapper>
      <TodoForm todosCatcher={todosCatcherHandler} />
      <TodoList
        todoDeleteHandler={todoDeleteHandler}
        todoSwitchHandler={todoSwitchHandler}
        todos={todos}
      />
    </BackGround>
  );
}

export default App;
