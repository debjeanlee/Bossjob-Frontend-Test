import { JobAction, JobActionType, JobsState } from "./types";

const initialState: JobsState = {
  jobs: [],
  total: 0,
  query: "hr",
};

const jobReducer = (
  state: JobsState = initialState,
  action: JobAction
): JobsState => {
  switch (action.type) {
    case JobActionType.SUCCESS:
      return (state = { ...state, ...action.payload });
    case JobActionType.SET_QUERY:
      return { ...state, query: action.payload };
    default:
      return state;
  }
};

export default jobReducer;
