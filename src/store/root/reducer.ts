import { combineReducers } from "redux";
import paginationReducer from "../pagination/reducer";
import jobsReducer from "../jobs/reducer";

const rootReducer = combineReducers({
  pagination: paginationReducer,
  jobs: jobsReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
