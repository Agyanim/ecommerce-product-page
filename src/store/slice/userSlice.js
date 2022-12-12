import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({

    name: "users",
    initialState:{
        value:[]
    },
    reducers:{
        addUsers: (state,action)=>{
            state.value =[...state.value,action.payload]
        }

    }
})

export const {addUsers}= userSlice.actions
export default userSlice.reducer