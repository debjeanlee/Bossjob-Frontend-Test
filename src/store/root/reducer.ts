import { combineReducers } from "redux";
import paginationReducer from "../pagination/reducer";
const rootReducer = combineReducers({
  pagination: paginationReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
