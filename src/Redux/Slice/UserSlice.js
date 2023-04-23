import {createSlice} from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: "user",
    initialState: {
        userList: [],
    },
    reducers: {
        addUserList(state, action) {
            state.userList = action.payload
        },
        removeUserList(state, action) {
            state.userList = state.userList.filter((item) => item.id !== action.payload)
        },
        addUserDate(state, action) {
            state.userList = [action.payload, ...state.userList]
        }
    }
})

export default UserSlice.reducer;
export const {
    addUserList,
    removeUserList,
    addUserDate
} = UserSlice.actions;
