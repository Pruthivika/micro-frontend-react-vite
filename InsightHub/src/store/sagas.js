import { takeLatest, put, delay } from "redux-saga/effects";
import { setStats, setLogs, setPieChartData, setAuthenticationData, setLineChartData } from "./slices/userActivitySlice";

const today = new Date();
const options = { day: '2-digit', month: 'short', year: 'numeric' };
const formattedDate = today.toLocaleDateString('en-GB', options).replace(',', '');

/**
 * Saga to fetch user activity statistics.
 * Simulates an API call with a delay and updates the Redux store with mock data.
 */
function* fetchStats() {
    yield delay(1000); // Simulate API call delay

    // Dispatch an action to update the Redux store with daily statistics
    yield put(
        setStats({
            dailyActiveUsers: 1200,
            monthlyActiveUsers: 5000,
            dailyTimePerUser: 45,
            date: formattedDate,
        })
    );

    // Dispatch an action to update the Redux store with pie chart data (user distribution)
    yield put(
        setPieChartData([
            { name: "Staff", y: 151 },
            { name: "Students", y: 200 },
            { name: "Other", y: 200 },
        ])
    );

    // Dispatch an action to update the Redux store with authentication method usage data
    yield put(
        setAuthenticationData([
            { name: "Microsoft", y: 100 },
            { name: "Internal", y: 100 },
            { name: "SMAL", y: 100 },
        ])
    );

    // Dispatch an action to update the Redux store with line chart data (user activity over time)
    yield put(
        setLineChartData([
            [Date.UTC(2025, 1, 1), 50],
            [Date.UTC(2025, 1, 2), 75],
            [Date.UTC(2025, 1, 3), 100],
            [Date.UTC(2025, 1, 4), 120],
            [Date.UTC(2025, 1, 5), 90],
            [Date.UTC(2025, 1, 6), 130],
            [Date.UTC(2025, 1, 7), 110]
        ])
    );
}

/**
 * Saga to fetch activity logs.
 * Simulates an API call with a delay and updates the Redux store with mock log data.
 */
function* fetchLogs() {
    yield delay(1000);

    // Dispatch an action to update the Redux store with user activity logs
    yield put(
        setLogs([
            { message: "Permissions changed to admin by", actionUser: "John", user: "Alice Doe", time: "2 hours ago", type: "permission_update" },
            { message: "Successfully logged in", user: "Michael Smith", actionUser: "", time: "1 hour ago", type: "login" },
            { message: "User account deactivated by", actionUser: "Sarah Smith", user: "David Brown", time: "30 minutes ago", type: "account_update" },
            { message: "Password reset requested by", actionUser: "Emma Rupert", user: "Olivia Wilson", time: "15 minutes ago", type: "security" },
            { message: "Failed login attempt detected", user: "Robert Johnson", actionUser: "", time: "10 minutes ago", type: "security_alert" },
            { message: "Successfully logged in", user: "Alice Doe", actionUser: "", time: "2 minutes ago", type: "login" },
        ])
    );
}

/**
 * Root saga that watches for dispatched actions and triggers the appropriate sagas.
 */
export default function* rootSaga() {
    yield takeLatest("activity/fetchStats", fetchStats);
    yield takeLatest("activity/fetchLogs", fetchLogs);
}
