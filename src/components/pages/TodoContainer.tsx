//TodoContainer.tsx
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/rootState.type";
import { TodoPresenter } from "../organisms/TodoPresenter";

export const TodoContainer = () => {
  const todos = useSelector((state: RootState) => state.todos);

  const args = {
    todos,
  };
  return <TodoPresenter {...args} />;
};
