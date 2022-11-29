import React, { useState } from "react";
import styled from "styled-components";
import TodoForm from "./Components/TodoForm/TodoForm";
import TodoList from "./Components/TodoList/TodoList";

// 초기값 받아오는거(get), 내가 수정할거(set)
function App() {
  const [todos, setTodos] = useState([]);
  const [counter, setCounter] = useState(0);
  // ★ 로컬스토리지 작업시 겹칠 수 있음. 브라우저 리셋하면 conter 초기값으로 가니까 식별자로 부적합
  // uuid v4 => localstorage.array.length + 라이브러리 100억번을뽑아야 50% 겹칠수 있음. 0.000000006%

  const todosCatcherHandler = (todos) => {
    let todo = {
      id: counter,
      todoContents: todos,
      completed: true,
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
  // 맵이다.=> 배열 새로만든다.
  // id가 같으면 수정해라. 아니면 그대로 e로 뽑아라.
  // id가 같으면 completed를 기존값의 반대로해서 수정해라. 스프레드연산자로 나머지값 갖고와서 합쳐라.

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
`;

let LogoWrapper = styled.div`
  width: 85%;
  padding-left: 10px;
`;

let LogoH1 = styled.h1`
  margin-bottom: 10px;
`;
