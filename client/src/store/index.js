import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./usersSlice";
// import chatReducer from "./chatSlice";

const store = configureStore({
    reducer:{
        user: usersReducer,
        // chat: chatReducer,
    }
});

export default store;
