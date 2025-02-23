import { combineReducers } from "@reduxjs/toolkit";
import activityReducer from "./slices/userActivitySlice";

/**
 * Root reducer for the Redux store.
 * Combines all slice reducers into a single reducer function.
 */
const rootReducer = combineReducers({
    activity: activityReducer,
});

export default rootReducer;
