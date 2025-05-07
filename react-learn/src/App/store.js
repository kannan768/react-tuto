// src/App/store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Slice/Userslice";
import islogin from "../Slice/Islogin"
const store = configureStore({
  reducer: {
    user: userReducer,
    islogin: islogin,
  },
});

export default store;

//step 2