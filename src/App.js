import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import styled from "styled-components";
import TodoForm from "./Components/TodoForm/TodoForm";
import TodoList from "./Components/TodoList/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("todos"));
    if (data) {
      setTodos([...data]);
    }
  }, []);

  useEffect(() => {
    if (todos.length !== 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  const todosCatcherHandler = (item) => {
    let todo = {
      id: uuidv4(),
      todoTitle: item.title,
      todoContents: item.comment,
      completed: true,
    };
    setTodos((prev) => {
      return [...prev, todo];
    });
  };

  const todoDeleteHandler = (todo) => {
    setTodos(todos.filter((e) => e.id !== todo));
  };

  const todoSwitchHandler = (todo) => {
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
  position: relative;
`;

let LogoWrapper = styled.div`
  width: 100%;
  padding-left: 30px;
`;

let LogoH1 = styled.h1`
  margin-bottom: 10px;
`;
