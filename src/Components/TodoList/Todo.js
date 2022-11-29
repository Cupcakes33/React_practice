import React, { useState } from "react";
import styled from "styled-components";

let TodoBox = styled.div`
  width: 100%;
  height: 100px;
  border-radius: 12px;
  display: flex;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
  border: 0.3px solid black;
  padding: 10px;
  margin-bottom: 10px;
`;

let TodoContentsSpan = styled.span`
  font-size: 1rem;
  min-width: 270px;
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
`;

const Todo = (props) => {
  const todoSwitchHandler = () => {
    props.todoSwitchHandler(props.id)
  };
  const todoDeleteHandler = () => {
    props.todoDeleteHandler(props.id);
  };

  return (
    <TodoBox>
      <TodoContentsWrapper>
        <TodoContentsSpan>{props.todoContents}</TodoContentsSpan>
      </TodoContentsWrapper>
      <ControlButtonWrapper>
        <ControlButton onClick={todoSwitchHandler}>
          {props.control}
        </ControlButton>
        <ControlButton onClick={todoDeleteHandler}>DELETE</ControlButton>
      </ControlButtonWrapper>
    </TodoBox>
  );
};

export default Todo;
