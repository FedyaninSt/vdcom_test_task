import { combineReducers, configureStore } from "@reduxjs/toolkit";
import UserSlice from "./Slice/UserSlice";

const rootReducer = combineReducers({
    User: UserSlice
})

export const store = configureStore({
    reducer: rootReducer
})
