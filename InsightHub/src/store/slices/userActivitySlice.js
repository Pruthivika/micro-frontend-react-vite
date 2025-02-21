import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeUsers: [],
    logs: [],
};

const userActivitySlice = createSlice({
    name: "activity",
    initialState,
    reducers: {
        setActiveUsers(state, action) {
            state.activeUsers = action.payload;
        },
        setLogs(state, action) {
            state.logs = action.payload;
        },
    },
});

export const { setActiveUsers, setLogs } = userActivitySlice.actions;
export default userActivitySlice.reducer;
