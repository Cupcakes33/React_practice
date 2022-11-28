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
  let todo, completed;

  props.todosContents
    ? (todo = <Todo todolists={props.todosContents} control={"COMPLETED"} />)
    : (completed = <Todo todolists={props.todosContents} control={"REVERT"} />);

  return (
    <TodoContainer>
      <Todos>
        <h3 style={{ marginBottom: "10px" }}>TO DO</h3>
        {todo}
      </Todos>
      <Completed>
        <h3 style={{ marginBottom: "10px" }}>COMPLETED</h3>
        {completed}
      </Completed>
    </TodoContainer>
  );
};

export default TodoList;
