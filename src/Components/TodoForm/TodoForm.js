import React, { useState } from "react";
import styled from "styled-components";

let TodoFormWrapper = styled.form`
  width: 400px;
  border: 0.3px solid black;
  border-radius: 15px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: white;
`;
let TodoTitleInput = styled.input`
  width: 100%;
  font-size: 1.2rem;
  height: 40px;
  border: none;
  background: #e9e9e9;
  padding: 20px;
  outline: none;
  border-radius: 10px;
  margin-bottom: 20px;
`;

let TodoCommentInput = styled.textarea`
  width: 100%;
  height: 100px;
  font-size: 1rem;
  border: none;
  border-radius: 10px;
  outline: none;
  resize: none;
  white-space: pre-wrap;
  padding: 20px;
  margin-bottom: 20px;
  background: #e9e9e9;
`;
let ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
`;
let TodoButton = styled.button`
  width: 50%;
  height: 30px;
  border: none;
  background-color: black;
  border-radius: 5px;
  cursor: pointer;
  &::after {
    content: ${(props) => props.content};
    font-size: 1rem;
    color: white;
  }
`;

let ModalSwitchButton = styled.button`
  width: 70px;
  height: 70px;
  position: absolute;
  bottom: 20px;
  right: 20px;
  border: none;
  background: black;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s all;
  &:hover {
    transform: scale(1.08);
  }
  &::after {
    content: "+";
    color: white;
    font-size: 4rem;
  }
`;

let ModalOverlay = styled.div`
  z-index: 10;
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(1.5px);
`;

const TodoForm = (props) => {
  const [todoInput, setTodoInput] = useState({
    title: "",
    comment: "",
  });
  const [todoSwitch, setTodoSwitch] = useState(false);
  const todoInputHandler = (event) => {
    const { value, name } = event.target;
    setTodoInput({ ...todoInput, [name]: value });
  };

  const todoSubmitHandler = (event) => {
    event.preventDefault();
    props.todosCatcher(todoInput);
    setTodoInput({
      title: "",
      comment: "",
    });
    setTodoSwitch(false);
  };

  const todoCommentEnterKeyHandler = (
    e: KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (e.nativeEvent.isComposing) {
      return;
    }
    if (e.key === "Enter" && e.shiftKey) {
      return;
    } else if (e.key === "Enter") {
      todoSubmitHandler(e);
    }
  };

  return todoSwitch === false ? (
    <ModalSwitchButton
      onClick={() => {
        setTodoSwitch(true);
      }}
    />
  ) : (
    <ModalOverlay>
      <TodoFormWrapper onSubmit={todoSubmitHandler}>
        <TodoTitleInput
          type="text"
          name="title"
          value={setTodoInput.title}
          maxLength="30"
          placeholder="Title"
          onChange={todoInputHandler}
          required
        />
        <TodoCommentInput
          name="comment"
          maxLength="100"
          value={setTodoInput.comment}
          placeholder="Comment"
          onChange={todoInputHandler}
          onKeyDown={todoCommentEnterKeyHandler}
          required
        />
        <ButtonWrapper>
          <TodoButton type="submit" content="'Submit'" />
          <TodoButton
            type="button"
            content="'Closed'"
            onClick={() => {
              setTodoSwitch(false);
            }}
          />
        </ButtonWrapper>
      </TodoFormWrapper>
    </ModalOverlay>
  );
};

export default TodoForm;
