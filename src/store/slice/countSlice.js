import { autoBatchEnhancer, createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "count",

  initialState: {
    value: 0,
  },

  reducers: {
    increaseCount: (state, action) => {
      state.value = state.value + 1;
    },
    decreaseCount: (state, action) => {
      state.value = state.value - 1;
    },
    addCount:(state,action)=>{
      state.value=(state.value,action.payload)
    }
  },
});
export const { increaseCount, decreaseCount,addCount } = countSlice.actions;
export default countSlice.reducer;
