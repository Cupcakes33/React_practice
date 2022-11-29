import React, { useState } from "react";
import styled from "styled-components";
import Todo from "./Todo";

let TodoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  padding: 10px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

let Todos = styled.div`
  width: 48%;
`;

let Completed = styled.div`
  width: 48%;
`;

const TodoList = (props) => {
  const doList = props.todos.filter((e) => e.completed === true);
  const doCompleted = props.todos.filter((e) => e.completed === false);

  return (
    <TodoContainer>
      <Todos>
        <h3 style={{ marginBottom: "10px" }}>TO DO</h3>
        {doList.map((e, n) => {
          return (
            <Todo
              key={`todo${n}`}
              id={e.id}
              todoContents={e.todoContents}
              control={"COMPLETED"}
              todoDeleteHandler={props.todoDeleteHandler}
              todoSwitchHandler={props.todoSwitchHandler}
            />
          );
        })}
      </Todos>
      <Completed>
        <h3 style={{ marginBottom: "10px" }}>COMPLETED</h3>
        {doCompleted.map((e, n) => {
          return (
            <Todo
              key={`completed${n}`}
              id={e.id}
              todoContents={e.todoContents}
              control={"REVERT"}
              todoDeleteHandler={props.todoDeleteHandler}
              todoSwitchHandler={props.todoSwitchHandler}
            />
          );
        })}
      </Completed>
    </TodoContainer>
  );
};

export default TodoList;
