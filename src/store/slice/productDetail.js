import { createSlice } from "@reduxjs/toolkit";

const productDetail = createSlice({
  name: "product",
  initialState: {
    value: [
      {
        id: 1,
        name: "sneakers",
        decription: "Fall Limited Edition Sneakers",
        price: 125,
      },
    ],
  },

  reducers:{
    addItem:(state,action)=>{
        state.value=(state.value, action.payload)
    }
  }
});
export const {addItem}=productDetail.actions
export default productDetail.reducer