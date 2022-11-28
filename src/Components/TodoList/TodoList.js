import React, { useState } from "react";
import styled from "styled-components";
import TodoContents from "./TodoContents";

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

const TodoList = () => {
  return (
    <TodoContainer>
      <Todos>
        <h3 style={{ marginBottom: "10px" }}>TO DO</h3>
        <TodoContents></TodoContents>
      </Todos>
      <Completed>
        <h3 style={{ marginBottom: "10px" }}>COMPLETED</h3>
        <TodoContents></TodoContents>
      </Completed>
    </TodoContainer>
  );
};

export default TodoList;
