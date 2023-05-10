import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../reducers/user/user";

const store = configureStore({
    reducer:{
        user:userSlice
    }
});
export default store;