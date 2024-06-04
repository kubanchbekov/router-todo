import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, { payload }) => {
      state.todo.push(payload);
    },
    deleteTodo: (state, { payload }) => {
      state.todo = state.todo.filter((item) => item.id !== payload);
    },

    editTodo: (state, { payload }) => {
      state.todo = state.todo.map((item) =>
        item.id === payload.id ? { ...item, ...payload } : item
      );
    },
  },
});

export const { addTodo, deleteTodo,editTodo } = todoSlice.actions;
