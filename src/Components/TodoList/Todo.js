import React, { useState } from "react";
import styled from "styled-components";

let TodoBox = styled.span`
  width: 100%;
  height: 150px;
  border-radius: 12px;
  display: flex;
  position: relative;
  overflow: hidden;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
  border: 0.3px solid black;
  padding: 15px;
  margin-bottom: 10px;
`;

let TodoColorHeader = styled.div`
  width: 100%;
  left: 0;
  top: 0;
  height: 5px;
  position: absolute;
  background: ${(props) => props.headerColor};
`;

let TodoTitleSpan = styled.span`
  font-size: 1.4rem;
  font-weight: bold;
  word-wrap: break-word;
  word-break: break-word;
  margin-bottom: 5px;
`;

let TodoContentsSpan = styled.span`
  font-size: 1rem;
  min-width: 270px;
  word-wrap: break-word;
  word-break: break-word;
`;
let ControlButtonWrapper = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
let ControlButton = styled.button`
  width: 100%;
  height: 30px;
  border: none;
  border-radius: 12px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
  margin-right: 10px;
  cursor: pointer;
`;

let TodoContentsWrapper = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Todo = (props) => {
  const switchHandler = () => {
    props.todoSwitchHandler(props.todo.id);
  };
  const deleteHandler = () => {
    props.todoDeleteHandler(props.todo.id);
  };

  return (
    <TodoBox>
      <TodoColorHeader
        headerColor={props.todo.completed ? "#6cc6cb" : "#f685cc"}
      />
      <TodoContentsWrapper>
        <TodoTitleSpan>{props.todo.todoTitle}</TodoTitleSpan>
        <TodoContentsSpan>{props.todo.todoContents}</TodoContentsSpan>
      </TodoContentsWrapper>
      <ControlButtonWrapper>
        <ControlButton onClick={switchHandler}>
          {props.todo.completed ? "COMPLETED" : "REVERT"}
        </ControlButton>
        <ControlButton onClick={deleteHandler}>DELETE</ControlButton>
      </ControlButtonWrapper>
    </TodoBox>
  );
};

export default Todo;
