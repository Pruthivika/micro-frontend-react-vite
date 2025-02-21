import { takeLatest, put, delay } from "redux-saga/effects";
import { setActiveUsers, setLogs } from "./slices/userActivitySlice";

function* fetchActiveUsers() {
    yield delay(1000);
    yield put(setActiveUsers([{ date: "2025-02-19", count: 120 }]));
}

function* fetchLogs() {
    yield delay(1000);
    yield put(setLogs([{ user: "John", action: "Login", timestamp: "12:00 PM" }]));
}

export default function* rootSaga() {
    yield takeLatest("activity/fetchActiveUsers", fetchActiveUsers);
    yield takeLatest("activity/fetchLogs", fetchLogs);
}
