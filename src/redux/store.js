import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../reducers/user/user";
import restaurantSlice from "../reducers/restaurant/restaurant";
import seccionSlice from "../reducers/seccion/seccion";
const store = configureStore({
    reducer:{
        user:userSlice,
        restaurant:restaurantSlice,
        seccion:seccionSlice
    }
});
export default store;