// src/Slice/Userslice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: [],
  
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addEntry: (state, action) => {
      state.userInfo.push(action.payload);
    },
  },
});

export const { addEntry } = userSlice.actions;          //return action
export default userSlice.reducer;   //->go to store     //return reducer

//step 1