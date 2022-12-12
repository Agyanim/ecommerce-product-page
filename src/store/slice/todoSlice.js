import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    value: [],
  },

  reducers: {
    addTodo: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    removeTodo: (state, action) => {
      state.value = state.value.filter((item) => {
        item.id !== action.payload.id;
      });
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
