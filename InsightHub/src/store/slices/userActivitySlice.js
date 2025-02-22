import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dailyActiveUsers: 0,
    monthlyActiveUsers: 0,
    dailyTimePerUser: 0,
    logs: [],
    pieChartData: [
        { name: "Staff", y: 0 },
        { name: "Students", y: 0 },
        { name: "Other", y: 0 },
    ],
    authenticationData: [],
    lineChartData: [

    ],
    date: "",
};

const userActivitySlice = createSlice({
    name: "activity",
    initialState,
    reducers: {
        setStats(state, action) {
            state.dailyActiveUsers = action.payload.dailyActiveUsers;
            state.monthlyActiveUsers = action.payload.monthlyActiveUsers;
            state.dailyTimePerUser = action.payload.dailyTimePerUser;
            state.date = action.payload.date;
            state.authenticationData = action.payload.authenticationData;
            state.lineChartData = action.payload.lineChartData;
            state.pieChartData = [
                { name: "Daily Active Users", value: action.payload.dailyActiveUsers },
                { name: "Monthly Active Users", value: action.payload.monthlyActiveUsers },
            ];
        },
        setLogs(state, action) {
            state.logs = action.payload;
        },
        setPieChartData(state, action) {
            state.pieChartData = action.payload;
        },
        setAuthenticationData(state, action) {
            state.authenticationData = action.payload
        },
        setLineChartData(state, action) {
            state.lineChartData = action.payload
        }

    },
});

export const { setStats, setLogs, setPieChartData, setAuthenticationData, setLineChartData } = userActivitySlice.actions;
export default userActivitySlice.reducer;

export const selectMetrics = (state) => state.activity;