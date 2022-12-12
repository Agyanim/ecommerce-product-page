import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../store/slice/todoSlice";
import userSlice from "../store/slice/userSlice";
import countSlice from "../store/slice/countSlice";
import productDetail from "../store/slice/productDetail";

const store = configureStore({
    reducer: {
      todo: todoSlice,
      users: userSlice,
      count: countSlice,
      product:productDetail
    },
  });
  
  export default store