import { combineReducers } from "@reduxjs/toolkit";
import activityReducer from "./slices/userActivitySlice";

const rootReducer = combineReducers({
    activity: activityReducer,
});

export default rootReducer;
